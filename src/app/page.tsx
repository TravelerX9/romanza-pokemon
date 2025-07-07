'use client';
import React, { useState, Suspense } from 'react';
import Navbar from '../home/partials/navbar';
import Hero from '../home/hero/hero';
import ListPokemon from '../home/list/list-pokemon';
import Footer from '../home/partials/footer';
import { Provider } from 'react-redux';
import { store } from './store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function HomePage() {
  const [keyword, setKeyword] = useState('');

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Navbar />
        <Hero onSearch={setKeyword} />
        <Suspense fallback={<div>Loading...</div>}>
          <ListPokemon keyword={keyword} />
        </Suspense>
        <Footer />
      </Provider>
    </QueryClientProvider>
  );
}
