import React from 'react';

interface SearchBarProps {
  onSearch: (keyword: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [keyword, setKeyword] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(keyword.trim().toLowerCase());
  };

  return (
    <div className='mb-8 flex w-full max-w-full justify-center'>
      <form
        className='absolute top-[67%] right-0 left-0 mx-auto flex h-8 w-6 max-w-3xl items-center rounded-full bg-white px-35 md:top-[72%] md:h-14 md:w-16 md:px-70'
        autoComplete='off'
        onSubmit={handleSubmit}
      >
        <input
          type='text'
          placeholder='Search Pokemon'
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className='text-1xl absolute left-0 flex-1 bg-transparent px-15 text-left font-normal text-gray-500 *:bg-transparent placeholder:text-gray-500 focus:outline-none md:px-15'
          style={{ fontFamily: 'Poppins, sans-serif' }}
        />
        <button
          type='submit'
          className='ml-27 flex h-6 w-6 items-center justify-center rounded-full bg-[#4b39b2] transition hover:bg-[#2307bf] md:ml-58 md:h-10 md:w-10'
          tabIndex={-1}
        >
          <svg
            width='50'
            height='30'
            fill='none'
            viewBox='0 0 24 24'
            stroke='white'
            strokeWidth={2}
          >
            <circle
              cx='12'
              cy='12'
              r='6'
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

export default SearchBar;
