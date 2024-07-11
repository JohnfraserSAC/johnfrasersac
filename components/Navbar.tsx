"use client"

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useBgCondition } from "./BgConditionContext";
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

import { devpostLink, name, registrationLink } from "@util/config";

import { FaBars } from 'react-icons/fa';
import TopBanner from "./TopBanner";

const clamp = (num: number, min: number, max: number) => Math.min(Math.max(num, min), max);

const links = [
    {
        name: "Anouncements",
        link: "/announcements",
        id: "anouncements",
        priority: false
    },
    {
        name: "SAC Oppurtunities",
        link: "/oppurtunities",
        id: "oppurtunities",
        priority: false
    },
    {
        name: "Clubs",
        link: "/clubs",
        id: "clubs",
        priority: false
    },
    {
        name: "Our Team",
        link: "/team",
        id: "team",
        priority: false
    },
    {
        name: "FraserTickets",
        link: "/frasertickets",
        id: "frasertickets",
        priority: false
    },
];



const scrollPosToPercentage = (scrollPos: number) => {
    const currScroll = clamp(Math.abs(scrollPos), 0, 80) * 100/80; // Goes opaque after 80 pixels scrolled (generally 1 scroll wheel click)
    return currScroll / 100; // Convert to percentage
}

interface NavbarProps {
    home?: boolean;
}

export default function Navbar({ home }: NavbarProps) {
    const { bgCondition } = useBgCondition();
    const [logoSrc, setLogoSrc] = useState('/WSAC-Logo.png');

    useEffect(() => {
        if (bgCondition === "blackbg") {
            setLogoSrc('/BSAC-Logo.png');
        } else {
            setLogoSrc('/WSAC-Logo.png');
        }
    }, [bgCondition]);

    const [showDropdown, setShowDropdown] = useState(false);
    const initialOpacity = home ? 0 : 1;
    const [opacity, setOpacity] = useState(initialOpacity);

    useScrollPosition(({ currPos }) => {
        if (home && !showDropdown) {
            const newOpacity = scrollPosToPercentage(currPos.y);
            setOpacity(newOpacity);
        }
    });

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 200) {
                setOpacity(0); 
            } else {
                const newOpacity = 1 - offset / 200;
                setOpacity(home ? newOpacity : 1);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [home]);

    return (
        <div className="fixed z-50 w-screen transition-opacity duration-500 ease-in-out" style={{ opacity: opacity }}>
            <nav 
                className={`bg-transparent flex flex-col items-center py-2 lg:py-4 w-full transition-colors duration-500 ease-in-out`}
            >
                <div className="container px-4 lg:flex lg:items-center lg:justify-around w-full">
                    <div className="flex justify-around items-center">
                            <a href="/#home" className="flex flex-row items-center gap-4 font-bold text-xl text-teal">
                                <Image src={logoSrc} alt="logo" width={200} height={64} quality={100}/>
                            </a>

                        <button
                            className="border border-solid border-gray-200 px-3 py-1 rounded text-gray-200 opacity-50 hover:opacity-75 lg:hidden cursor-pointer"
                            aria-label="Menu"
                            data-test-id="navbar-menu"
                            onClick={
                                () => {
                                    setShowDropdown(!showDropdown);
                                }}
                        >
                            <FaBars/>
                        </button>
                    </div>

                    <div className={`${showDropdown ? "flex" : "hidden"} lg:flex flex-col lg:flex-row mt-3 lg:mt-0`} data-test-id="navbar">
                        {
                            links.map(({ name, link, priority, id }) =>
                                <Link key={name} href={link}>
                                    <div onClick={() => setShowDropdown(false)} className={`${priority ? "text-emerald-300 hover:bg-emerald-900 hover:text-white text-center border border-solid border-emerald-900 mt-1 lg:mt-0 lg:ml-1 " : "text-gray-300 hover:bg-gray-200/25 hover:text-white"} text-base p-2 lg:px-4 lg:mx-2 rounded duration-300 transition-colors`}>
                                        {name}
                                    </div>
                                </Link>
                            )
                        }
                    </div>
                </div>
            </nav>
        </div>
    )
}