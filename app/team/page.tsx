import React from "react";
import Image from "next/image";
import ExecutiveInfo from "@/components/ExecutiveInfo";

const teamMembers = [
  {
    id: 1,
    name: "Hamza Saleh",
    role: "President",
    image: "/team/execs/hamza-saleh.jpg",
    description:
      "",
  },
  {
    id: 2,
    name: "David Chen",
    role: "Vice-President",
    image: "/team/execs/david-chen.jpg",
    description:
      "",
  },
  {
    id: 3,
    name: "Ananya Sithique",
    role: "Secretary",
    image: "/team/execs/ananya-sithique.jpeg",
    description: "",
  },
  {
    id: 4,
    name: "Amrita Rajaram",
    role: "Treasurer",
    image: "/team/execs/amrita-rajaram.jpg",
    description:
      "",
  },
  {
    id: 5,
    name: "Jhanvi Patel",
    role: "Clubs Liaison",
    image: "/team/execs/jhanvi-patel.jpg",
    description:
      "",
  },
  {
    id: 6,
    name: "Sohum Padhye",
    role: "Technology Liaison",
    image: "/team/execs/sohum-padhye.jpg",
    description: "",
  },
  {
    id: 7,
    name: "Yang Xue",
    role: "Technology Liaison",
    image: "/team/execs/yang-xue.jpg",
    description: "",
  },
  {
    id: 8,
    name: "Shaurya Dedhia",
    role: "General Executive",
    image: "/team/execs/shaurya-dedhia.jpg",
    description: "",
  },
  {
    id: 9,
    name: "Arjita Chaudhary",
    role: "Arts Liaison",
    image: "/team/execs/arjita-chaudhary.jpeg",
    description: "",
  },
  {
    id: 10,
    name: "Nadine Mughal",
    role: "Athletics Liaison",
    image: "/team/execs/nadine-mughal.jpeg",
    description: "",
  },
  {
    id: 11,
    name: "Arshaan Thind",
    role: "Community Outreach",
    image: "/team/execs/arshaan-thind.jpeg",
    description: "",
  },
  {
    id: 12,
    name: "Tianna Lim",
    role: "Social Convenor",
    image: "/team/execs/tianna-lim.jpg",
    description: "",
  },
  {
    id: 13,
    name: "Justin Deng",
    role: "Photography Executive",
    image: "/team/execs/justin-deng.jpg",
    description: "",
  },
  {
    id: 14,
    name: "Salahuddin Siddiqui",
    role: "Photography Executive",
    image: "/team/execs/salahuddin-siddiqui.jpg",
    description: "",
  },
  {
    id: 15,
    name: "Grabielle Caroo",
    role: "Promotions Officer",
    image: "/team/execs/gabrielle-carroo.jpg",
    description: "",
  },
  {
    id: 16,
    name: "Rasleen Kaur",
    role: "Promotions Officer",
    image: "/team/execs/rasleen-kaur.png",
    description:
      "",
  },
];

const gradeReps = [
  {
    id: 1,
    name: "Dory Haider",
    role: "Grade 9 Rep.",
    image: "/team/grade-reps/dory.jpg",
  },
  {
    id: 2,
    name: "Kirat Chopra",
    role: "Grade 10 Rep.",
    image: "/team/grade-reps/kirat.jpg",
  },
  {
    id: 3,
    name: "Eshaal Cheema",
    role: "Grade 11 Rep.",
    image: "/team/grade-reps/eshaal.jpg",
  },
  {
    id: 4,
    name: "Inesh Haque",
    role: "Grade 12 Rep.",
    image: "/team/grade-reps/inesh.jpg",
  },
];

