import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <main className='h-screen w-screen flex flex-col'>
      <div className='custom-background-2 flex justify-center items-center flex-col h-7/12'>
        <p className='text-amber-400 tracking-widest text-xs'>SUBSCRIBE</p>
        <p className='text-white text-5xl font-semibold my-4 text-center leading-tight lg:text-7xl lg:mb-12'>John Fraser SAC Google Classroom</p>
        <p className='text-white text-xl text-center font-light'>Receive monthly updates and pictures of our events!</p>
        <a href='https://classroom.google.com/u/0/c/NDQ0MDU4NTQxNDBa?cjc=i725i36' target='_blank' className='my-10'>
          <button className='button-4'>
            <p>Join Now</p>
          </button>
        </a>
      </div>
      <div className='bg-black flex flex-col justify-center items-center text-center '>
        <div className=''>
          <div className='w-full flex justify-center items-center text-center my-4'>
            <Image
                  className=''
                  src='/WSAC-Logo.png' 
                  alt='logo' 
                  width={225}
                  height={1} />
          </div>
            <p className='text-white tracking-widest font-light text-base mx-52'>Questions? Shoot us an email at johnfraserstudentcouncil@gmail.com or message @johnfrasersac on Instagram. For questions or inquiries about clubs, please email info@johnfrasersac.com</p>
        </div>
        <div className="w-full">
          <hr className='hr-2'></hr>
        </div>
        <div className='lg:flex lg:justify-evenly lg:w-full'>
          <p className='text-white mb-8'>Copyright &copy; SAC John Fraser</p>
          <p className='text-white mb-2'>Made and Maintained By John Fraser Students</p>
        </div>
      </div>
    </main>
  )
}

export default Footer