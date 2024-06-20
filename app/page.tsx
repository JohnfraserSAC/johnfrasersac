import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <main className='w-screen'>

      {/* HERO SECTION */}
      <div className='relative h-screen w-screen custom-background-1 flex flex-col justify-center items-center'>
        <div className=' mx-12 flex flex-col lg:flex-row justify-evenly items-center'>
          <div className=' lg:w-6/12'>
            <h1 className=' title font-semibold text-white font-bold-size-1 mb-12 lg:ml-2'>John Fraser Student Council</h1>
            <p className=' text-white mb-10 lg:text-lg lg:ml-2 lg:w-8/12'>Run By Students, For Students. Made with passion and heart</p>
            <div className=' flex flex-col lg:justify-start items-center w-full'>
              <div className=' w-full'>
                <a href='/oppurtunities' className=''>
                  <button className='button-1 w-full lg:w-4/12'>
                    Get Involved
                  </button>
                </a>
              </div>
              <a href='/anouncements' className='my-5 lg:self-start lg:ml-2'>
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
      <div className='flex flex-col lg:flex-row justify-center items-center text-center my-12 lg:mx-32' data-aos='fade-up'>
        <Image
              className=''
              src='/who-we-are.jpg' 
              width={300}
              height={400}
              alt='hero image' />
        <div className=' lg:flex lg:flex-col lg:w-6/12'>
          <h1 className=' text-center text-5xl font-bold my-10 lg:text-left lg:ml-16'>WHO WE ARE</h1>
          <div className='flex '>
            <div className=' flex flex-col justify-center items-center '>
              <p className=' text-center w-10/12 text-xl lg:text-left'><b>SAC stands for &quot;Student Activity Council&quot;. We are a team of John Fraser students committed to enahncing your high school experience through a diverse array of events! learn more about what we do and how you can get involved this page.</b></p>
              <div className=' w-full flex text-center  items-center justify-evenly lg:ml-28'>
                <div className='lg:w-6/12 lg:text-left my-10'>
                  <p><b>President</b></p>
                  <p className='lg:my-5'>Thoa Le</p>
                </div>
                <div className=' lg:w-6/12 lg:text-left'>
                  <p><b>Vice President</b></p>
                  <p className='lg:my-5'>Akshat Chopra</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <hr className='hr-1'></hr>
      {/* UPCOMING EVENTS SECTION */}

      <div className='flex flex-col lg:flex-row lg:gap-12 justify-center items-center text-center mx-4'>
        <Image
                className='rounded-xl'
                src='/hero.jpg' 
                width={400}
                height={1}
                alt='hero image' />
        <div className=''>
          <h1 className='my-6 text-4xl text-left'><b>Upcoming Events</b></h1>
          <p className='text-left lg:w-7/12'><b>Learn more about being involved with SAC, or infromation about our events!</b></p>
          <div className='my-6 lg:w-9/12'>
            <div className='lg:grid lg:grid-cols-2 gap-4'>
              <div className='flex lg:items-center gap-2 mb-4'>
                <Image
                  className=''
                  src="/checkmark.jpg"
                  width={25}
                  height={25}
                  alt='checkmark'
                />
                <p>Updated Monthly</p>
              </div>
              <div className='flex items-center gap-2 mb-4'>
                <Image
                  className=''
                  src="/checkmark.jpg"
                  width={25}
                  height={25}
                  alt='checkmark'
                />
                <p>SAC Application News</p>
              </div>
              <div className='flex items-center gap-2 mb-4'>
                <Image
                  className=''
                  src="/checkmark.jpg"
                  width={25}
                  height={25}
                  alt='checkmark'
                />
                <p>Lots of Opportunities</p>
              </div>
              <div className='flex items-center gap-2 mb-4'>
                <Image
                  className=''
                  src="/checkmark.jpg"
                  width={25}
                  height={25}
                  alt='checkmark'
                />
                <p>Announcements</p>
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

        <div className='flex flex-col justify-center items-center text-center mx-4 my-12 lg:mx-40 h-screen '>
          <div className=' lg:w-11/12'>
            <div className=' lg:flex lg:justify-between lg:w-full'>
              <div className='lg:flex lg:items-center lg:justify-center'>
                <h1 className='font-bold text-4xl'>Meet Our Team</h1>
              </div>
              <button className='button-3 my-6'>
                <a>
                  <p>Learn More</p>
                </a>
              </button>
            </div>
          </div>
          <div className='flex flex-col w-full h-full lg:h-96  justify-center lg:flex-row items-center mx-12 lg:justify-start lg:space-x-16'>
            <div className='container-box  lg:w-6/12 w-full'>
              <div className='lg:flex-1'>
                <Image
                  className='container-image rounded-xl'
                  src='/thoa-le.jpg' 
                  width={175}
                  height={175}
                  alt='hero image' />
                <p className='relative text-left ml-4' style={{top: '180px'}}><b>Thoa Le</b></p>
                <p className='relative text-left ml-4' style={{top: '190px'}}><b>President</b></p>
              </div>
            </div>
            <div className='container-box lg:w-6/12 w-full '>
              <div className='lg:flex-1'>
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
      </div>

      {/* LINKS SECTION */}

      <div>

      </div>
    </main>
  )
}

export default page