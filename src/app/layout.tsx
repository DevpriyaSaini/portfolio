import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Devpriya",
  description: "I design intelligent, user-focused web experiences powered by AI and data, bringing ideas to life through clean design and smart code.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className='max-w-2xl mx-auto md:mt-12 mt-4 p-8'>
          {children}
        </div>
        <div className='max-w-2xl mx-auto'>
          <Footer />
        </div>
      </body>
    </html>
  );
}