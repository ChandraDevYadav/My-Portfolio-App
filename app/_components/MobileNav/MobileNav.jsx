import React from 'react'
import './MobileNav.css'
import Link from 'next/link'

function MobileNav({ isOpen, toggleMenu, pathname }) {
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Lab', href: '/lab' },
    { label: 'Writing', href: '/writing' },
    { label: 'Stack', href: '/stack' },
    { label: 'Work with me', href: '/availability' },
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
            </ul>
        </div>
      </div>
    </>
  )
}

export default MobileNav
