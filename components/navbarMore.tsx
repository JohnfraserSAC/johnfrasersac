import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ChevronUp } from "lucide-react";
import Link from "next/link";

const links = [
  { 
    name: "Photos", 
    href: "https://drive.google.com/drive/folders/1WIpAVouRSgXtycP7XPadHCjcF38iH1uD?usp=drive_link" 
  },
  { 
    name: "Published Meeting Agendas", 
    href: "https://google.com/" 
  },
  { 
    name: "SAC Budget Transparency Plans 2025", 
    href: "/JFSS_SAC_Transparency_Report.pdf" 
  },
  // add more links here
];

const More = () => {
  const [isOpen, setIsOpen] = useState(false);
  const arrowRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    // this rotates the arrow
    gsap.to(arrowRef.current, {
      rotate: isOpen ? 540 : 0,
      duration: 0.45,
      ease: "power2.inOut",
    });

    // this does the sick wiping animation
    if (isOpen) {
      gsap.fromTo(
        dropdownRef.current,
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.5, ease: "power2.inOut" }
      );
    } else {
      gsap.to(dropdownRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
      });
    }
  }, [isOpen]);

  return (
    <div className="relative">
      {/* TOGGLE */}
      <div
        className="flex items-center justify-start cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="rounded-md pl-3 py-2 text-md font-medium text-gray-300">More</p>
        <div ref={arrowRef} className="text-gray-200 ml-2">
          <ChevronUp size={20} />
        </div>
      </div>

      {/* MENU */}
      <div
        ref={dropdownRef}
        className="overflow-hidden absolute top-full mt-2 w-48 text-gray-200 rounded shadow-lg"
        style={{ height: 0 }}
      >
        <ul className="flex flex-col bg-[#1c3b6a] md:bg-transparent">
          {links.map((link) => (
              <Link
              key={link.name}
              href={link.href}
              className=""
            >
              <li
                key={link.name}
                className="rounded-md pl-3 py-2 text-md font-medium text-gray-300 hover:bg-gray-700 cursor-pointer"
                >
                  
                    <p>{link.name}</p>
                </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default More;