import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <main className='w-screen'>

      {/* HERO SECTION */}
      <div className='relative h-screen w-screen custom-background-1 flex flex-col justify-center items-center'>
        <div className=' mx-12 flex flex-col lg:flex-row justify-evenly items-center'>
          <div className=' lg:w-5/12'>
            <h1 className=' text-white font-bold text-4xl lg:text-7xl  mb-12'>John Fraser Student Council</h1>
            <p className=' text-white mb-10 lg:text-xl'>Run By Students, For Students. I removed the election results!</p>
            <div className=' flex flex-col lg:justify-start items-center w-full'>
              <div className=' w-full'>
                <a href='/oppurtunities' className=''>
                  <button className='button-1 w-full lg:w-4/12'>
                    <p className='text-center'>Get Involved</p>
                  </button>
                </a>
              </div>
              <a href='/anouncements' className='my-10  lg:self-start'>
                <p className='text-white'>View Anouncements &rarr;</p>
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

      {/* WHO WE ARE SECTION */}
      <div className='flex flex-col justify-center items-center text-center my-12'>
        <Image
              className='rounded-xl'
              src='/who-we-are.jpg' 
              width={300}
              height={1}
              alt='hero image' />
        <h1 className='text-center text-5xl font-bold my-10'>WHO WE ARE</h1>
        <div className='flex'>
          <div className=' flex flex-col justify-center items-center'>
            <p className='text-center w-10/12 text-xl'>SAC stands for &quot;Student Activity Council&quot;. We are a team of John Fraser students committed to enahncing your high school experience through a diverse array of events! learn more about what we do and how you can get involved this page</p>
            <div className='w-full flex text-center  items-center justify-evenly'>
              <div className='my-10'>
                <p><b>President</b></p>
                <p>Thoa Le</p>
              </div>
              <div>
                <p><b>Vice President</b></p>
                <p>Akshat Chopra</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* UPCOMING EVENTS SECTION */}
      <hr></hr>

      <div className='flex flex-col justify-center items-center text-center mx-4'>
        <Image
                className='rounded-xl'
                src='/hero.jpg' 
                width={300}
                height={1}
                alt='hero image' />
        <div className=''>
          <h1 className='my-6 text-4xl text-left'><b>Upcoming Events</b></h1>
          <p className='text-left'><b>Learn more about being involved with SAC, or infromation about our events!</b></p>
          <div className='my-6'>
            <div>
              <div className=''>
                <div className='flex mb-4 gap-4'>
                  <Image
                    className=''
                    src="/checkmark.jpg"
                    width={25}
                    height={20}
                    alt='checkmark'
                  />
                  <p>Updated Monthly</p>
                </div>
                <div className='flex gap-4 mb-4'>
                  <Image
                    className=''
                    src="/checkmark.jpg"
                    width={25}
                    height={20}
                    alt='checkmark'
                  />
                  <p>SAC Application News</p>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div className='flex gap-4 mb-4'>
                  <Image
                    className=''
                    src="/checkmark.jpg"
                    width={25}
                    height={15}
                    alt='checkmark'
                  />
                  <p>Lots of Oppurtunities</p>
                </div>
                <div className='flex gap-4'>
                  <Image
                    className=''
                    src="/checkmark.jpg"
                    width={25}
                    height={20}
                    alt='checkmark'
                  />
                  <p>Anouncements</p>
                </div>
              </div>
            </div>
          </div>
          <a href='/anouncements' className='w-full'>
            <button className='button-2 w-full'>
              <p>View Anouncements</p>
            </button>
          </a>
        </div>
      </div>

      {/* MEET OUR TEAM + SOCIALS SECTION */}
      <div className='my-40'></div>

      <div className='flex flex-col justify-center items-center text-center mx-4 my-12'>
        <h1 className='font-bold text-4xl'>Meet Our Team</h1>
        <button className='button-3 my-6'>
          <a>
            <p>Learn More</p>
          </a>
        </button>
          <div className='flex flex-col w-full h-full justify-center item-center'>
            <div className='container-box w-full h-full'>
              <Image
                className='container-image rounded-xl'
                src='/thoa-le.jpg' 
                width={175}
                height={175}
                alt='hero image' />
              <p className='relative text-left ml-4' style={{top: '180px'}}><b>Thoa Le</b></p>
              <p className='relative text-left ml-4' style={{top: '190px'}}><b>President</b></p>
            </div>
            <div className='container-box w-full h-full'>
              <Image
                className='container-image rounded-xl'
                src='/akshat-chopra.jpg' 
                width={175}
                height={175}
                alt='hero image' />
              <p className='relative text-left ml-4' style={{top: '180px'}}><b>Akshat Chopra</b></p>
              <p className='relative text-left ml-4' style={{top: '190px'}}><b>Vice-President</b></p>
            </div>
          </div>
      </div>

      {/* LINKS SECTION */}

      <div>

      </div>
    </main>
  )
}

export default page