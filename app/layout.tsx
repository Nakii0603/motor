import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Motor Oil Co. — Premium Engine Protection",
  description:
    "High-performance synthetic motor oils engineered for protection, efficiency, and extended drain intervals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-white bg-[--color-brand-blue-dark]`}
      >
        <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/40">
          <nav className="max-w-screen-md mx-auto px-5 py-3 flex items-center justify-between">
            <Link
              href="/"
              className="text-base font-semibold tracking-tight text-[--color-brand-orange]"
            >
              Motor Oil Co.
            </Link>
            <div className="flex items-center gap-4 text-sm">
              <Link
                href="/products"
                className="hover:text-[--color-brand-orange]"
              >
                Products
              </Link>
              <Link href="/about" className="hover:text-[--color-brand-orange]">
                About
              </Link>
              <Link
                href="/contact"
                className="hover:text-[--color-brand-orange]"
              >
                Contact
              </Link>
            </div>
          </nav>
          <div className="h-1 w-full bg-gradient-to-r from-[--color-brand-blue-dark] via-[--color-brand-orange] to-[--color-brand-blue-dark]" />
        </header>
        <div className="pt-0">{children}</div>
      </body>
    </html>
  );
}
