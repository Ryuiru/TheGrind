import React, { Component } from 'react';
import './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import {
  Ingredients,
  BurgerBuilderState,
} from '../../containers/BurgerBuilder/BurgerBuilder';
interface Props {
  ingredients: Ingredients;
}

export const Burger: React.FC<Props> = (props: Props) => {
  let transformedIngredients: JSX.Element | JSX.Element[] = Object.keys(
    props.ingredients
  )
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>;
  }
  return (
    <div className='Burger'>
      <BurgerIngredient type='bread-top' />
      {transformedIngredients}
      <BurgerIngredient type='bread-bottom' />
    </div>
  );
};
