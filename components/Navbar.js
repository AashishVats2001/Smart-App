"use client"

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/public/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const navigation = [
  { name: 'Home', href: '#home', current: true },
  { name: 'Features', href: '#features', current: false },
  { name: 'Screens', href: '#quickview', current: false },
  { name: 'Download', href: '#download', current: false },
  { name: 'Team', href: '#team', current: false },
  { name: 'Pricing', href: '#pricing', current: false },
  { name: 'Sub Menu', href: '#', current: false },
  { name: 'Contact Us', href: '#subscribe', current: false },
]

const submenuItems = [
  { name: 'More Features', href: '#more-features' },
  { name: 'About App', href: '#about' },
  { name: 'Design', href: '#design' },
  { name: 'How it Works', href: '#how-it-works' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Subscribe', href: '#subscribe' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // To Add: When scroll up, get apply bg-brand-gradient else stay transparent
    <nav className={classNames(
      'flex bg- w-full justify-center text-white items-center fixed top-0 z-50 transition-all duration-300 ease-in-out',
      scrolled ? 'bg-brand-gradient h-20' : 'bg-transparent h-[90px]'
    )}
    >
      <div className='flex justify-between items-center w-10/12 max-w-container px-[15px]'>
        {/* Logo */}
        <div className="flex gap-3 items-center justify-center">
          <Image
            src={Logo}
            width={25}
            height={25}
            alt='Brand-Logo'
          />
          <h2 className='text-4xl font-semibold'>Smart</h2>
        </div>

        {/* Links */}

        {/* <div className='flex gap-6 font-medium text-lg'>
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? ' text-white' : 'hover:text-white',
                'px-2.5 py-2 text-sm font-medium hover:underline no-underline underline-offset-3 transition-all duration-500',
              )}
            >
              {item.name}
            </Link>
          ))}
        </div> */}

        <div className="flex gap-6 font-medium text-lg">
          {navigation.map((item) =>
            item.name === 'Sub Menu' ? (
              <div
                key="SubMenu"
                className="relative group"
              >
                <button
                  className={classNames(
                    'px-2.5 py-2 flex items-center gap-2 text-sm font-medium transition-all duration-300',
                    ' text-white'
                  )}
                >
                  {item.name}
                  <FontAwesomeIcon icon={faChevronDown} />
                </button>

                {/* Dropdown */}
                <div className="absolute top-full left-0 w-56 bg-dark rounded-lg shadow-lg opacity-0 group-hover:opacity-100 hover:opacity-100 pointer-events-none group-hover:pointer-events-auto hover:pointer-events-auto transition-opacity duration-500 z-50 delay-200">
                  {submenuItems.map((subitem) => (
                    <Link
                      key={subitem.name}
                      href={subitem.href}
                      className="block px-4 py-2 text-sm text-white transition-colors duration-200 link"
                    >
                      {subitem.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                aria-current={item.current ? 'page' : undefined}
                className={classNames(
                  item.current ? 'text-white' : 'hover:text-white',
                  'px-2.5 py-2 text-sm font-medium transition-all duration-500 link'
                )}
              >
                {item.name}
              </Link>
            )
          )}
        </div>

      </div>
    </nav>
  )
}

export default Navbar
