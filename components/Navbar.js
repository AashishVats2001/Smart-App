'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/public/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const navigation = [
  { name: 'Home', href: '#home', current: true },
  { name: 'Features', href: '#features', current: false },
  { name: 'Screens', href: '#quickview', current: false },
  { name: 'Download', href: '#download', current: false },
  { name: 'Team', href: '#team', current: false },
  { name: 'Pricing', href: '#pricing', current: false },
  { name: 'Sub Menu', href: '#', current: false },
  { name: 'Contact Us', href: '#subscribe', current: false },
];

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
  return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={classNames(
        'flex w-full justify-center items-center fixed top-0 z-50 transition-all duration-300 ease-in-out',
        scrolled ? 'bg-brand-gradient h-20' : 'bg-brand-gradient h-[90px]'
      )}
    >
      <div className="flex justify-between items-center w-10/12 max-w-container px-[15px] text-white">
        {/* Logo */}
        <div className="flex gap-3 items-center">
          <Image src="/logo-white-icon.png" width={40} height={40} alt="Brand-Logo" className='mix-blend-screen' />
          <h2 className="text-4xl font-semibold">YieldTap</h2>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex gap-6 font-medium text-lg">
          {navigation.map((item) =>
            item.name === 'Sub Menu' ? (
              <div key="SubMenu" className="relative group">
                <button className="px-2.5 py-2 flex items-center gap-2 text-sm font-medium transition-all duration-300 text-white">
                  {item.name}
                  <FontAwesomeIcon icon={faChevronDown} />
                </button>
                <div className="absolute top-full left-0 w-56 bg-dark rounded-lg shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-500 z-50 delay-200">
                  {submenuItems.map((subitem) => (
                    <Link
                      key={subitem.name}
                      href={subitem.href}
                      className="block px-4 py-2 text-sm text-white hover:underline"
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

        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(true)}>
            <FontAwesomeIcon icon={faBars} size="lg" />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={classNames(
          'fixed top-0 left-0 h-full w-3/4 bg-dark text-white z-[9999] transition-transform duration-500 ease-in-out',
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-700">
          <Image src={Logo} width={25} height={25} alt="Brand-Logo" />
          <button onClick={() => setIsMenuOpen(false)}>
            <FontAwesomeIcon icon={faTimes} size="lg" />
          </button>
        </div>

        <div className="flex flex-col gap-4 p-6">
          {navigation.map((item) =>
            item.name === 'Sub Menu' ? (
              <div key="SubMenu">
                <h3 className="text-sm uppercase font-semibold mb-2 text-gray-300">
                  {item.name}
                </h3>
                <div className="pl-4 flex flex-col gap-2">
                  {submenuItems.map((subitem) => (
                    <Link
                      key={subitem.name}
                      href={subitem.href}
                      className="text-white text-sm hover:underline"
                      onClick={() => setIsMenuOpen(false)}
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
                className="text-white text-base font-medium hover:underline"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            )
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
