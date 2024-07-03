"use client"

import React from 'react'
import clubs from '@/components/clubs'
import { useState } from 'react';
import Link from 'next/link';

const page = () => {
  const [sortOrder, setSortOrder] = useState('ascending'); // Default to 'ascending'

  // Correctly sort clubs based on sortOrder
  const sortedAnnouncements = clubs.sort((a, b) => {
    if (sortOrder === 'ascending') {
      return a.name.localeCompare(b.name); // For A-Z
    } else {
      return b.name.localeCompare(a.name); // For Z-A
    }
  });

  return (
    <main>
      <div className='h-96 flex justify-center items-center flex-col text-center'>
        <h1>Clubs</h1>
        <p>Check here for all the updates and clubs here at John Fraser Secondary School!</p>
      </div>
      <div className='w-full flex justify-center items-center'>
        <div id='filter' className=' w-7/12 flex justify-center items-center mb-28'>
          <button className='button-2' onClick={() => setSortOrder('ascending')}>A-Z</button>
          <button className='button-2' onClick={() => setSortOrder('descending')}>Z-A</button>
        </div>
      </div>
      <div className='flex justify-center items-center flex-col mb-12'>
        {sortedAnnouncements.map((club) => (
          <div key={club.id} className="asd123">
            <h2>{club.name}</h2>
            <p>{club.description}</p>
            <Link href='/clubs/'
            <button className='button-5'>a</button>
          </div>
        ))}
      </div>
    </main>
  )
}

export default page