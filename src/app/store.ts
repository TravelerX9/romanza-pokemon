import { configureStore } from '@reduxjs/toolkit';
import favoriteReducer from '../features/favoritePokemon/favoriteSlice';

export const store = configureStore({
  reducer: {
    favoritePokemon: favoriteReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
