import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AOSInitializer } from '@/components/AOSInitializer';
import DisplayNavbar from "@/components/displayNavbar";
import { BgConditionProvider } from "@/components/BgConditionContext";
import 'dotenv/config';

require('dotenv').config()

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "John Fraser SAC Website",
  description: "Made by Yang Xue with some love :)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <BgConditionProvider>
      <html lang="en">
        <body>
          <DisplayNavbar />
          <AOSInitializer />
            {children}
          <Footer />
        </body>
      </html>
    </BgConditionProvider>
  );
}
