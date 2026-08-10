import React from 'react'
import './MobileNav.css'
import Link from 'next/link'
import HireMe from '../HireMe/HireMe'

function MobileNav({ isOpen, toggleMenu, pathname }) {
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Uses', href: '/uses' },
    { label: 'Skills', href: '/skills' },
    { label: 'Experience', href: '/workexperience' },
    { label: 'Contact', href: '/contactme' },
  ];

  const isActive = (href) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
        <div className='mobile-menu-container' onClick={(e) => e.stopPropagation()}>
            <ul>
                {navItems.map((item) => (
                    <li key={item.href}>
                        <Link className={`menu-item ${isActive(item.href) ? 'active' : ''}`} href={item.href} onClick={toggleMenu}>
                            {item.label}
                        </Link>
                    </li>
                ))}
                <HireMe/>
            </ul>
        </div>
      </div>
    </>
  )
}

export default MobileNav
