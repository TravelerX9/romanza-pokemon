import React from 'react';

const PokedexSearchBar: React.FC = () => {
  return (
    <div className='mx-auto flex w-full max-w-4xl items-center px-2 py-4'>
      {/* Logo & Title */}
      <div className='mr-6 flex items-center'>
        <img
          src='/icons/pokeball.svg'
          alt='Pokeball'
          className='mr-2 h-7 w-7'
        />
        <span className='text-xl font-bold text-gray-800'>Pokedex</span>
      </div>
      {/* Search Bar */}
      <form className='flex flex-1 items-center rounded-full bg-gray-100 px-4 py-2'>
        <input
          type='text'
          placeholder='Search Pokemon'
          className='flex-1 border-none bg-transparent px-2 text-base text-gray-600 outline-none placeholder:text-gray-400'
        />
        <button
          type='submit'
          className='ml-2 flex h-8 w-8 items-center justify-center rounded-full bg-blue-700 hover:bg-blue-800'
        >
          <svg
            width='18'
            height='18'
            fill='none'
            viewBox='0 0 24 24'
            stroke='white'
            strokeWidth={2}
          >
            <circle
              cx='11'
              cy='11'
              r='8'
              stroke='white'
              strokeWidth='2'
              fill='none'
            />
            <path
              d='M21 21l-4.35-4.35'
              stroke='white'
              strokeWidth='2'
              strokeLinecap='round'
            />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default PokedexSearchBar;
