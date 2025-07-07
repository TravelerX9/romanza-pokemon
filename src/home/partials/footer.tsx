import React from 'react';

const Footer: React.FC = () => (
  <footer className='box-border flex h-[120px] w-[1440px] items-center bg-white -pl-1 md:pl-10'>
    <div className='absolute left-[16%] flex items-center'>
      {/* Pokeball logo */}
      <img
        src='/images/pokemon-logo.png'
        alt='Pokeball'
        width={32}
        height={32}
        className='mr-2 z-10 block h-8 w-8 md:h-10 md:w-10'
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
