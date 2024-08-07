import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex h-screen w-full flex-col">
      {/* Subscription Section */}
      <div className="relative flex flex-grow items-center">
        <Image
          src="/footer-bg.jpg" // Make sure this image exists in your public folder
          layout="fill"
          objectFit="cover"
          alt="Footer background"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <p className="mb-2 text-xs uppercase tracking-widest text-amber-400">
            Subscribe
          </p>
          <h2 className="mb-4 text-3xl font-semibold leading-tight text-white md:text-4xl lg:text-5xl">
            John Fraser SAC Google Classroom
          </h2>
          <p className="mb-6 text-lg text-white">
            Receive monthly updates and pictures of our events!
          </p>
          <Link
            href="https://classroom.google.com/u/0/c/NDQ0MDU4NTQxNDBa?cjc=i725i36"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="button-2">
              Join Now
            </button>
          </Link>
        </div>
      </div>

      {/* Main Footer Section */}
      <div className="bg-black py-6 text-white">
        <div className="container mx-auto px-4">
          <div className="mb-4 flex flex-col items-center">
            <Image
              src="/WSAC-Logo.png"
              alt="SAC Logo"
              width={150}
              height={53}
              className="mb-3"
            />
            <p className="max-w-2xl text-center text-xs md:text-sm">
              Questions? Shoot us an email at johnfraserstudentcouncil@gmail.com
              or message @johnfrasersac on Instagram. For questions or inquiries
              about clubs, please email info@johnfrasersac.com
            </p>
          </div>

          <hr className="my-3 border-gray-700" />

          <div className="flex flex-col items-center justify-between space-y-1 text-xs md:flex-row md:space-y-0">
            <p>&copy; {new Date().getFullYear()} SAC John Fraser</p>
            <p>Made and Maintained By John Fraser Students</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;