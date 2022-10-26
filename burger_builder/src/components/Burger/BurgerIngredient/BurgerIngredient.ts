import React, { Component } from 'react';
// import classes from './BurgerIngredient.css';
import PropTypes, { string } from 'prop-types';

interface propTypes {
  PropTypes: string;
}

class BurgerIngredient extends Component {
  render() {
    let ingredient = null;

    switch (this.props.type) {
      case 'bread-bottom':
        ingredient = <div classname={classes.BreadBottom}></div>;
        bread;
      case 'bread-top':
        ingredient = (
          <div className={classes.Breadtop}>
            <div className={classes.Seeds1}></div>
            <div className={classes.Seeds2}></div>
          </div>
        );
      case 'meat':
        ingredient = <div className={classes.Meat}></div>;
        break;
      case 'cheese':
        ingredient = <div className={classes.Cheese}></div>;
        break;
      case 'bacon':
        ingredient = <div className={classes.Bacon}></div>;
        break;
      case 'salad':
        ingredient = <div className={classes.Salad}></div>;
        break;
      default:
        ingredient = null;
    }

    return ingredient;
  }
}
export default burgerIngredient;
