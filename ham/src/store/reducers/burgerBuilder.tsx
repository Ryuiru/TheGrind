import React from 'react';
import * as actionTypes from '../actions/actionTypes';
export interface ActionType {
  // ingredients?: string;
  type: string;
  ingredientName?: string;
}
export interface ActionType2 {
  ingredients: Ingredients;
  type: string;
  ingredientName: string | number;
}
export interface InitialState {
  ingredients: Ingredients;
  totalPrice: number;
  error: boolean;
  loading?: boolean;
}
interface Ingredients {
  [key: string]: number;
}
const initialState: InitialState = {
  ingredients: {},
  totalPrice: 4,
  error: false,
};
const INGREDIENT_PRICES: Ingredients = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};
const reducer = (state = initialState, action: ActionType2) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
        },
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
      };
    case actionTypes.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
        },
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
      };
    case actionTypes.SET_INGREDIENTS:
      return {
        ...state,
        ingredients: {
          salad: action.ingredients.salad,
          bacon: action.ingredients.bacon,
          cheese: action.ingredients.cheese,
          meat: action.ingredients.meat,
        },
        totalPrice: 4,
        error: false,
      };
    case actionTypes.FETCH_INGREDIENTS_FAILED:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};

export default reducer;
