import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing fields. Please fill out the form." },
        { status: 400 }
      );
    }

    // If you don't have Resend set yet, we still return success
    // so your portfolio doesn't break while you're polishing UI.
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.log("[contact] RESEND_API_KEY not set. Message saved to logs:", {
        name,
        email,
        message,
      });

      return NextResponse.json({
        ok: true,
        message:
          "Message received! (Email delivery not configured yet — set RESEND_API_KEY to enable.)",
      });
    }

    // Only import Resend if key exists (prevents runtime crashes)
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["youremail@example.com"],
      subject: `New message from ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    return NextResponse.json({ ok: true, message: "Message sent successfully!" });
  } catch (err) {
    console.error("[contact] error:", err);
    return NextResponse.json(
      { error: "Server error. Please try again." },
      { status: 500 }
    );
  }
}