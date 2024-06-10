import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AOSInitializer } from '@/components/AOSInitializer';
import Header from "@/components/Testnavbar";


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
    <html lang="en">
      
      <body className='{inter.className}'>
      <AOSInitializer />
      <Header />
        {children}
      <Footer />
      </body>
    </html>
  );
}
