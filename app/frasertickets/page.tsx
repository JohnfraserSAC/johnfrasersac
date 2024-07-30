import React from 'react'
import Link from 'next/link'

const Page = () => {

  return (
    <main>
      <div className='min-h-screen flex flex-col justify-center items-center'>
        <div className='w-full flex flex-col justify-center items-center text-center gap-y-4 mb-8'>
          <h1 className='font-semibold text-3xl lg:text-6xl'>Fraser Tickets</h1>
          <p className='font-light '>This is FraserTickets, where we manage YOUR tickets through our fool-proof ticket manager!</p>
          <Link href='https://tickets.johnfrasersac.com'>
            <button className='button-6'>
              <p>Click Here!</p>
            </button>
          </Link>
        </div>
        <video className='frasertickets' controls autoPlay >
              <source src="/frasertickets.mp4" type="video/mp4" />
              <track
              src="/frasertickets.vtt"
              kind="subtitles"
              srcLang="en"
              label="English"
              default
              />
              Your browser does not support the video tag.
        </video>
      </div>
    </main>
  )
}

export default Page