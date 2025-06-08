import { useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../store';
import { fetchCocktail } from '../store/cocktailsSlice';

const DEFAULT_COCKTAIL = 'margarita';

export const useCocktails = () => {
  const cocktails = useAppSelector((state) => state.cocktails.items);
  const firstCocktailId = Object.keys(cocktails)[0];
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!firstCocktailId) {
      dispatch(fetchCocktail(DEFAULT_COCKTAIL));
    }
  }, [dispatch, firstCocktailId]);

  return { cocktails, firstCocktailId };
}; 