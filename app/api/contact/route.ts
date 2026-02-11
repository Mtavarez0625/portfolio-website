import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing fields. Please fill out the form." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;

    // If Resend isn't configured yet, don't break the portfolio.
    if (!apiKey || !toEmail) {
      console.log("[contact] Email not configured. Message saved to logs:", {
        name,
        email,
        message,
        hasKey: Boolean(apiKey),
        hasTo: Boolean(toEmail),
      });

      return NextResponse.json({
        ok: true,
        message:
          "Message received! (Email delivery not configured yet — set RESEND_API_KEY + CONTACT_TO_EMAIL to enable.)",
      });
    }

    // Only import Resend if key exists (prevents runtime crashes)
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    const result = await resend.emails.send({
      // For production, you should use a verified sender/domain in Resend
      from: "Marcos Tavarez <contact@marcostavarez.com>",
      to: [toEmail], // ✅ USE THE ENV VAR HERE
      subject: `New message from ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    // Optional: log result id for debugging
    console.log("[contact] Resend result:", result);

    return NextResponse.json({ ok: true, message: "Message sent successfully!" });
  } catch (err) {
    console.error("[contact] error:", err);
    return NextResponse.json(
      { error: "Server error. Please try again." },
      { status: 500 }
    );
  }
}
