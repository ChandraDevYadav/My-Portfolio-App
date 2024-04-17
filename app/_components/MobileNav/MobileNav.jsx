import React from 'react'
import './MobileNav.css'
import Image from 'next/image'
import Link from 'next/link'

function MobileNav({ isOpen, toggleMenu }) {
  return (
    <>
      <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
        <div className='mobile-menu-container'>
            {/* <Image src='/logo1.png' alt='' width={50} height={50} className='h-12 w-12'/>  */}
            <ul>
                <li>
                    <Link className='menu-item' href='/'>Home</Link>
                </li>
                <li>
                    <Link className='menu-item' href='/'>Skills</Link>
                </li>
                <li>
                    <Link className='menu-item' href='/'>Work Experience</Link>
                </li>
                <li>
                    <Link className='menu-item' href='/'>Contact Me</Link>
                </li>
                <button className='contact-btn' onClick={()=>{}}>Hire Me</button>
            </ul>
        </div>
      </div>
    </>
  )
}

export default MobileNav
