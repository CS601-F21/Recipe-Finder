import { combineReducers } from "redux";
import stateReducer from "./stateReducer"

const reducers = combineReducers ({
    mainState : stateReducer
})

export default reducers;