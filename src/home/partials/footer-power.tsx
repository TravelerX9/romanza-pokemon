import React from 'react';

const Footer: React.FC = () => (
  <footer className='absolute right-0 bottom-0 left-0 box-border flex h-[120px] w-full items-center bg-white px-8 py-4'>
    <div className='relative left-[4%] flex items-center'>
      {/* Pokeball logo */}
      <img
        src='/images/pokemon-logo.png'
        alt='Pokeball'
        width={46}
        height={46}
        className='mr-2'
      />
      <span className='font-inter mr-4 text-3xl font-bold text-[#222]'>
        Pokedex
      </span>
      <span className='font-inter text-base font-normal text-gray-400'>
        Copyright ©2025 Pokedex
      </span>
    </div>
  </footer>
);

export default Footer;
