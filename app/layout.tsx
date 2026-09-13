import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#09090f",
};

export const metadata: Metadata = {
  title: "Lasting Memory — An Agentic Life Vault",
  description:
    "Preserve who you are, not just what you made. An AI-guided life vault that captures your stories, values, and wisdom — and shares them with the people who matter.",
  openGraph: {
    title: "Lasting Memory",
    description: "Preserve who you are, not just what you made.",
    url: "https://lastingmemory.com",
    siteName: "Lasting Memory",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lasting Memory",
    description: "Preserve who you are, not just what you made.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
