import React, { useState } from 'react';
import SearchBar from './component/search-bar';
import ListPokemon from './list/list-pokemon';

const Home = () => {
  const [keyword, setKeyword] = useState('');

  return (
    <>
      <SearchBar onSearch={setKeyword} />
      <ListPokemon keyword={keyword} />
    </>
  );
};

export default Home;