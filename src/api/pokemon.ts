import { Pokemon } from '../lib/types/pokemon';

export async function fetchPokemon(name: string): Promise<Pokemon> {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  if (!res.ok) throw new Error('Pokemon not found');
  return res.json();
}
