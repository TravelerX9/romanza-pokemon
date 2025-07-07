import { useQuery } from '@tanstack/react-query';
import { fetchPokemon } from '../../api/pokemon';
import { Pokemon } from '../types/pokemon';

export function usePokemon(name: string) {
  return useQuery<Pokemon, Error>({
    queryKey: ['pokemon', name],
    queryFn: () => fetchPokemon(name),
  });
}
