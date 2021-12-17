/**
 * Author : Shubham Pareek
 * Purpose : Is the file where we have defined the store, from which the components can access the states
 */
import { createStore, applyMiddleware } from "redux";
import reducers from "./Reducers/allReducers";
import thunk from "redux-thunk";
import promiseMiddleware from "redux-promise";

const Store = createStore(
  reducers,
  {
    ingredients: new Set(),
    suggestedRecipe: [],
  }, //this is the default state
  applyMiddleware(thunk, promiseMiddleware)
);

export { Store };
