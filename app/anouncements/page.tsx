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
        <p></p>
      </div>
    </main>
  )
}

export default page