import react, { Component, useState } from "react";
import { RecipeDetails } from "./RecipeDetails";
import { SearchItems } from "./SearchItems";
import { useSelector } from "react-redux";
import _uniqueId from 'lodash/uniqueId';


const SuggestedRecipes = (props) => {
    const [id] = useState(_uniqueId("r"));
    /**
     * The props we received are the following
     * 'full_match' : boolean //whether user has all the required ingredients or not
     * 'ingredient_quantity' : object with ingredient as the key and quantity of ingredient required as value
     * 'ingredients' : list of all the required ingredient
     * 'instructions' : string of how to cook the recipe
     * 'missing_ingredients' : string stating how many ingredients the user is missing
     * 'name' : string containing the name of the recipe
     * 'nutrition_values' : object containing the nutritional value of the recipe
     */
    return (
            <li className = {["singleSuggestion"].join(" ")} id={id}>
                <RecipeDetails name = {props.name} ingredientQuantity = {props.ingredient_quantity}
                    instructions = {props.instructions} nutritionValue = {props.nutrition_values}
                    ingredients = {props.ingredients} fullMatch = {props.full_match} missingIngredients = {props.missing_ingredients}
                    />
            </li>
    )
}

const SearchOutput = (props) => {

    let state =  useSelector((state) => state)    
    
    let allSuggested = [];

    let suggestedRecipes = state.mainState.suggestedRecipe

    console.log("suggested recipes are")
    console.log(suggestedRecipes)

    for (let i = 0; i < suggestedRecipes.length; i++){
        //we are pushing two things, the key is going to the index of the recipe, this is an unique identifier
        //the second thing is the recipe itself
        allSuggested.push(<SuggestedRecipes key = {i} {...suggestedRecipes[i]}/>)
    }

    return (
        <div className={["searchResultsWrapper"]}>
            <ul className={["suggestions"].join(" ")}>
                {allSuggested}
            </ul>
        </div>
    )
}

const SearchResults = (props) => {    
    return (
        <div className={["searchResults"].join(" ")}>
            <SearchItems/>
            <SearchOutput/>
        </div>
    )
}

export { SearchResults }
