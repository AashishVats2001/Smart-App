import React from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/public/logo.png'

const navigation = [
  { name: 'Home', href: '#home', current: true },
  { name: 'Features', href: '#features', current: false },
  { name: 'Screens', href: '#screens', current: false },
  { name: 'Download', href: '#download', current: false },
  { name: 'Team', href: '#team', current: false },
  { name: 'Pricing', href: '#pricing', current: false },
  { name: 'Sub Menu', href: '#', current: false },
  { name: 'Contact Us', href: '#contact', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
  return (
    // To Add: When scroll up, get apply bg-brand-gradient else stay transparent
    <nav className='flex bg- w-full justify-center items-center bg-brand-gradient text-white fixed top-0 ' style={{ "height": "90px" }}>
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

        <div className='flex gap-6 font-medium text-lg'>
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
        </div>
      </div>
    </nav>
  )
}

export default Navbar
