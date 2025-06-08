import { Routes, Route, Navigate } from 'react-router';
import React from 'react';

import { useCocktails } from '@/shared/hooks/useCocktails';
import { CocktailDetails } from '@/widgets/CocktailDetails';
import { NotFound } from '@/shared/ui/NotFound';

const ROUTES = {
  ROOT: '/',
  COCKTAIL: '/cocktail/:id',
  ERROR: '/*'
} as const;

export const MainPage = () => {
  const { firstCocktailId } = useCocktails();

  return (
    <Routes>
      <Route
        path={ROUTES.ROOT}
        element={firstCocktailId ? <Navigate to={`/cocktail/${firstCocktailId}`} /> : null} 
      />
      <Route path={ROUTES.COCKTAIL} element={<CocktailDetails />} />
      <Route path={ROUTES.ERROR} element={<NotFound/> } />
    </Routes>
  );
};