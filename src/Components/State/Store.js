import { createStore, applyMiddleware } from "redux";
import reducers from "./Reducers/allReducers"
import thunk from "redux-thunk";


const Store = createStore(
    reducers,
    {}, //default state will be an empty object
    //check on the above line of code
    applyMiddleware(thunk)
)

export { Store };