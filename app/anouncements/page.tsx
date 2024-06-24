import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <main>
      <div>
        <Image
          src='/placeholder.jpg'
          height={100}
          width={100}
          alt='placeholder'
          />
        <h1>Anouncements</h1>
        <p>CLick here for daily anouncements and events to come</p>
      </div>
      <div>
        <a>
          <p></p>
        </a>
      </div>
    </main>
  )
}

export default page