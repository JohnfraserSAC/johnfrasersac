import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <main className='max-w-8xl mx-auto'>

      {/* HERO SECTION */}
      <div className='relative h-screen custom-background-1'>
        <div className='flex flex-col items-center justify-center text-center h-full w-full'>
          <div className='flex justify-between text-left gap-40'>
            <div className='w-4/12'>
              <h1 className='text-white'>John Fraser Student Council</h1>
              <p className='text-white'>Run By Students, For Students. I removed the election results!</p>
              <div className='flex text-center items-center justify-start mt-8 gap-8'>
                <a href='/oppurtunities'>
                  <button className='button-1'>
                    <p className='text-bold'>Get Involved</p>
                  </button>
                </a>
                <a href='/anouncements'>
                  <p className='text-white transition-colors duration-200 ease-in-out hover:text-yellow-500'>View Anouncements &rarr;</p>
                </a>
              </div>
            </div>
            <Image
              className='rounded-xl'
              src='/hero.jpg' 
              width={500}
              height={1}
              alt='hero image' />
          </div>
        </div>
      </div>

      {/* WHO WE ARE SECTION */}

      <div className='flex flex-col justify-center items-center mx-40 my-32'>
        <h1 className='text-center'>WHO WE ARE</h1>
        <div className='flex'>
        <Image
              className='rounded-xl'
              src='/hero.jpg' 
              width={500}
              height={1}
              alt='hero image' />
          <div className=' flex flex-col  justify-center items-center'>
            <p className='text-center w-9/12 my-10'>SAC stands for "Student Activity Council". We are a team of John Fraser students committed to enahncing your high school experience throguh a diverse array of events! learn more about what we do and how you can get involvedo n this page</p>
            <div className='w-full flex text-center  items-center justify-evenly'>
              <div className=''>
                <p>Thoa Le</p>
                <p>Preseident</p>
              </div>
              <div className=''>
                <p>Akshat Chopra</p>
                <p>Vice President</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* UPCOMING EVENTS SECTION */}

      <div>
        <Image
                className='rounded-xl'
                src='/hero.jpg' 
                width={500}
                height={1}
                alt='hero image' />
        <div>
          <h1>Upcoming Events</h1>
          <p>Learn more about being involved with SAC, or infromation about our events!</p>
          <div>
            <div>
              <div>
                <Image
                  src="/checkmark.jpg"
                  width={20}
                  height={1}
                  alt='checkmark'
                />
                <p>Updated Monthly</p>
                <Image
                  src="/checkmark.jpg"
                  width={20}
                  height={1}
                  alt='checkmark'
                />
                <p>SAC Application News</p>
              </div>
            </div>
            <div>
              <div>
              <Image
                  src="/checkmark.jpg"
                  width={20}
                  height={1}
                  alt='checkmark'
                />
                <p>Lots of Oppurtunities!</p>
                <Image
                  src="/checkmark.jpg"
                  width={20}
                  height={1}
                  alt='checkmark'
                />
                <p>Anouncements</p>
              </div>
            </div>
          </div>
          <a href='/anouncements'>
            <button>View Anouncements</button>
          </a>
        </div>
      </div>

      {/* MEET OUR TEAM + SOCIALS SECTION */}


      {/* LINKS SECTION */}
    </main>
  )
}

export default page