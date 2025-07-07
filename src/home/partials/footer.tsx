import React from 'react';

const Footer: React.FC = () => (
  <footer className='-pl-1 box-border flex h-[120px] w-[100px] items-center bg-white md:w-[1440px] md:pl-10'>
    <div className='absolute left-[16%] flex items-center'>
      {/* Pokeball logo */}
      <img
        src='/images/pokemon-logo.png'
        alt='Pokeball'
        width={32}
        height={32}
        className='z-10 mr-2 block h-8 w-8 md:h-10 md:w-10'
      />
      <span className='font-inter mr-4 text-2xl font-bold text-[#222] md:text-3xl'>
        Pokedex
      </span>
      <span className='font-inter text-base font-normal text-gray-400'>
        Copyright ©2025 Pokedex
      </span>
    </div>
  </footer>
);

export default Footer;
