/**
 * Author : Shubham Pareek
 * Purpose : Is the file where we combine all the reducers we have, reducers basically update/make changes to the store
 */
import { combineReducers } from "redux";
import stateReducer from "./stateReducer";

const reducers = combineReducers({
  mainState: stateReducer,
});

export default reducers;
