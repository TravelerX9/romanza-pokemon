'use client';
import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { PowerPokemonPageContent } from './PowerPokemonPageContent';

function PowerPokemonPageInner() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  if (!id) return <div>Pokemon ID not found.</div>;
  return <PowerPokemonPageContent id={id} />;
}

export default function PowerPokemonPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PowerPokemonPageInner />
    </Suspense>
  );
}
