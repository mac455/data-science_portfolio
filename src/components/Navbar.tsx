'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import '../app/globals.css';

export default function Home() {
  // State to manage the mobile menu
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  }
  return (
    <div>
      {/* Navbar Section */}
      <div className="flex justify-between items-center bg-white h-24 fixed top-0 left-0 right-0 z-50 shadow-lg px-4 md:px-8">
        <div>
          <Link href="/">
            <h1 className='ml-5 md:ml-20 font-inter font-bold text-3xl hover:text-blue-500'>Mcanthony Otuonye</h1>
          </Link>
        </div>
        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
          
        </div>
        {/* Navigation Links */}
        <ul className={` hidden md:flex space-x-8 font-opensans text-black font-bold text-2xl ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          <Link href="/about"><li className="hover:text-blue-500">About Me</li></Link>
          <Link href="/portfolio"><li className="hover:text-blue-500">Portfolio</li></Link>
          <Link href="/cv"><li className="hover:text-blue-500">CV</li></Link>
          <Link href="/contact"><li className="hover:text-blue-500">Contact</li></Link>
        </ul>
      </div>

      {/* Optional Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-24 left-0 right-0 bg-white shadow-lg z-40">
          <ul className=" fixed top-24 flex flex-col p-4 bg-white w-full">
            <Link href="/about" onClick={closeMenu}><li className="py-2 hover:text-blue-500">About Me</li></Link>
            <Link href="/portfolio" onClick={closeMenu}><li className="py-2 hover:text-blue-500">Portfolio</li></Link>
            <Link href="/cv" onClick={closeMenu}><li className="py-2 hover:text-blue-500">CV</li></Link>
            <Link href="/contact" onClick={closeMenu}><li className="py-2 hover:text-blue-500">Contact</li></Link>
          </ul>
        </div>
      )}
    </div>
  );
}
