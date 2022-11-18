import { ActionType, InitialState } from '../reducers/burgerBuilder';
import axios from './../../axios-orders';
import { ThunkDispatch } from 'redux-thunk';
import * as actionTypes from './actionTypes';

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
  };
};

export const initIngredients = () => {
  return (dispatch: (arg0: { type: string; ingredients?: string }) => void) => {
    axios
      .get(
        'https://react-burger-2caa5-default-rtdb.europe-west1.firebasedatabase.app/ingredients.json'
      )
      .then((response) => {
        console.log('asd');
        dispatch(setIngredients(response.data));
      })
      .catch((error) => {
        dispatch(fetchIngredientsFailed());
      });
  };
};
