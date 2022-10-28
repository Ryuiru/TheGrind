import React from 'react';
import classes from './burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
const burger = (props: string) => {
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type='bread-top' />
      <BurgerIngredient type='cheese' />
      <BurgerIngredient type='meat' />
      <BurgerIngredient type='bread-bottom' />
    </div>
  );
};

export default burger;
