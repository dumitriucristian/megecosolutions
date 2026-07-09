import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SkipToContent } from "@/components/SkipToContent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "MEG EcoSolutions",
    template: "%s | MEG EcoSolutions",
  },
  description:
    "Technical solutions for municipal waste management and energy resilience — engineered for B2G performance, compliance, and measurable recovery.",
  metadataBase: new URL("https://megecosolutions.com"),
  openGraph: {
    title: "MEG EcoSolutions",
    description:
      "Technical solutions for municipal waste management and energy resilience — engineered for B2G performance, compliance, and measurable recovery.",
    url: "https://megecosolutions.com",
    siteName: "MEG EcoSolutions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MEG EcoSolutions",
    description:
      "Technical solutions for municipal waste management and energy resilience — engineered for B2G performance, compliance, and measurable recovery.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white text-slate-950 flex flex-col">
        <SkipToContent />
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
