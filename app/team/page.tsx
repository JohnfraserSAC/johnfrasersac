import React from "react";
import Image from "next/image";
import ExecutiveInfo from "@/components/ExecutiveInfo";

const teamMembers = [
  {
    id: 1,
    name: "Aleena Ali",
    role: "President",
    image: "/team/aleena-ali.jpg",
    description: "Hi Jags! I’m Aleena, one of your Co-Presidents for this year :) The last 3 years on SAC have been amazing and we can’t wait to introduce you all to all of the amazing events this year!",
  },
  {
    id: 2,
    name: "Cody Doan",
    role: "President",
    image: "/team/cody-doan.jpg",
    description: "Hey everyone! I'm Cody, one of your Co-Presidents this year! After three years on SAC, I'm excited about the amazing events we have planned and look forward to making this year truly memorable for all of us!",
  },
    {
    id: 3,
    name: "Shashvati Deshmukh",
    role: "Secretary",
    image: "/team/shashvati-deshmukh.jpg",
    description: "",
  },
  {
    id: 4,
    name: "Nikhil Khanna",
    role: "Treasurer",
    image: "/team/nikhil-khanna.jpg",
    description: "Hey everyone!  I’m Nikhil, your treasurer for this year.  I’m super excited to work with the student body and SAC to ensure our events are as fun as possible (while staying in budget 🤑)!!!",
  },
  {
    id: 5,
    name: "Amrita Rajaram",
    role: "Clubs Liaison",
    image: "/team/amrita-rajaram.jpg",
    description: "Hi everyone! I'm Amrita and your club liaison this year! If you're interested in anything clubs-related or want some info/clarity on any club matter reach out to me through email or Instagram! Very excited to see what all the clubs accomplish this year!",
  },
  {
    id: 6,
    name: "Arya Holmukhe",
    role: "Technology Liaison",
    image: "/team/arya-holmukhe.jpg",
    description: "",
  },
  {
    id: 7,
    name: "Akshat Chopra",
    role: "Environmental Liaison",
    image: "/team/akshat-chopra.jpg",
    description: "",
  },
  {
    id: 8,
    name: "Ronia Puliyelil",
    role: "Arts Liaison",
    image: "/team/ronia-puliyelil.jpg",
    description: "",
  },
  
  {
    id: 9,
    name: "Hamza Saleh",
    role: "Athletics Liaison",
    image: "/team/hamza-saleh.jpg",
    description: "",
  },
  {
    id: 10,
    name: "Inesh Haque",
    role: "Community Outreach",
    image: "/team/inesh-haque.jpg",
    description: "",
  },
  {
    id: 11,
    name: "Bismaad Kalra",
    role: "Social Convenor",
    image: "/team/bismaad-kalra.jpg",
    description: "",
  },
  {
    id: 12,
    name: "Cindy Lee",
    role: "Photography Executive",
    image: "/team/cindy-lee.jpg",
    description: "",
  },
  {
    id: 13,
    name: "Kirpa Chandi",
    role: "Promotions Officer",
    image: "/team/kirpa-chandi.jpg",
    description: "",
  },
  {
    id: 14  ,
    name: "Adolina Kiflay",
    role: "Promotions Officer",
    image: "/team/adolina-kiflay.jpg",
    description: "Hey jags! I’m Adolina Kiflay and I’m one of your promotions officer this year and I’m so excited to make new and engaging promo with all of you!",
  },
];

const aboutTheTeam = [
  {
    title: "Executives",
    description:
      "Working closely with the SAC staff advisors, the Executive Team helps to oversee SAC and mentor members. The executive team is selected in May of each year through an application and election process.",
    image: "/team/jag.jpg",
    alt: "placeholder",
  },
  {
    title: "Grade Reps",
    description:
      "Grade Representatives work to voice the opinions of their grade and engage with them. Grade Representatives are selected in are selected in September of the new school year!",
    image: "/team/grade-reps.jpg",
    alt: "placeholder",
  },
  {
    title: "Honouraries",
    description:
      "Honourary Members make up the majority of SAC. They are student leaders who help to plan, execute, and promote SAC events. Honourary positions are chosen at the start of the year and can be found here.",
    image: "/team/honouraries.jpg",
    alt: "placeholder",
  },
];

const page = () => {
  return (
    <main>
      <div
        className="custom-background-4 text-white flex flex-col lg:justify-between justify-center items-center"
        style={{ height: "90.33vh" }}
      >
        <div className="text-center lg:mt-32 flex flex-col justify-center items-center lg:w-5/12 my-8">
          <h1 className="lgtext-7xl text-5xl font-semibold mb-4">
            Meet Our Team
          </h1>
          <p className="lg:text-xl text-base">
            SAC has over 30 members including executives, grade reps, and
            honorary members. Learn more about our current members!
          </p>
        </div>
        <Image
          src={"/meettheteam.jpg"}
          alt="meet the team image"
          width={1000}
          height={700}
          className="rounded-3xl mb-4"
        />
      </div>

      <div className="mx-auto container flex justify-center items-center flex-col md:flex-row md:gap-x-10 gap-y-20 my-20">
        {aboutTheTeam.map((about, index) => (
          <div
            key={index}
            className="bg-gray-200 flex justify-center items-center flex-col text-center rounded-2xl h-[70vh] w-[40vh]"
          >
            <div
              className="w-full flex justify-center items-center h-1/2"
            >
              <div className="w-52 h-52 overflow-hidden relative">
                <Image
                  src={about.image ?? "/placeholder.jpg"}
                  alt={about.alt ?? "Placeholder"}
                  fill
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
            </div>
            <div className="w-full flex flex-col justify-center items-center h-1/2">
              <h1 className="font-semibold text-3xl my-4">{about.title}</h1>
              <p className="w-11/12 tracking-wide leading-7">
                {about.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div>
        <div className="w-full flex flex-col justify-center items-center">
          <div className="w-full flex justify-center items-center flex-col">
            <p className="tracking-widest font-light">MEET THE...</p>
            <h1 className="font-medium text-4xl mt-4">Executive Team</h1>
          </div>
          <div className="lg:grid lg:grid-cols-4 lg:gap-x-32 lg:gap-y-12 flex flex-col justify-center items-center gap-y-8 my-8">
            {teamMembers.map((member) => (
              <ExecutiveInfo
                key={member.id}
                name={member.name}
                role={member.role}
                image={member.image}
                description={member.description}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
