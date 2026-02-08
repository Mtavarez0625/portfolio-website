import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Marcos Tavarez | Full-Stack Developer",
  description:
    "Full-stack developer building clean, production-ready web applications with modern UI and reliable backend logic.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={[
          geistSans.variable,
          geistMono.variable,
          "font-sans antialiased bg-black text-white",
        ].join(" ")}
      >
        {children}
      </body>
    </html>
  );
}