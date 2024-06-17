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
            <Image src='/logo1.png' alt='' width={100} height={100} className='rounded-full w-20 h-20'/>
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
