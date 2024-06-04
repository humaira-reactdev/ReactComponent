import React from 'react'
import Navbar from '../components/Navbar/Navbar'

const Home = () => {
  return (
    <>
        <Navbar/>
        <div className='w-full h-[700px] bg-[#92C7CF] flex justify-center items-center'>
            <h1 className='text-7xl font-bold text-black '>Home</h1>
        </div>
    </>
  )
}

export default Home