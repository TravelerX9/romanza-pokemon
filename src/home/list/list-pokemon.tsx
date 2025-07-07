import React, { useState } from 'react';
import PokemonCard from './card-pokemon';
import { usePokemonList } from '../../lib/hooks/usePokemonList';
import { useRouter } from 'next/navigation';

interface ListPokemonProps {
  keyword: string;
}

const ListPokemon: React.FC<ListPokemonProps> = ({ keyword }) => {
  const { data, isLoading, error } = usePokemonList();
  const router = useRouter();
  const [rows, setRows] = useState(2); // tampilkan 2 baris awal
  const cardsPerRow = 4;

  // Filter langsung pakai keyword dari props
  const filtered = data
    ? data
        .filter((pokemon) =>
          pokemon.name.toLowerCase().includes(keyword.toLowerCase())
        )
        .slice(0, 100)
    : [];

  const handleCardClick = (id: string) => {
    router.push(`/power/power-pokemon-page?id=${id}`);
  };

  const visiblePokemons = filtered.slice(0, rows * cardsPerRow);
  const canLoadMore = visiblePokemons.length < filtered.length;

  return (
    <>
      <div className='mx-auto box-border flex min-h-[530px] w-full flex-col gap-2 rounded-3xl bg-white px-6 py-10 md:min-h-[1000px]'>
        <h2 className='font-inter mt-0 mb-8 self-start text-[22px] font-bold text-[#222] not-italic md:mt-26 md:text-[32px]'>
          <b>List Pokemon</b>
        </h2>
        <div className='grid w-full grid-cols-1 items-center justify-items-center gap-10 md:grid-cols-4'>
          {isLoading && <div>Loading...</div>}
          {error && <div>Error loading list</div>}
          {visiblePokemons &&
            visiblePokemons.map((pokemon) => (
              <div
                key={pokemon.id}
                onClick={() => handleCardClick(pokemon.id.toString())}
                className='cursor-pointer'
              >
                <PokemonCard
                  id={pokemon.id.toString()}
                  name={pokemon.name}
                  image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
                  types={pokemon.types}
                />
              </div>
            ))}
        </div>
        {!isLoading && !error && visiblePokemons.length === 0 && (
          <>
            <div className='mb-4 w-full text-left text-lg font-semibold text-gray-900'>
              No results found for "{keyword}"
            </div>
            <div className='flex w-full flex-col items-center justify-center py-20'>
              <img
                src='/images/pokeball.webp'
                alt='Not Found'
                className='mb-4 h-32 w-32'
                draggable={false}
              />
              <div className='mb-1 text-xl font-bold text-gray-900'>
                Pokémon Not Found
              </div>
              <div className='text-base text-gray-500'>
                Change Your Keywords
              </div>
            </div>
          </>
        )}
        {canLoadMore && (
          <button
            className='right-0 left-0 mx-auto mt-10 h-[52px] w-[200px] rounded-full border border-gray-300 bg-white text-lg font-medium text-[#181C32] transition hover:bg-gray-100'
            onClick={() => setRows((r) => r + 2)}
          >
            Load More
          </button>
        )}
      </div>
    </>
  );
};

export default ListPokemon;
