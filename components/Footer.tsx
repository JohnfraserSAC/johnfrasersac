import React from 'react'

const Footer = () => {
  return (
    <main className='h-screen w-screen'>
      <div className='custom-background-2 w-full h-3/6 justify-center items-center flex flex-col'>
        <p className='text-amber-400 tracking-widest'>SUBSCRIBE</p>
        <p className='text-white text-5xl font-bold my-10 text-center'>John Fraser SAC Google Classroom</p>
        <p className='text-white text-xl text-center font-light'>Receive monthly updates and pictures of our events!</p>
        <a href='https://classroom.google.com/u/0/c/NDQ0MDU4NTQxNDBa?cjc=i725i36' target='_blank' className='my-10'>
          <button className='button-4'>
            <p>Join Now</p>
          </button>
        </a>
      </div>
      <div className='bg-black h-full'>

      </div>
    </main>
  )
}

export default Footer