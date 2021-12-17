/**
 * Author : Shubham Pareek
 * Purpose : Component to display the search results
 */
import react, { Component, useState } from "react";
import { RecipeDetails } from "./RecipeDetails";
import { SearchItems } from "./SearchItems";
import { useSelector } from "react-redux";
import _uniqueId from "lodash/uniqueId";

const SuggestedRecipes = (props) => {
  const [id] = useState(_uniqueId("r"));
  /**
   * The props we received are the following
   * availableIngredients : string telling how many ingredients user has available
   * description : string having a description of the recipe
   * fullMatch : boolean whether user has all recipes or not
   * id : id of the recipe
   * ingredients : array of all the required ingredients
   * minutes : string of how long it takes to cook the recipe
   * n_ingredients : string of how many ingredients are required
   * n_steps : string of how many steps are required
   * name : string, name of recipe
   * steps : array containing each individual step to make the recipe
   * tags : array containing common tags for the recipe
   * nutrition : object containing nutrition info of the recipe
   *             contains 'calories', 'protein', 'saturatedFat', 'sodium'
   *                      'sugar' and 'totalFat'
   */
  return (
    <li className={["singleSuggestion"].join(" ")} id={id}>
      <RecipeDetails
        name={props.name}
        ingredients={props.ingredients}
        tags={props.tags}
        minutes={props.minutes}
        description={props.description}
        nutrition={props.nutrition}
        steps={props.steps}
        availableIngredients={props.availableIngredients}
      />
    </li>
  );
};

const SearchOutput = (props) => {
  let state = useSelector((state) => state);

  let allSuggested = [];

  let suggestedRecipes = state.mainState.suggestedRecipe;

  // console.log("suggested recipes are")
  // console.log(suggestedRecipes)

  for (let i = 0; i < suggestedRecipes.length; i++) {
    //we are pushing two things, the key is going to the index of the recipe, this is an unique identifier
    //the second thing is the recipe itself
    allSuggested.push(<SuggestedRecipes key={i} {...suggestedRecipes[i]} />);
  }

  return (
    <div className={["searchResultsWrapper"]}>
      <ul className={["suggestions"].join(" ")}>{allSuggested}</ul>
    </div>
  );
};

const SearchResults = (props) => {
  return (
    <div className={["searchResults"].join(" ")}>
      <SearchItems />
      <SearchOutput />
    </div>
  );
};

export { SearchResults };
