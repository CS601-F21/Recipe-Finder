/**
 * Author : Shubham Pareek
 * Purpose : Action to add an ingredients
 */

import { Store } from "../Store";

/**
 * This file is where, once the user adds an ingredient, we add whatver is it the user added to our set of ingredients, the set will
 * then be used to make a fetch request to the backend and update the state
 */
const addIngredient = (ingredient) => {
  /**
   * The payload (ingredient) is going to be an object of the following format
   * {
   *  'ingredientsToBeAdded' : string //string that the user has input
   * }
   */
  console.log(`action taker addIngredient got following ingredient`);
  console.log(ingredient);

  //before we do a call to the backend server, we need to get the list of current ingredients the
  //user has already given to us before, for that we need access to the current state, which contains
  //the current ingredients the user has, as well as the list of suggestions for the user
  let state = Store.getState();
  console.log("in add ingredients state is");
  console.log(state);
  //first we need to get the list of current ingredients the user has
  let ingredient_list = Array.from(state.mainState.ingredients);

  //then we add the new ingredient the user has just input
  ingredient_list.push(ingredient["ingredientsToBeAdded"]);

  /**
   * The payload we will send to the reducer will be of the following format
   * payload : object
   *     {
   *         ingredients : [] //list of ingredients the user has input
   *         suggestedRecipes : [] //list of json objects and each json object is a recipe
   *     }
   */

  let suggestions = state.mainState.suggestedRecipe;

  const dispatchObject = {
    ingredients: ingredient_list,
    suggestion: suggestions,
  };

  //addIngredient and updateSuggestions are two different actions and have two different reducers
  const objToBeReturned = (dispatch) => {
    dispatch({
      type: "addIngredient",
      payload: dispatchObject,
    });
  };

  return objToBeReturned;
};

export { addIngredient };