const honouraries = [
  {
    id: 2,
    name: "Alissa Roy",
    role: "Honourary",
    image: "/team/honorouries/alissa.jpg",
  },
  {
    id: 3,
    name: "Angad Gupta",
    role: "Honourary",
    image: "/team/honorouries/angad.jpg",
  },
  {
    id: 4,
    name: "Athang Deshmukh",
    role: "Honourary",
    image: "/team/honorouries/athang.jpg",
  },
  {
    id: 5,
    name: "Cayden Janjua",
    role: "Honourary",
    image: "/team/honorouries/cayden.jpg",
  },
  {
    id: 6,
    name: "Eshal",
    role: "Honourary",
    image: "/team/honorouries/eshal.jpg",
  },
  {
    id: 7,
    name: "Gwendolen",
    role: "Honourary",
    image: "/team/honorouries/gwen.jpg",
  },
  {
    id: 8,
    name: "Hanzalah Vayani",
    role: "Honourary",
    image: "/team/honorouries/hanzalah.jpg",
  },
  {
    id: 9,
    name: "Harshad",
    role: "Honourary",
    image: "/team/honorouries/harshad.jpg",
  },
  {
    id: 10,
    name: "Himaja",
    role: "Honourary",
    image: "/team/honorouries/himaja.jpg",
  },
  {
    id: 11,
    name: "Isabelle",
    role: "Honourary",
    image: "/team/honorouries/isabelle.jpg",
  },
  {
    id: 12,
    name: "Julie",
    role: "Honourary",
    image: "/team/honorouries/julie.jpg",
  },
  {
    id: 13,
    name: "Lavikaa Sreeskumar",
    role: "Honourary",
    image: "/team/honorouries/lavikaa.jpg",
  },
  {
    id: 14,
    name: "Maymun",
    role: "Honourary",
    image: "/team/honorouries/maymun.jpg",
  },
  {
    id: 15,
    name: "Musifrah",
    role: "Honourary",
    image: "/team/honorouries/musifrah.jpg",
  },
  {
    id: 16,
    name: "Navya",
    role: "Honourary",
    image: "/team/honorouries/navya.jpg",
  },
  {
    id: 17,
    name: "Nikhil",
    role: "Honourary",
    image: "/team/honorouries/nikhil.jpg",
  },
  {
    id: 18,
    name: "Noah",
    role: "Honourary",
    image: "/team/honorouries/noah.jpg",
  },
  {
    id: 19,
    name: "Rahaf",
    role: "Honourary",
    image: "/team/honorouries/rahaf.jpg",
  },
  {
    id: 20,
    name: "Sarah Haider",
    role: "Honourary",
    image: "/team/honorouries/sarah.jpg",
  },
  {
    id: 21,
    name: "Shanvir Sidhu",
    role: "Honourary",
    image: "/team/honorouries/shanvir.jpg",
  },
  {
    id: 22,
    name: "Shining",
    role: "Honourary",
    image: "/team/honorouries/shining.jpg",
  },
  {
    id: 23,
    name: "Teddy",
    role: "Honourary",
    image: "/team/honorouries/teddy.jpg",
  },
  {
    id: 24,
    name: "Yasmine",
    role: "Honourary",
    image: "/team/honorouries/yasmine.jpg",
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
    title: "Honoraries",
    description:
      "Honorary Members make up the majority of SAC. They are student leaders who help to plan, execute, and promote SAC events. Honorary positions are chosen at the start of the year and can be found here.",
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
          className="rounded-3xl mb-32"
        />
      </div>

      <div className="mx-auto container flex justify-center items-center flex-col md:flex-row md:gap-x-10 gap-y-20 my-20">
        {aboutTheTeam.map((about, index) => (
          <div
            key={index}
            className="bg-gray-200 flex justify-center items-center flex-col text-center rounded-2xl h-[90vh] w-[40vh]"
          >
            <div className="w-full flex justify-center items-center h-1/3">
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
            <h2 className="font-small text-m mt-4">Hover to view their roles!</h2>
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

      {/* Grade reps sections */}
      <div>
        <div className="w-full flex flex-col justify-center items-center">
          <div className="w-full flex justify-center items-center flex-col">
            <p className="tracking-widest font-light">
              Amplifying Our Voices and Keeping Us Connected...
            </p>
            <h1 className="font-medium text-4xl mt-4">Grade Representative</h1>
          </div>
          <div className="lg:grid lg:grid-cols-4 lg:gap-x-32 lg:gap-y-12 flex flex-col justify-center items-center gap-y-8 my-8">
            {gradeReps.map((member) => (
              <ExecutiveInfo
                key={member.id}
                name={member.name}
                role={member.role}
                image={member.image}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Honorouries section */}
      <div>
        <div className="w-full flex flex-col justify-center items-center">
          <div className="w-full flex justify-center items-center flex-col">
            <p className="tracking-widest font-light">
              Turning visions into reality with their support and dedication...
            </p>
            <h1 className="font-medium text-4xl mt-4">Honoraries</h1>
          </div>
          <div className="lg:grid lg:grid-cols-4 lg:gap-x-32 lg:gap-y-12 flex flex-col justify-center items-center gap-y-8 my-8">
            {honouraries.map((member) => (
              <ExecutiveInfo
                key={member.id}
                name={member.name}
                role={member.role}
                image={member.image}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;