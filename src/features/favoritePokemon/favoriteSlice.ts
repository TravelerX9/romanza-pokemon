import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FavoriteState {
  favorites: number[];
}

const initialState: FavoriteState = {
  favorites: [],
};

const favoriteSlice = createSlice({
  name: 'favoritePokemon',
  initialState,
  reducers: {
    addFavorite: (state: FavoriteState, action: PayloadAction<number>) => {
      if (!state.favorites.includes(action.payload)) {
        state.favorites.push(action.payload);
      }
    },
    removeFavorite: (state: FavoriteState, action: PayloadAction<number>) => {
      state.favorites = state.favorites.filter(
        (id: number) => id !== action.payload
      );
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;
export const selectFavorites = (state: { favoritePokemon: FavoriteState }) =>
  state.favoritePokemon.favorites;
export default favoriteSlice.reducer;
