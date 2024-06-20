import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <main className='h-screen w-screen flex flex-col'>
      <div className='custom-background-2 flex justify-center items-center flex-col h-5/12'>
        <p className='text-amber-400 tracking-widest text-xs'>SUBSCRIBE</p>
        <p className='text-white text-5xl font-semibold my-4 text-center leading-tight'>John Fraser SAC Google Classroom</p>
        <p className='text-white text-xl text-center font-light'>Receive monthly updates and pictures of our events!</p>
        <a href='https://classroom.google.com/u/0/c/NDQ0MDU4NTQxNDBa?cjc=i725i36' target='_blank' className='my-10'>
          <button className='button-4'>
            <p>Join Now</p>
          </button>
        </a>
      </div>
      <div className='bg-black flex flex-col justify-center items-center text-center h-7/12'>
        <div className=''>
          <div className='w-full flex justify-center items-center text-center my-4'>
            <Image
                  className=''
                  src='/WSAC-Logo.png' 
                  alt='logo' 
                  width={200}
                  height={366} />
          </div>
            <p className='text-white tracking-widest font-normal text-base '>Questions? Shoot us an email at johnfraserstudentcouncil@gmail.com or message @johnfrasersac on Instagram. For questions or inquiries about clubs, please email info@johnfrasersac.com</p>
        </div>
        <div className="w-full">
          <hr className='hr-2'></hr>
        </div>
        <div className=''>
          <p className='text-white mb-10'>Copyright symbol of copyright SAC John Fraser</p>
          <p className='text-white'>Made and Maintained By John Fraser Students</p>
        </div>
      </div>
    </main>
  )
}

export default Footer