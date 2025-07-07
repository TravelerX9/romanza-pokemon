import React from 'react';
import SearchBar from '../component/search-bar';

interface HeroProps {
  onSearch: (keyword: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onSearch }) => {
  const [keyword, setKeyword] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(keyword.trim().toLowerCase());
  };

  return (
    <section
      className='relative -top-15 z-5 mx-auto flex h-[500px] w-full flex-col items-center justify-center md:h-[620px]'
      style={{
        backgroundImage: `
          radial-gradient(rgba(0,0,0,0.07) 1px, transparent 1px)
        `,
        backgroundSize: '32px 32px',
        backgroundPosition: 'left top',
        backgroundRepeat: 'repeat',
      }}
    >
      ,
      <div>
        {/* bg-yellow.png dikeluarkan dan dijadikan img absolute */}
        <img
          src='/images/bg-yellow.png'
          alt='Background'
          className='absolute inset-0 -top-[15%] -z-5 h-[590px] md:h-[800px] w-full object-cover'
          style={{ pointerEvents: 'none' }}
          draggable={false}
        />
      </div>
      {/* Pokemon Logo */}
      <img
        src='/images/pokemon-title.png'
        alt='Pokemon Logo'
        className='mb-4 w-35 md:w-56'
        style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.15))' }}
      />
      <h1 className='mt-2 mb-4 text-center text-2xl font-bold text-gray-900 md:text-5xl'>
        Discover the Most Powerful
        <br />
        Pokémon in the Wild!
      </h1>
      <p className='mb-10 text-center text-xs font-medium text-gray-800 md:text-lg'>
        Train, Battle, and Collect Your Favorites!
      </p>
      <div className='mx-auto w-full max-w-xs sm:max-w-md'>
        <SearchBar onSearch={onSearch} />
      </div>
      {/* Images cloud & pokemon */}
      <img
        src='/images/charizard.png'
        alt='Charizard'
        className='absolute top-[390px] left-[10px] w-[140px] md:top-[460px] md:left-[90px] md:w-[300px]'
        draggable={false}
      />
      <img
        src='/images/pikachu.png'
        alt='Pikachu'
        className='absolute top-[430px] right-[10px] w-[80px] md:top-[500px] md:right-[115px] md:w-[200px]'
        draggable={false}
      />
      <img
        src='/images/awan1.png'
        alt='Cloud Left'
        className='absolute -bottom-[16px] left-0 z-[1] w-[50.1%] md:top-[610px] md:-bottom-[100px]'
        draggable={false}
      />
      <img
        src='/images/awan2.png'
        alt='Cloud Right'
        className='absolute right-0 -bottom-[16px] z-[1] w-[50.1%] md:top-[610px] md:-bottom-[100px]'
        draggable={false}
      />
    </section>
  );
};

export default Hero;
