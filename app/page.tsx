import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <main className='w-screen'>

      {/* HERO SECTION */}
      <div className='relative h-screen w-screen custom-background-1 flex flex-col justify-center items-center'>
        <div className='mx-12 flex flex-col justify-center items-center'>
          <div className=''>
            <h1 className='text-white font-bold text-4xl mb-12'>John Fraser Student Council</h1>
            <p className='text-white mb-10'>Run By Students, For Students. I removed the election results!</p>
            <div className='flex flex-col justify-center items-center text-center w-full'>
                <div className=' w-full'>
                  <a href='/oppurtunities'>
                    <button className='button-1  w-full'>
                      <p className='text-center'>Get Involved</p>
                    </button>
                  </a>
                </div>
              <a href='/anouncements' className='my-10'>
                <p className='text-white'>View Anouncements &rarr;</p>
              </a>
            </div>
          </div>
            <Image
              className='rounded-xl'
              src='/hero.jpg' 
              width={300}
              height={1}
              alt='hero image' />
        </div>
      </div>

      {/* WHO WE ARE SECTION */}
      <div className='flex flex-col justify-center items-center text-center'>
        <Image
              className='rounded-xl'
              src='/hero.jpg' 
              width={300}
              height={1}
              alt='hero image' />
        <h1 className='text-center font-bold my-10'>WHO WE ARE</h1>
        <div className='flex'>
          <div className=' flex flex-col justify-center items-center'>
            <p className='text-center w-10/12'>SAC stands for "Student Activity Council". We are a team of John Fraser students committed to enahncing your high school experience throguh a diverse array of events! learn more about what we do and how you can get involvedo n this page</p>
            <div className='w-full flex text-center  items-center justify-evenly'>
              <div className='my-10'>
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
      <hr></hr>

      <div>
        <Image
                className='rounded-xl'
                src='/hero.jpg' 
                width={300}
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