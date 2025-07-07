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
      className={`right-0 left-0 flex min-h-[48px] w-full items-center justify-center px-4 text-center ${
        scrolled ? 'bg-white' : 'bg-transparent'
      }`}
      style={{ position: 'fixed', top: 0, zIndex: 100 }}
    >
      <div className='flex items-center'>
        <img
          src='/images/pokemon-logo.png'
          alt='Pokeball'
          width={32}
          height={32}
          className='z-10 mr-2 block h-8 w-8 md:h-10 md:w-10'
        />
        <span className='z-10 font-sans text-2xl font-bold text-gray-900'>
          Pokedex
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
