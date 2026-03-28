import type { Metadata } from "next";
import { Space_Grotesk, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Studio Conch — Clapton, Hackney, London",
  description:
    "A creative studio space in the heart of Clapton, Hackney. Available for photography, film, and content creation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${dmSerifDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#F5F0E8] text-[#1A1A1A]">
        {children}
      </body>
    </html>
  );
}
