import React from 'react';


const NavbarSearch = () => (
  <header className='mb-18 flex w-full items-center justify-between bg-white shadow'>
    <div className='flex items-center gap-3' style={{ marginLeft: '100px' }}>
      <img src='/icons/pokeball.svg' alt='Pokedex Logo' className='h-6 w-6' />
      <span className='font-inter text-xl font-medium tracking-wide text-gray-900'>
        Pokedex
      </span>
    </div>
  </header>
);

export default NavbarSearch;
