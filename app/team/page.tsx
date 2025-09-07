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
    role: "President",
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
    name: "Shaurya Dedhia",
    role: "Grade 9 Rep.",
    image: "/team/grade-reps/shaurya-dedhia.jpg",
  },
  {
    id: 2,
    name: "Akshath Suresh",
    role: "Grade 10 Rep.",
    image: "/team/grade-reps/akshath-suresh.jpg",
  },
  {
    id: 3,
    name: "Tianna Lim",
    role: "Grade 11 Rep.",
    image: "/team/unknown.jpg",
  },
  {
    id: 4,
    name: "Eshal Siddiqi",
    role: "Grade 12 Rep.",
    image: "/team/grade-reps/eshal-siddiqi.jpg",
  },
];

const honouraries = [
  {
    id: 1,
    name: "Aaradhana Vijaykrishnan",
    role: "Honoroury",
    image: "/team/honorouries/aaradhana-vijaykrishnan.jpg",
  },
  {
    id: 2,
    name: "Abdelrahman",
    role: "Honoroury",
    image: "/team/honorouries/abdelrahman.jpg",
  },
  {
    id: 3,
    name: "Ananya Sithique Hasan",
    role: "Honoroury",
    image: "/team/honorouries/ananya-sithique-hasan.jpg",
  },
  {
    id: 4,
    name: "Anthony Doan",
    role: "Honoroury",
    image: "/team/honorouries/anthony-doan.jpg",
  },
  {
    id: 5,
    name: "Arjun Garg",
    role: "Honoroury",
    image: "/team/honorouries/arjun-garg.jpg",
  },
  {
    id: 6,
    name: "Arshaan Thind",
    role: "Honoroury",
    image: "/team/honorouries/arshaan-thind.jpg",
  },
  {
    id: 7,
    name: "David Chen",
    role: "Honoroury",
    image: "/team/honorouries/david-chen.jpg",
  },
  {
    id: 8,
    name: "Isabelle Ng",
    role: "Honoroury",
    image: "/team/honorouries/isabelle-ng.jpg",
  },
  {
    id: 9,
    name: "Jamie Chen",
    role: "Honoroury",
    image: "/team/honorouries/jamie-chen.jpg",
  },
  {
    id: 10,
    name: "Justin Deng",
    role: "Honoroury",
    image: "/team/honorouries/justin-deng.jpg",
  },
  {
    id: 11,
    name: "Muhammad Syed",
    role: "Honoroury",
    image: "/team/honorouries/muhammad-yed.jpg",
  },
  {
    id: 12,
    name: "Nadine Mughal",
    role: "Honoroury",
    image: "/team/honorouries/nadine-mughal.jpg",
  },
  {
    id: 13,
    name: "Nolan Lee",
    role: "Honoroury",
    image: "/team/honorouries/nolan-lee.jpg",
  },
  {
    id: 14,
    name: "Sami Khan",
    role: "Honoroury",
    image: "/team/honorouries/sami-khan.jpg",
  },
  {
    id: 15,
    name: "Shanvir Sidhu",
    role: "Honoroury",
    image: "/team/honorouries/shanvir-sidhu.jpg",
  },
  {
    id: 16,
    name: "Sophia Chen",
    role: "Honoroury",
    image: "/team/honorouries/sophia-chen.jpg",
  },
  {
    id: 17,
    name: "Inaaya Rohail",
    role: "Honoroury",
    image: "/team/honorouries/inaaya-rohail.jpg",
  },
  {
    id: 18,
    name: "Manahil",
    role: "Honoroury",
    image: "/team/unknown.jpg",
  },
  {
    id: 19,
    name: "Yang Xue",
    role: "Honoroury",
    image: "/team/unknown.jpg",
  },
  {
    id: 20,
    name: "Rania Amin",
    role: "Honoroury",
    image: "/team/honorouries/rania-amin.jpg",
  },
  {
    id: 21,
    name: "Jhanvi Patel ",
    role: "Honoroury",
    image: "/team/unknown.jpg",
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
          className="rounded-3xl mb-4"
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
      {/* <div>
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
      {/* <div>
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
      </div> */}
    </main>
  );
};

export default page;