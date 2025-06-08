import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { getDrinks } from '../../shared/api';

export interface Cocktail {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strInstructions: string;
  [key: string]: string | null;
}

interface CocktailsState {
  items: Record<string, Cocktail[]>;
  loading: boolean;
  error: string | null;
}

const initialState: CocktailsState = {
  items: {},
  loading: false,
  error: null
};

export const fetchCocktail = createAsyncThunk(
  'cocktails/fetchCocktail',
  async (cocktail_code: string) => {
    const data = await getDrinks(cocktail_code);
    return { cocktail_code, data };
  }
);

const cocktailsSlice = createSlice({
  name: 'cocktails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCocktail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCocktail.fulfilled, (state, action) => {
        console.log(action.payload.data);
        state.loading = false;
        state.items[action.payload.cocktail_code] = action.payload.data.drinks;
      })
      .addCase(fetchCocktail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Произошла ошибка';
      });
  },
});

export const cocktailsReducer = cocktailsSlice.reducer; 