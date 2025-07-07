import React from 'react';
import PokemonCard from './card-pokemon';
import { usePokemonList } from '../../lib/hooks/usePokemonList';
import { useRouter } from 'next/navigation';

interface ListPokemonProps {
  keyword: string;
}

const ListPokemon: React.FC<ListPokemonProps> = ({ keyword }) => {
  const { data, isLoading, error } = usePokemonList();
  const router = useRouter();

  // Filter langsung pakai keyword dari props
  const filtered = data
    ? data.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(keyword.toLowerCase())
      )
    : [];

  const handleCardClick = (id: string) => {
    router.push(`/power/power-pokemon-page?id=${id}`);
  };

  return (
    <>
      <div className='mx-auto box-border flex min-h-[530px] w-[230px] md:min-h-[2530px] md:w-[1200px] flex-col rounded-3xl bg-white px-6 py-10 gap-2'>
        <h2 className='font-inter mt-0 mb-8 md:mt-26 self-start text-[22px] md:text-[32px] font-bold text-[#222] not-italic'>
          <b>List Pokemon</b>
        </h2>
        <div className='grid w-full grid-cols-1 md:grid-cols-4 justify-items-center items-center gap-10'>
          {isLoading && <div>Loading...</div>}
          {error && <div>Error loading list</div>}
          {filtered &&
            filtered.map((pokemon) => (
              <div
                key={pokemon.id}
                onClick={() => handleCardClick(pokemon.id.toString())}
                className='cursor-pointer'
              >
                <PokemonCard
                  id={pokemon.id.toString()}
                  name={pokemon.name}
                  image={pokemon.image}
                  types={pokemon.types}
                />
              </div>
            ))}
        </div>
        <button className='right-0 left-0 mx-auto mt-10 h-[52px] w-[200px] rounded-full border border-gray-300 bg-white text-lg font-medium text-[#181C32] transition hover:bg-gray-100'>
          Load More
        </button>
      </div>
    </>
  );
};

export default ListPokemon;
