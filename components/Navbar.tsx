"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";

const links = [
  { name: "Announcements", href: "/announcements" },
  { name: "SAC Opportunities", href: "/opportunities" },
  { name: "Clubs", href: "/clubs" },
  { name: "Our Team", href: "/team" },
  { name: "Photos", href: "https://drive.google.com/drive/folders/1WIpAVouRSgXtycP7XPadHCjcF38iH1uD?usp=drive_link" },
  { name: "FraserPay", href: "https://pay.johnfrasersac.com/" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [logoSrc, setLogoSrc] = useState("/WSAC-Logo.png");
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`py-8 fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled ? "bg-[#1c3b6a] shadow-md" : "bg-transparent"}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src={logoSrc}
                alt="Logo"
                width={300}
                height={300}
                className="h-28 w-auto"
              />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`rounded-md px-3 py-2 text-md font-medium ${
                    pathname === link.href
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="flex w-full mt-5 md:hidden ">
          <div className="space-y-1 rounded-xl bg-[#1c3b6a] px-2 pb-3 pt-2 sm:px-3">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`block rounded-md px-3 py-2 text-base font-medium ${
                  pathname === link.href
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
