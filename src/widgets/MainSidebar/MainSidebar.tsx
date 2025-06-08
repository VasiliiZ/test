import React, { useState } from 'react';
import { NavLink } from 'react-router';

import { useAppDispatch, useAppSelector } from '../../shared/store';
import { fetchCocktail } from '../../shared/store/cocktailsSlice';

import './styles.scss'

const SIDEBAR_ITEMS = [
  {
    id: 'margarita',
    name: 'Маргарита',
  },
  {
    id: 'mojito',
    name: 'Мохито',
  },
  {
    id: 'a1',
    name: 'А1',
  },
  {
    id: 'kir',
    name: 'Кир',
  }
];

export const MainSidebar = () => {
  const dispatch = useAppDispatch();
  const cocktails = useAppSelector((state) => state.cocktails.items);
  const [isOpen, setIsOpen] = useState(false);

  const clickHandler = (cocktailId: string) => {
    if (!cocktails[cocktailId]) {
      dispatch(fetchCocktail(cocktailId));
    }
    setIsOpen(false);
  };

  return (
    <div className='sidebar'>
      <button
        className='burger-button'
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>
      <ul className='list' style={{ display: isOpen ? 'block' : 'none' }}>
        {SIDEBAR_ITEMS.map(item => (
          <li key={item.id}>
            <NavLink
              to={`/cocktail/${item.id}`}
              onClick={() => clickHandler(item.id)}
              style={({ isActive }) => ({
                display: 'block',
                cursor: 'pointer',
                padding: '10px',
                borderRadius: '4px',
                textDecoration: 'none',
                color: isActive ? '#1976d2' : '#222',
                backgroundColor: isActive ? '#e3f2fd' : 'transparent',
                fontWeight: isActive ? 'bold' : 'normal'
              })}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
