import type { Metadata } from "next";
import { Parkinsans, Fustat } from "next/font/google";
import "./globals.css";

import { Header } from '@/components/layout/header'

const parkinsans = Parkinsans({
  variable: "--font-parkinsans-sans",
  subsets: ["latin"],
});

const fustat = Fustat({
  variable: "--font-fustat-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nicolò Camassa - Portfolio",
  description: "Il mio portfolio personale dove vedere il mio lavoro", /* TODO: Cambiare i metdata */
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${parkinsans.variable} ${fustat.variable} antialiased`}
      >
        <Header />
        <div className="xl:mx-[180px] mx-[20px]">
          {children}
        </div>
        
      </body>
    </html>
  );
}
