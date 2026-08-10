"use client"
import React, { useState } from 'react';
import './Navbar.css';
import Image from 'next/image';
import Link from 'next/link';
import { AlignJustify } from 'lucide-react'
import MobileNav from '../MobileNav/MobileNav';
import HireMe from '../HireMe/HireMe';

function Navbar() {
    const [openMenu, setOpenMenu]=useState(false);

    const toggleMenu=()=>{
        setOpenMenu(!openMenu);
    };
  return (
    <>
    <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className='nav-wrapper'>
        <div className="nav-content">
            <div className='flex justify-start items-center gap-2 py-2'>
                <Image src='/logo1.png' alt='' width={50} height={50} className='rounded-full object-fill'/>
            <p className='text-2xl font-bold'><span className='text-[#704ef5]'>Chandra</span> Dev <span className='text-[#704ef5]'>Yadav</span></p>
            </div>
            <ul>
                <li>
                    <Link className='menu-item' href='/'>Home</Link>
                </li>
                <li>
                    <Link className='menu-item' href='/skills'>Skills</Link>
                </li>
                <li>
                    <Link className='menu-item' href='/workexperience'>Work Experience</Link>
                </li>
                <li>
                    <Link className='menu-item' href='/contactme'>Contact Me</Link>
                </li>
                <HireMe/>
            </ul>
            <button className='menu-btn' onClick={toggleMenu} >
                <span className={"material-symbols-outlined"} style={{fontSize:"0.8rem"}}>{openMenu ? "close" : "Open"}</span>
            </button> 
        </div>
      </nav>
    </>
  )
}

export default Navbar
