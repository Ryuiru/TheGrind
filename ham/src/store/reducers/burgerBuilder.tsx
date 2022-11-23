import React from 'react';
import { updateObject } from './../../store/utility';
import * as actionTypes from '../actions/actionTypes';

export interface ActionType {
  type: string;
  ingredientName?: string;
  idToken?: string;
  userId?: string | null;
  error?: boolean | string;
  path?: string;
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
  building: boolean;
  // loading?: boolean;
}

interface Ingredients {
  [key: string]: number;
}

const initialState: InitialState = {
  ingredients: {},
  totalPrice: 4,
  error: false,
  building: false,
};

const INGREDIENT_PRICES: Ingredients = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

const addIngredient = (state: InitialState, action: ActionType2) => {
  const updatedIngredient = {
    [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
  };
  const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
  const updatedState = {
    ingredients: updatedIngredients,
    totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
    building: true,
  };
  return updateObject(state, updatedState);
};

const removeIngredient = (state: InitialState, action: ActionType2) => {
  const updatedIng = {
    [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
  };
  const updatedIngs = updateObject(state.ingredients, updatedIng);
  const updatedSt = {
    ingredients: updatedIngs,
    totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
    building: true,
  };
  return updateObject(state, updatedSt);
};

const setIngredients = (state: InitialState, action: ActionType2) => {
  return updateObject(state, {
    ingredients: {
      salad: action.ingredients.salad,
      bacon: action.ingredients.bacon,
      cheese: action.ingredients.cheese,
      meat: action.ingredients.meat,
    },
    totalPrice: 4,
    error: false,
    building: false,
  });
};

const fetchIngredientsFailed = (state: InitialState, action: ActionType2) => {
  return updateObject(state, { error: true });
};

const reducer = (state = initialState, action: ActionType2) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return addIngredient(state, action);
    case actionTypes.REMOVE_INGREDIENT:
      return removeIngredient(state, action);
    case actionTypes.SET_INGREDIENTS:
      return setIngredients(state, action);
    case actionTypes.FETCH_INGREDIENTS_FAILED:
      return fetchIngredientsFailed(state, action);
    default:
      return state;
  }
};

export default reducer;
