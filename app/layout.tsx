import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";

import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Fluxtent — Thoughtful Health Technology",
  description:
    "Fluxtent is a portfolio foundation by Arnav Singh and Varun Puttagunta, focused on building thoughtful, accessible, health-related digital products.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Fluxtent — Thoughtful Health Technology",
    description:
      "A portfolio foundation for thoughtfully designed digital tools that support healthier, more intentional everyday living.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${manrope.variable} ${cormorant.variable}`}>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
