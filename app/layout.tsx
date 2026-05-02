import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Fluxtent | Health Product Portfolio",
    template: "%s | Fluxtent",
  },
  description:
    "Fluxtent is a founder-led portfolio of health-focused Chrome extensions and web products built by Arnav Singh and Varun Puttagunta.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Fluxtent | Health Product Portfolio",
    description:
      "A focused portfolio of browser and web products for allergen safety, digital wellness, medication adherence, health guidance, and cognitive fitness.",
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
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
