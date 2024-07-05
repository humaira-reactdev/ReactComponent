import React from 'react'
import { Link } from 'react-router-dom'

const NavbarTwo = () => {
  return (
    <>
         <nav className='p-5 bg-[#FFB1B1]'>
            <div className="container">
                <div className="menu_row flex justify-between items-center">
                    <div className="logo_col text-[35px] font-bold font-poppins text-black">Logo</div>
                    <div className="menu">
                        <ul className='flex gap-5 text-xl font-poppins font-semibold text-black'>
                            <li><Link to='/' className='active:scale-110'>Home</Link></li>
                            <li><Link to="/layouttwo" className='active:scale-[1.1]'>New</Link></li>
                            <li><Link to="/layouttwo/downloads" className='active:scale-[1.1]'>Downloads</Link></li>
                            <li><Link to="/layouttwo" className='active:scale-[1.1]'>Layouts</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </nav>
    </>   
    
  )
}

export default NavbarTwo