/**
 * Author : Shubham Pareek
 * Purpose : Is the file combining all the actions the user can make on the state
 */
import { addIngredient } from "./addIngredient";
import { removeIngredient } from "./removeIngredient";
import { getSuggestions } from "./getSuggestions";

const allActions = {
  addIngredient,
  removeIngredient,
  getSuggestions,
};

export { allActions };
