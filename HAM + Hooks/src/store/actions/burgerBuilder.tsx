import { ActionType, InitialState } from '../reducers/burgerBuilder';
import axios from './../../axios-orders';
import { ThunkDispatch } from 'redux-thunk';
import * as actionTypes from './actionTypes';
import { ReduxState, TypedThunk } from '../..';
import { AnyAction } from 'redux';

export const addIngredient = (name: string) => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredientName: name,
  };
};
export const removeIngredient = (name: string) => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingredientName: name,
  };
};

export const setIngredients = (ingredients: string) => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredients: ingredients,
  };
};

export const fetchIngredientsFailed = () => {
  return {
    type: actionTypes.FETCH_INGREDIENTS_FAILED,
    error: true,
  };
};

export const initIngredients = () => {
  return (TypedDispatch: ThunkDispatch<ReduxState, void, AnyAction>) => {
    axios
      .get(
        'https://react-burger-2caa5-default-rtdb.europe-west1.firebasedatabase.app/ingredients.json'
      )
      .then((response) => {
        TypedDispatch(setIngredients(response.data));
      })
      .catch((error) => {
        TypedDispatch(fetchIngredientsFailed());
      });
  };
};
