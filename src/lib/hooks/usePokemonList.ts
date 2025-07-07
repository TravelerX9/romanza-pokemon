import { useQuery } from '@tanstack/react-query';

interface PokemonListResult {
  name: string;
  url: string;
}

export interface PokemonListItem {
  id: number;
  name: string;
  image: string;
  types: string[];
}

async function fetchPokemonList(): Promise<PokemonListItem[]> {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=25');
  const data = await res.json();
  const results: PokemonListResult[] = data.results;

  // Fetch detail for each pokemon (for image and types)
  const detailPromises = results.map(async (pokemon, idx) => {
    const detailRes = await fetch(pokemon.url);
    const detail = await detailRes.json();
    return {
      id: detail.id,
      name: detail.name,
      image: detail.sprites.front_default,
      types: detail.types.map((t: any) => t.type.name),
    };
  });
  return Promise.all(detailPromises);
}

export function usePokemonList() {
  return useQuery<PokemonListItem[], Error>({
    queryKey: ['pokemon-list'],
    queryFn: fetchPokemonList,
  });
}
