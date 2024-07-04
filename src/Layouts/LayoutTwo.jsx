import React from 'react'
import NavbarTwo from '../components/NavbarTwo'
import { Outlet } from 'react-router-dom'

const LayoutTwo = () => {
  return (
    <>
        <NavbarTwo/>
        <Outlet/>
    </>
    
  )
}

export default LayoutTwo