import React, { Component } from 'react';
import './BurgerIngredient.css';
type P = {
  type: string;
  ingredient: string;
};

class BurgerIngredient extends React.Component<P> {
  render() {
    let ingredient = null;
    switch (this.props.type) {
      case 'bread-bottom':
        ingredient = <div className='BreadBottom'></div>;
        break;
      case 'bread-top':
        ingredient = (
          <div className='BreadTop'>
            <div className='Seeds1'></div>
            <div className='Seeds2'></div>
          </div>
        );
        break;
      case 'meat':
        ingredient = <div className='Meat'></div>;
        break;
      case 'cheese':
        ingredient = <div className='Cheese'></div>;
        break;
      case 'bacon':
        ingredient = <div className='Bacon'></div>;
        break;
      case 'salad':
        ingredient = <div className='Salad'></div>;
        break;
    }
    return ingredient;
  }
}

export default BurgerIngredient;
