import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
  combineReducers,
  AnyAction,
} from 'redux';
import burgerBuilderReducer from './store/reducers/burgerBuilder';
import orderReducer from './store/reducers/order';
import authReducer from './../src/store/reducers/auth';
import {
  Provider,
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from 'react-redux';
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const rootReducer = combineReducers({
  burgerBuilder: burgerBuilderReducer,
  order: orderReducer,
  auth: authReducer,
});

const store = createStore(
  rootReducer,
  composeEnhancers?.(applyMiddleware(thunk))
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

export type AppDispatch = typeof store.dispatch;
export type ReduxState = ReturnType<typeof rootReducer>;
export type TypedDispatch = ThunkDispatch<ReduxState, any, AnyAction>;
export type TypedThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  ReduxState,
  unknown,
  AnyAction
>;
export const useTypedDispatch = () => useDispatch<TypedDispatch>();
export const useTypedSelector: TypedUseSelectorHook<ReduxState> = useSelector;
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
