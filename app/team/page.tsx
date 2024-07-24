import React from 'react'
import Image from 'next/image'
import ExecutiveInfo from '@/components/ExecutiveInfo'

const page = () => {
  return (
    <main>
      <div className='custom-background-4 text-white flex flex-col lg:justify-between justify-center items-center' style={{height: '90.33vh'}}>
        <div className='text-center lg:mt-32 flex flex-col justify-center items-center w-5/12 my-8'>
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


      <div className='min-h-screen flex justify-center items-center flex-col gap-y-20 my-20'>
        <div className='bg-gray-300 flex justify-center items-center flex-col text-center rounded-2xl' style={{height:'50vh', width: '35vh'}}>
          <div className='w-48 h-48 overflow-hidden relative'>
            <Image
              src="/placeholder.jpg"
              alt="Description of the image"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <h1 className='font-semibold text-3xl my-4'>
            Executives
          </h1>
          <p className='w-11/12'>Working closely with the SAC staff advisors, the Executive Team helps to oversee SAC and mentor members. The executive team is selected in May of each year through an application and election process.</p>
        </div>
        <div className='bg-gray-300 flex justify-center items-center flex-col text-center rounded-2xl' style={{height:'50vh', width: '35vh'}}>
          <div className='w-48 h-48 overflow-hidden relative'>
            <Image
              src="/placeholder.jpg"
              alt="Description of the image"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <h1 className='font-semibold text-3xl my-4'>
            Grade Reps
          </h1>
          <p className='w-11/12'>Grade Representatives work to voice the opinions of their grade and engage with them. Grade Representatives are selected in are selected in September of the new school year!</p>
        </div>
        <div className='bg-gray-300 flex justify-center items-center flex-col text-center rounded-2xl' style={{height:'50vh', width: '35vh'}}>
          <div className='w-48 h-48 overflow-hidden relative'>
            <Image
              src="/placeholder.jpg"
              alt="Description of the image"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <h1 className='font-semibold text-3xl my-4'>
            Honouraries
          </h1>
          <p className='w-11/12'>Honourary Members make up the majority of SAC. They are student leaders who help to plan, execute, and promote SAC events. Honourary positions are chosen at the start of the year and can be found here.</p>
        </div>
      </div>

      <div>
        <p>MEET THE...</p>
        <h1>Executive Team</h1>
        <div className='flex flex-col justify-center items-center gap-y-8 my-8'>
          <ExecutiveInfo name='Thoa Le' image='thoa-le.jpg' role='President' description='hiya my name is Thoa. I like being really really tall.' />
        </div>
      </div>
    </main>
  )
}

export default page