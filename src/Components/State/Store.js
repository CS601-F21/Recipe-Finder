import { createStore } from "redux";
import reducers from "./Reducers/allReducers"

const Store = createStore(
    reducers,
    {} //default state will be an empty object
    //check on the above line of code
)

export { Store };