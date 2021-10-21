import react, { Component, useState } from "react";
import image from "./image.jpg"
import { RecipeDetails } from "./RecipeDetails";
import { SearchItems } from "./SearchItems";


const SuggestedRecipes = (props) => {
    return (
            <li className = {["singleSuggestion"].join(" ")}>
                <div className={["foodImageContainer"].join(" ")}>
                    <img className={['foodImage'].join(" ")} src={image}/>
                </div>
                <RecipeDetails recipeName = {props.recipeName} timeTaken = {props.timeTaken}
                    difficulty = {props.difficulty} rating = {props.rating}
                    tasteProfile = {props.tasteProfile} />
            </li>
    )
}

const SearchOutput = (props) => {
    return (
        <div className={["searchResultsWrapper"]}>
            <ul className={["suggestions"].join(" ")}>
                <SuggestedRecipes recipeName = {props.recipeName} timeTaken = {props.timeTaken} difficulty = {props.difficulty}
                 rating = {props.rating} tasteProfile = {props.tasteProfile} />
                <SuggestedRecipes recipeName = {props.recipeName} timeTaken = {props.timeTaken} difficulty = {props.difficulty}
                 rating = {props.rating} tasteProfile = {props.tasteProfile} />
                <SuggestedRecipes recipeName = {props.recipeName} timeTaken = {props.timeTaken} difficulty = {props.difficulty}
                 rating = {props.rating} tasteProfile = {props.tasteProfile} />
                <SuggestedRecipes recipeName = {props.recipeName} timeTaken = {props.timeTaken} difficulty = {props.difficulty}
                 rating = {props.rating} tasteProfile = {props.tasteProfile} />
            </ul>
        </div>
    )
}

const SearchResults = (props) => {
    let recipeInfo = {}
    recipeInfo.recipeName = "Recipe Name";
    recipeInfo.timeTaken = "20min";
    recipeInfo.difficulty = "3/5";
    recipeInfo.rating = "5/5";
    recipeInfo.tasteProfile = "Sweet"

    
    return (
        <div className={["searchResults"].join(" ")}>
            <SearchItems/>
            <SearchOutput recipeName = {recipeInfo.recipeName} timeTaken = {recipeInfo.timeTaken} difficulty = {recipeInfo.difficulty}
                 rating = {recipeInfo.rating} tasteProfile = {recipeInfo.tasteProfile}/>
        </div>
    )
}

export { SearchResults }
