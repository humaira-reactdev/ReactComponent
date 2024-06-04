import React from 'react'
import Navbar from '../components/Navbar/Navbar'

const About = () => {
  return (
    <>
        <Navbar/>
        <div className='w-full h-[700px] bg-[#cf92cd] flex justify-center items-center'>
            <h1 className='text-7xl font-bold text-black '>About</h1>
        </div>
    </>
  )
}

export default About