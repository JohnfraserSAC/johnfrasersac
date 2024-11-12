import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AOSInitializer } from '@/components/AOSInitializer';
import Navbar from "@/components/Navbar";
import 'dotenv/config';


require('dotenv').config()

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "John Fraser SAC Website",
  description: "Made by the John Fraser Secondary School Student Council with some love :)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <AOSInitializer />
          {children}
        <Footer />
      </body>
    </html>
  );
}
