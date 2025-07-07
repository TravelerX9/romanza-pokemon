'use client';

import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`mx-auto flex min-h-12 w-full items-center justify-center p-2 transition-colors duration-300 md:w-[1440px] ${
        scrolled ? 'bg-white' : 'bg-transparent'
      }`}
      style={{ position: 'sticky', top: 0, zIndex: 50 }}
    >
      <header>
        <div className='z-10 flex items-center gap-2 pt-2'>
          {/* Pokeball PNG */}
          <img
            src='/images/pokemon-logo.png'
            alt='Pokeball'
            width={32}
            height={32}
            className='z-10 block h-8 w-8 md:h-10 md:w-10'
          />
          <span className='z-10 font-sans text-xl font-semibold text-gray-900 md:text-3xl'>
            Pokedex
          </span>
        </div>
      </header>
    </nav>
  );
};

export default Navbar;
