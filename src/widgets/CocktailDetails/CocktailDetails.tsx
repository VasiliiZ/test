import React from 'react';
import { useParams } from 'react-router-dom';

import { useAppSelector } from '../../shared/store/store';
import { Cocktail } from '@/shared/store/cocktailsSlice';
import './styles.scss'

export const CocktailDetails = () => {
  const { id } = useParams();
  const cocktails = useAppSelector((state) => state.cocktails.items);
  const cocktail = id ? cocktails[id] : null;

  if (!cocktail) {
    return <div>Загрузка...</div>;
  }

  const drinks = cocktail;

  if (!drinks) {
    return <div>Коктейль не найден</div>;
  }

  const formatIngredients = (cocktail: Cocktail) => {

    const ingredients = [];

    const maxIngredients = Object.keys(cocktail)
      .filter(key => key.startsWith('strIngredient'))
      .length;

    for (let i = 1; i <= maxIngredients; i++) {
      const ingredient = cocktail[`strIngredient${i}`];
      const measure = cocktail[`strMeasure${i}`];
      
      if (ingredient) {
        ingredients.push(measure && measure.trim() ? 
          `${measure.trim()} ${ingredient}` : 
          ingredient);
      }
    }

    return ingredients
  } 


  return (
    <div className="cocktail-details">
      
      {drinks.map(item => {

        const ingridients = formatIngredients(item);
        return (
          <div key={item.idDrink} className='detail-container'>
            <div className='info'>
              <h1>{item.strDrink}</h1>
              <p>{item.strCategory}</p>
              <p>{item.strAlcoholic}</p>
              <p>{item.strGlass}</p>
              <p>{item.strCategory}</p>
              <h2>Инструкция</h2>
              <p>{item.strInstructions}</p>

              <h3>Список ингридиентов</h3>
              <ul>
                {
                  ingridients.map((item, index ) => {
                    return <li key={`${index}${item}`}>{item}</li>
                  })
                }
              </ul>
              </div>
              <img className='image' src={item.strDrinkThumb} width={200} height={200}></img>
          </div>
        )})
      }

      
    </div>
  );
}; 