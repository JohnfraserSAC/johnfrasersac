import React from 'react'
import ExecutiveInfo from '@/components/ExecutiveInfo'

const page = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
      <ExecutiveInfo name='name' role='role' image='/akshat-chopra.jpg' description='description' />
      <ExecutiveInfo name='name' role='role' image='/akshat-chopra.jpg' description='description' />
      <ExecutiveInfo name='name' role='role' image='/akshat-chopra.jpg' description='description' />
      <ExecutiveInfo name='name' role='role' image='/akshat-chopra.jpg' description='description' />
      <ExecutiveInfo name='name' role='role' image='/akshat-chopra.jpg' description='description' />
    </div>
  )
}

export default page