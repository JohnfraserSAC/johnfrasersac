"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  const [currentHeroImage, setCurrentHeroImage] = useState("/hero.jpg");
  const [fade, setFade] = useState(true);

  const heroImages = ["/hero.jpg", "/hero3.jpg", "/cw-1.png"];
  const currentIndexRef = useRef(0); // <-- useRef for index

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        currentIndexRef.current = (currentIndexRef.current + 1) % heroImages.length;
        setCurrentHeroImage(heroImages[currentIndexRef.current]);
        setFade(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const images = [
    {
      id: "gmail",
      colored: "/links/gmail-colored.jpg",
      grayscale: "/links/gmail-grayscale.png",
      link: "mailto:johnfraserstudentcouncil@gmail.com?subject=Student%20Council%20Inquiry&body=Dear%20Student%20Council%2C%0A%0AI%20would%20like%20to%20ask%20about...",
      alt: "gmail",
    },
    {
      id: "instagram",
      colored: "/links/instagram-colored.jpg",
      grayscale: "/links/instagram-grayscale.png",
      link: "https://www.instagram.com/johnfrasersac/",
      alt: "Instagram",
    },
  ];

  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center md:pb-30 py-40">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.png"
            layout="fill"
            objectFit="cover"
            alt="Hero background"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between lg:flex-row space-y-10 lg:space-y-0 lg:space-x-10">
            <div className="lg:w-5/12">
              <h1 className="mb-6 text-4xl font-bold text-white lg:text-6xl">
                John Fraser Student Council
              </h1>
              <p className="mb-8 text-xl text-white">
                Run By Students, For Students. Made with passion and heart
              </p>
              <div className="flex flex-col items-start lg:items-center sm:flex-row">
                <Link href="/opportunities" className="mb-4 sm:mb-0 sm:mr-4">
                  <button className="button-2">Get Involved</button>
                </Link>
                <Link
                  href="/announcements"
                  className="text-white hover:underline ml-2"
                >
                  View Announcements &rarr;
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div
                className={` transition-opacity duration-500 ${
                  fade ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={currentHeroImage}
                  width={500}
                  height={300}
                  alt="Hero image"
                  objectFit="cover"
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20  mx-5 md:mx-20">
        <div className="container mx-auto flex flex-col items-center lg:flex-row">
          <div className="mb-10 lg:mb-0 lg:w-1/4">
            <Image
              src="/co-pres.jpg"
              width={400}
              height={400}
              alt="Who we are"
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="lg:w-2/3 lg:pl-16">
            <h2 className="mb-6 text-3xl font-bold lg:text-4xl">
              WHO WE ARE
            </h2>
            <p className="mb-8 text-xl">
              <strong>
                SAC stands for &quot;Student Activity Council&quot;. We are a
                team of John Fraser students committed to enhancing your high
                school experience through a diverse array of events! Learn
                more about what we do and how you can get involved on this
                page.
              </strong>
            </p>
            <div className="flex flex-col justify-between sm:flex-row">
              <div className="mb-6 sm:mb-0">
                <p className="font-bold">Co-president</p>
                <p>Aleena Ali</p>
              </div>
              <div>
                <p className="font-bold">Co-president</p>
                <p>Cody Doan</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20  mx-5 md:mx-20">
        <div className="container mx-auto flex flex-col items-center lg:flex-row">
          <div className="mb-10 lg:mb-0 lg:w-1/2">
            <Image
              className="rounded-xl shadow-lg"
              src="/events.jpg"
              width={550}
              height={300}
              alt="Upcoming events"
              objectFit="cover"
            />
          </div>
          <div className="lg:w-1/2 lg:pl-16">
            <h2 className="mb-6 text-3xl font-bold lg:text-4xl">
              Upcoming Events
            </h2>
            <p className="mb-8 text-xl">
              <strong>
                Learn more about being involved with SAC, or information about
                our events!
              </strong>
            </p>
            <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                "Updated Monthly",
                "SAC Application News",
                "Lots of Opportunities",
                "Announcements",
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <Image
                    src="/checkmark.jpg"
                    width={25}
                    height={25}
                    alt="checkmark"
                    className="mr-2"
                  />
                  <p>{item}</p>
                </div>
              ))}
            </div>
            <Link href="/announcements">
              <button className="button-2">View Announcements</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-20  mx-5 md:mx-20">
        <div className="container mx-auto">
          <div className="mb-10 flex items-center justify-between">
            <h2 className="text-3xl font-bold lg:text-4xl">Meet Our Team</h2>
            <Link href="/team">
              <button className="button-5">Learn More</button>
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center space-y-10 sm:flex-row sm:space-x-10 sm:space-y-0">
            {["Aleena Ali", "Cody Doan"].map((name, index) => (
              <div
                key={index}
                className="relative h-80 w-64 overflow-hidden rounded-lg bg-gray-100 shadow-md"
              >
                <Image
                  src={`/team/execs/${name.toLowerCase().replace(" ", "-")}.jpg`}
                  layout="fill"
                  objectFit="cover"
                  alt={name}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <p className="font-bold text-white">{name}</p>
                  <p className="text-white">
                    {index === 0 ? "Co-president" : "Co-president"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Links Section */}
      <section className="py-20 mx-5 md:mx-20">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-evenly gap-y-4 lg:flex-row lg:gap-x-4">
            {images.map((image) => (
              <div
                key={image.id}
                onMouseEnter={() => setHoveredImage(image.id)}
                onMouseLeave={() => setHoveredImage(null)}
                className="transition-transform duration-300 hover:scale-110"
              >
                <Link href={image.link} target="_blank" rel="noopener noreferrer">
                  <Image
                      src={
                        hoveredImage === image.id
                          ? image.colored
                          : image.grayscale
                      }
                      height={140}
                      width={140}
                      alt={image.alt}
                      className="transition-opacity duration-300"
                    />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photos and Feedback Sections */}
      <section className="py-2 m-5 md:m-20">
        <div className="container mx-auto">
          <div className="mb-20">
            <h2 className="mb-4 text-3xl font-bold">Say Cheese!</h2>
            <p className="mb-6 text-xl">
              You can now see any photos taken by John Fraser&apos;s SAC on
              our website.
            </p>
            <Link href="https://johnfrasersac.com/photos/">
              <button className="button-2">See Photos</button>
            </Link>
          </div>
          <hr className="my-20 border-t border-gray-200" />
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              We&apos;d love to hear from you
            </h2>
            <p className="mb-6 text-xl">
              Let us know how we&apos;re doing, if you have any ideas for new
              events, or feedback on existing ones!
            </p>
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdJO3rFBZiyOMEVoZYRCxcfUwLlQCmgo8LuJfxssci0tHlsew/viewform">
              <button className="button-2">Give Us Feedback</button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
