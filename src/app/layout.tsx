import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { MotionConfig } from "framer-motion";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Nackl — Talk is cheap. Proof isn't.",
  description:
    "Nackl is a social accountability app: take a Dare, post the proof, get Validated by real people. Dares, Tribes, HypeShouts, and SlayCards.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
      </body>
    </html>
  );
}
