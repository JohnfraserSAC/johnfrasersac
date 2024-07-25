import React from 'react'
import Image from 'next/image'
import ExecutiveInfo from '@/components/ExecutiveInfo'

const teamMembers = [
  {
    id: 1,
    name: 'Thoa Le',
    role: 'President',
    image: '/team/thoa-le.jpg',
    description: 'hiya my name is Thoa. I like being really really tall.'
  },
  {
    id: 2,
    name: 'Akshat Chopra',
    role: 'Vice President',
    image: '/team/akshat-chopra.jpg',
    description: 'hiya my name is Akshat. I like being really really tall.'
  },
  {
    id: 3,
    name: 'Thoa Le',
    role: 'President',
    image: '/team/thoa-le.jpg',
    description: 'hiya my name is Thoa. I like being really really tall.'
  },
  {
    id: 4,
    name: 'Akshat Chopra',
    role: 'Vice President',
    image: '/team/akshat-chopra.jpg',
    description: 'hiya my name is Akshat. I like being really really tall.'
  },
  {
    id: 5,
    name: 'Thoa Le',
    role: 'President',
    image: '/team/thoa-le.jpg',
    description: 'hiya my name is Thoa. I like being really really tall.'
  },
  {
    id: 6,
    name: 'Akshat Chopra',
    role: 'Vice President',
    image: '/team/akshat-chopra.jpg',
    description: 'hiya my name is Akshat. I like being really really tall.'
  },
  {
    id: 7,
    name: 'Thoa Le',
    role: 'President',
    image: '/team/thoa-le.jpg',
    description: 'hiya my name is Thoa. I like being really really tall.'
  },
  {
    id: 8,
    name: 'Akshat Chopra',
    role: 'Vice President',
    image: '/team/akshat-chopra.jpg',
    description: 'hiya my name is Akshat. I like being really really tall.'
  },
  {
    id: 9,
    name: 'Thoa Le',
    role: 'President',
    image: '/team/thoa-le.jpg',
    description: 'hiya my name is Thoa. I like being really really tall.'
  },
  {
    id: 10,
    name: 'Akshat Chopra',
    role: 'Vice President',
    image: '/team/akshat-chopra.jpg',
    description: 'hiya my name is Akshat. I like being really really tall.'
  },
];

const aboutTheTeam = [
  {
    title: 'Executives',
    description: 'Working closely with the SAC staff advisors, the Executive Team helps to oversee SAC and mentor members. The executive team is selected in May of each year through an application and election process.',
    image: '/placeholder.jpg',
    alt: 'placeholder'
  },
  {
    title: 'Grade Reps',
    description: 'Grade Representatives work to voice the opinions of their grade and engage with them. Grade Representatives are selected in are selected in September of the new school year!',
    image: '/placeholder.jpg',
    alt: 'placeholder'
  },
  {
    title: 'Honouraries',
    description: 'Honourary Members make up the majority of SAC. They are student leaders who help to plan, execute, and promote SAC events. Honourary positions are chosen at the start of the year and can be found here.',
    image: '/placeholder.jpg',
    alt: 'placeholder'
  },
]

const page = () => {
  return (
    <main>
      <div className='custom-background-4 text-white flex flex-col lg:justify-between justify-center items-center' style={{height: '90.33vh'}}>
        <div className='text-center lg:mt-32 flex flex-col justify-center items-center lg:w-5/12 my-8'>
          <h1 className='lgtext-7xl text-5xl font-semibold mb-4'>Meet Our Team</h1>
          <p className='lg:text-xl text-base'>SAC has over 30 members including executives, grade reps, and honorary members. Learn more about our current members!</p>
        </div>
        <Image  
          src={'/meettheteam.jpg'}
          alt='meet the team image'
          width={1000}
          height={300}
          className='rounded-3xl mb-4'
            />
      </div>


      <div className=' flex justify-center items-center flex-col lg:flex-row lg:gap-x-20 gap-y-20 my-20'>
        {aboutTheTeam.map((about, index) => (
        <div key={index} className='bg-gray-200 flex justify-center items-center flex-col text-center rounded-2xl' style={{height:'70vh', width: '35vh'}}>
          <div className='w-full flex justify-center items-center' style={{height: '50%'}}>
            <div className='w-48 h-48 overflow-hidden relative'>
              <Image
                src={about.image ?? ''}
                alt={about.alt ?? ''}
                layout="fill"
                objectFit="cover"
                className='rounded-md'
              />
            </div>
          </div>
          <div className='w-full flex flex-col justify-center items-center h-1/2'>
            <h1 className='font-semibold text-3xl my-4'>
              {about.title}
            </h1>
            <p className='w-11/12 tracking-wide leading-7'>{about.description}</p>
          </div>
        </div>
        ))}
      </div>

      <div>
        <div className='w-full flex flex-col justify-center items-center'>
          <div className='w-full flex justify-center items-center flex-col'>
            <p className='tracking-widest font-light'>MEET THE...</p>
            <h1 className='font-medium text-4xl mt-4'>Executive Team</h1>
          </div>
          <div className='lg:grid lg:grid-cols-5 lg:gap-x-32 lg:gap-y-12 flex flex-col justify-center items-center gap-y-8 my-8'>
          {teamMembers.map(member => (
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
  )
}

export default page