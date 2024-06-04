import React from 'react'

const Navbar = () => {
  return (
    <>
        <nav className='p-5 bg-[#7469B6]'>
            <div className="container">
                <div className="menu_row flex justify-between items-center">
                    <div className="logo_col text-[35px] font-bold font-poppins text-black">Logo</div>
                    <div className="menu">
                        <ul className='flex gap-5 text-xl font-poppins font-semibold text-black'>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/blog">Blog</a></li>
                            <li><a href="/help">Help</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </nav>
    </>
  )
}

export default Navbar