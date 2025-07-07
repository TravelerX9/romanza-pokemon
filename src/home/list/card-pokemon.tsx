import React from 'react';
import { useSelector } from 'react-redux';
import { useFavoriteMutation } from '../../lib/hooks/useFavoriteMutation';
import { selectFavorites } from '../../features/favoritePokemon/favoriteSlice';

export interface PokemonCardProps {
  id: string;
  name: string;
  image: string;
  types: string[];
}

const PokemonCard: React.FC<PokemonCardProps> = ({
  id,
  name,
  image,
  types,
}) => {
  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites.includes(Number(id));
  const favoriteMutation = useFavoriteMutation();

  return (
    <div className='box-border flex h-[334px] w-[238px] flex-col items-center rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-lg'>
      <div className='relative mt-2 mb-2 h-[192px] w-[192px]'>
        {/* Faded Pokeball background */}
        <svg
          width={192}
          height={192}
          viewBox='0 0 192 192'
          fill='none'
          className='absolute top-0 left-0 opacity-5'
          aria-hidden='true'
        >
          <circle cx='96' cy='96' r='96' fill='#222' />
        </svg>
        {/* Pokemon image */}
        <img
          src={image}
          alt={name}
          className='absolute top-4 left-4 z-[1] h-[160px] w-[160px] object-contain'
          draggable={false}
        />
        {/* Favorite button
        <button
          className={`absolute -top-2 -right-6 z-20 rounded-full p-2 ${
            isFavorite ? 'bg-yellow-300' : 'bg-gray-300'
          }`}
          onClick={() =>
            isFavorite
              ? favoriteMutation.mutate({ id: Number(id), action: 'remove' })
              : favoriteMutation.mutate({ id: Number(id), action: 'add' })
          }
          aria-label={isFavorite ? 'Unfavorite' : 'Favorite'}
        >
          <span style={{ fontSize: '1.5rem', lineHeight: 1 }}>
            {isFavorite ? '★' : '☆'}
          </span>
        </button> */}
      </div>
      <div className='w-full text-left'>
        <div className='font-inter pointer-none mb-1 text-sm font-normal text-gray-500'>
          {id}
        </div>
        <div className='font-inter pointer-none mb-4 text-xl font-bold text-gray-900'>
          {name}
        </div>
        <div className='flex gap-2'>
          {types.map((type) => (
            <span
              key={type}
              className='font-inter pointer-none rounded-lg border border-gray-300 bg-gray-50 px-3 py-0.5 text-sm font-medium text-gray-900'
            >
              {type}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
