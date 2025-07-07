import React, { useEffect, useState } from 'react';
import NavbarSearch from '../../../home/partials/navbar-search';
import Footer from '../../../home/partials/footer-power';

interface Evolution {
  id: number;
  name: string;
  image: string;
}

interface PowerPokemonPageContentProps {
  id: string;
}

export function PowerPokemonPageContent({ id }: PowerPokemonPageContentProps) {
  const [pokemon, setPokemon] = useState<any>(null);
  const [species, setSpecies] = useState<any>(null);
  const [evolution, setEvolution] = useState<Evolution[]>([]);

  // Fetch pokemon detail
  useEffect(() => {
    if (id) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((res) => res.json())
        .then((data) => setPokemon(data));
    }
  }, [id]);

  // Fetch species & evolution chain
  useEffect(() => {
    if (id) {
      fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setSpecies(data);
          // fetch evolution chain
          if (data.evolution_chain?.url) {
            fetch(data.evolution_chain.url)
              .then((res) => res.json())
              .then((evoData) => {
                // Parse evolution chain
                const evoArr: Evolution[] = [];
                let evo = evoData.chain;
                while (evo) {
                  const evoId = evo.species.url
                    .split('/')
                    .filter(Boolean)
                    .pop();
                  evoArr.push({
                    id: Number(evoId),
                    name: evo.species.name,
                    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${evoId}.png`,
                  });
                  evo = evo.evolves_to[0];
                }
                setEvolution(evoArr);
              });
          }
        });
    }
  }, [id]);

  useEffect(() => {
    console.log('pokemon', pokemon);
    console.log('species', species);
    console.log('evolution', evolution);
  }, [pokemon, species, evolution]);

  if (!pokemon || !species) return <div>Loading...</div>;

  // Helper: capitalize
  const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

  // TOMBOL KEMBALI
  return (
    <div className='relative mx-auto flex h-[1800px] w-[350px] flex-col rounded-3xl bg-white px-6 py-1 shadow md:h-[1600px] md:w-[1440px]'>
      <NavbarSearch />
      <button
        onClick={() => window.history.back()}
        className='absolute top-18 left-8 z-50 mb-4 rounded-full border-1 border-gray-200 px-2 py-1 text-sm font-medium text-gray-500 hover:text-gray-800'
      >
        &larr; Back
      </button>
      <div className='flex flex-col gap-8 md:flex-row'>
        {/* Gambar besar */}
        <img
          src={pokemon.sprites.other['official-artwork'].front_default}
          alt={pokemon.name}
          className='h-[190px] max-h-[290px] w-[350px] object-contain sm:h-[180px] sm:w-[180px] md:h-[350px] md:w-[350px]'
        />
        {/* Detail */}
        <div className='grid grid-cols-1'>
          <div className='mb-2 grid items-center gap-2'>
            <img src='/icons/pokeball.svg' alt='poke' className='h-6 w-6' />
            <span className='text-sm font-medium text-gray-500'>
              {pokemon.id.toString().padStart(3, '0')}
            </span>
          </div>
          <div className='font-inter mb-2 text-3xl font-bold text-gray-900'>
            {pokemon?.name ? cap(pokemon.name) : '-'}
          </div>
          <div className='mb-4 text-gray-600'>
            {
              species.flavor_text_entries.find(
                (f: any) => f.language.name === 'en'
              )?.flavor_text
            }
          </div>
          <div className='mb-4 flex gap-4 border-b border-gray-200 pb-4'>
            <div>
              <div className='mb-1 text-xs text-gray-400'>Type</div>
              <div className='flex gap-2'>
                {pokemon.types.map((t: any) => (
                  <span
                    key={t.type.name}
                    className='rounded border border-gray-200 bg-gray-100 px-2 py-0.5 text-sm font-medium text-gray-700'
                  >
                    {cap(t.type.name)}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <div className='mb-1 text-xs text-gray-400'>Abilities</div>
              <div className='flex gap-2'>
                {pokemon.abilities.map((a: any) => (
                  <span
                    key={a.ability.name}
                    className='rounded border border-gray-200 bg-gray-100 px-2 py-0.5 text-sm font-medium text-gray-700'
                  >
                    {cap(a.ability.name)}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className='mb-4 flex gap-6'>
            <div>
              <div className='text-xs font-bold text-gray-700'>Weight</div>
              <div className='text-lg font-bold'>{pokemon.weight / 10} Kg</div>
            </div>
            <div>
              <div className='text-xs font-bold text-gray-700'>Height</div>
              <div className='text-lg font-bold'>{pokemon.height / 10} m</div>
            </div>
            <div>
              <div className='text-xs font-bold text-gray-700'>Artwork</div>
              <img
                src={pokemon.sprites.front_default}
                alt='artwork'
                className='-mt-8 -ml-5 h-30 w-30 object-contain'
              />
            </div>
          </div>
          {/* Stats */}
          <div className='relative -top-[8%]'>
            <div className='text-md font-inter mb-2 font-semibold text-gray-900'>
              Stats
            </div>
            <div className='flex flex-col gap-2'>
              {pokemon.stats?.map((s: any) => (
                <div key={s.stat.name} className='flex items-center gap-2'>
                  <span className='w-18 text-sm font-medium text-gray-600'>
                    {s.stat.name.replace('special-', 'Sp. ')}
                  </span>
                  <span className='w-8 text-right text-xs font-bold text-gray-900'>
                    {s.base_stat}
                  </span>
                  <div className='h-3 flex-1 overflow-hidden rounded bg-gray-100'>
                    <div
                      className={`h-full rounded transition-all duration-300 ${
                        s.base_stat > 70
                          ? 'bg-green-400'
                          : s.base_stat > 40
                            ? 'bg-yellow-400'
                            : s.base_stat > 0
                              ? 'bg-red-400'
                              : 'bg-red-400'
                      }`}
                      style={{ width: `${Math.min(s.base_stat, 100)}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Evolution Chain */}
      <div className='mt-10'>
        <div className='font-inter mb-6 text-2xl font-bold text-gray-900'>
          Evolution Chain
        </div>
        <div className='flex-col-1 flex-row gap-8 px-10 md:flex md:grid-cols-3'>
          {evolution.map((evo) => (
            <div
              key={evo.id}
              className='grid w-[200px] min-w-[50px] flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white px-8 py-2 shadow-sm transition hover:shadow-lg'
            >
              <img
                src={evo.image}
                alt={evo.name}
                className='mb-3 h-28 w-28 object-contain'
              />
              <div className='font-inter mb-1 text-xs tracking-widest text-gray-400'>
                {evo.id.toString().padStart(3, '0')}
              </div>
              <div className='font-inter text-lg font-bold text-gray-900'>
                {cap(evo.name)}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
