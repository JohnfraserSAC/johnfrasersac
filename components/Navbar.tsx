"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import More from "./navbarMore";

const links = [
  { name: "Announcements", href: "/announcements" },
  { name: "SAC Opportunities", href: "/opportunities" },
  { name: "Clubs", href: "/clubs" },
  { name: "Our Team", href: "/team" },
  { name: "FraserTickets", href: "https://tickets.aritrosaha.ca/" },
  { name: "FraserPay", href: "https://pay.johnfrasersac.com/" },
];

export default function Navbar() {
    const appOpenDate = new Date(2025, 8, 3, 8, 0, 0).getTime();
    const appCloseDate = new Date(2025, 8, 8, 23, 59, 59).getTime();
    const [appStage, setAppStage] = useState<0 | 1 | 2>(0);

    // 0 -> apps are not open yet
    // 1 -> apps are open
    // 2 -> apps are closed
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    const [now, setNow] = useState<Date>();

  const [isOpen, setIsOpen] = useState(false);
  const [logoSrc, setLogoSrc] = useState("/WSAC-Logo.png");
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

//   useEffect(() => {
//     const now = new Date().getTime();
//   }, [])

  useEffect(() => {
    const interval = setInterval(() => {
        const now = new Date().getTime();
        let difference;
        if (now < appOpenDate) {
            difference = appOpenDate - now;
            setAppStage(0);
        } else if (now < appCloseDate) {
            difference = appCloseDate - now;
            setAppStage(1);
        } else {
            difference = 0;
            setAppStage(2);
        }
        
        if (difference <= 0) {
            clearInterval(interval);
            setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        } else {
            setTimeLeft({
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((difference % (1000 * 60)) / 1000)
            })
        }
    }, 1000);

    return () => clearInterval(interval);
  }, [appOpenDate, appCloseDate]);

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
          <div className="hidden lg:block">
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
              {/* this is the special dropdown menu */}
              <More />
            </div>
          </div>
          <div className="lg:hidden">
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
        <div className="flex w-full mt-5 lg:hidden ">
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
            {/* this is the special dropdown menu */}
            <More />
          </div>
        </div>
      )}

      <div className="mt-4 w-full py-2 bg-[#1C3B6A] flex flex-col place-items-center text-white font-semibold text-center border-y-[1px] border-y-yellow-400">
        <div className="">
            {
                appStage == 0 ? "GET READY!" : appStage == 1 ? "APPLY!" : "Honourary applications have closed."
            }
        </div>
        <div className="">
            {
                appStage != 2 ? `${timeLeft.days} day(s), ${timeLeft.hours} hour(s), ${timeLeft.minutes} minute(s), ${timeLeft.seconds} second(s)` : ""
            }
        </div>
        <div>
            {
                appStage == 0 ? "until applications OPEN!" : appStage == 1 ? "until applications CLOSE!" : ""
            }
        </div>
        <div>
            <a target="_blank" href="https://apply.johnfrasersac.com/" className="text-yellow-400 hover:text-yellow-500 underline">SAC Application Portal</a>
        </div>
      </div>
    </nav>
  );
}
