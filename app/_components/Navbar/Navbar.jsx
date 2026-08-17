"use client"
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import './Navbar.css';
import Image from 'next/image';
import Link from 'next/link';
import MobileNav from '../MobileNav/MobileNav';
import HireMe from '../HireMe/HireMe';

function Navbar() {
    const [openMenu, setOpenMenu] = useState(false);
    const pathname = usePathname();

    const navItems = [
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'Case Studies', href: '/case-studies' },
        { label: 'Lab', href: '/lab' },
        { label: 'Writing', href: '/writing' },
        { label: 'Stack', href: '/stack' },
    ];

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    const isActive = (href) => {
        if (href === '/') {
            return pathname === '/';
        }
        return pathname.startsWith(href);
    };

    return (
        <>
            <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} pathname={pathname} />
            <nav className='nav-wrapper'>
                <div className="nav-content">
                    <Link className='flex justify-start items-center gap-2 py-2' href='/'>
                        <Image src='/logo1.png' alt='' width={50} height={50} className='rounded-full object-fill'/>
                        <p className='text-lg font-bold'><span className='text-[#704ef5]'>Chandra</span> Dev <span className='text-[#704ef5]'>Yadav</span></p>
                    </Link>
                    <ul>
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <Link className={`menu-item ${isActive(item.href) ? 'active' : ''}`} href={item.href}>
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                        <Link href="/availability" className="contact-btn">Work with me</Link>
                    </ul>
                    <button className='menu-btn' onClick={toggleMenu} >
                        <span className={"material-symbols-outlined"} style={{fontSize:"0.8rem"}}>{openMenu ? "close" : "Open"}</span>
                    </button>
                </div>
            </nav>
        </>
    );
}

export default Navbar
