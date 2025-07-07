import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import {
  addFavorite,
  removeFavorite,
} from '../../features/favoritePokemon/favoriteSlice';

// Simulasi request ke server (selalu berhasil setelah delay)
function fakeFavoriteRequest({ id }: { id: number }) {
  return new Promise((resolve) => setTimeout(() => resolve(id), 500));
}

type FavoriteAction = { id: number; action: 'add' | 'remove' };

export function useFavoriteMutation() {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id }: FavoriteAction) => {
      return await fakeFavoriteRequest({ id });
    },
    onMutate: async ({ id, action }: FavoriteAction) => {
      if (action === 'add') {
        dispatch(addFavorite(id));
      } else {
        dispatch(removeFavorite(id));
      }
    },
    onError: (err, { id, action }, context) => {
      // Rollback: lakukan kebalikan dari action
      if (action === 'add') {
        dispatch(removeFavorite(id));
      } else {
        dispatch(addFavorite(id));
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['favorites'] });
    },
  });
}
