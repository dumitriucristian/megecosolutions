import "./globals.css";
import { Exo_2 } from "next/font/google";

const exo2 = Exo_2({
  variable: "--font-exo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${exo2.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="flex min-h-full flex-col bg-white text-slate-950">{children}</body>
    </html>
  );
}
