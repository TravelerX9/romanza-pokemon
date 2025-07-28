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
    </section>
  );
};

export default Hero;
