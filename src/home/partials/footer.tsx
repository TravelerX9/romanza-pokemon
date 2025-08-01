import React from 'react';

const Footer: React.FC = () => (
  <footer className='-pl-1 box-border flex h-[120px] w-full items-center bg-white md:pl-10 shadow border-1 border-gray-200'>
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
       <Link
        href='https://www.linkedin.com/in/romanza-hendra-bayu-40819211a/'
        target='_blank'
        rel='noopener noreferrer'
        className='text-gray-400'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          fill='currentColor'
          viewBox='0 0 24 24'
        >
          <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2.001 3.6 4.601v5.595z' />
        </svg>
      </Link>
    </div>
  </footer>
);

export default Footer;
