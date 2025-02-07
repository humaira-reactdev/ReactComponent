import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <nav className='p-5 bg-[#7469B6]'>
            <div className="container">
                <div className="menu_row flex justify-between items-center">
                    <div className="logo_col text-[35px] font-bold font-poppins text-black">Logo</div>
                    <div className="menu">
                        <ul className='flex gap-5 text-xl font-poppins font-semibold text-black'>
                            <li><Link to='/' className='active:scale-110'>Home</Link></li>
                            <li><Link to="/about" className='active:scale-[1.1]'>About</Link></li>
                            <li><Link to="/blog" className='active:scale-[1.1]'>Blog</Link></li>
                            <li><Link to="/help" className='active:scale-[1.1]'>Help</Link></li>
                            <li><Link to="/contact" className='active:scale-[1.1]'>Contact</Link></li>
                            <li><Link to="/layouttwo" className='active:scale-[1.1]'>Layouts</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </nav>
    </>
  )
}

export default Navbar