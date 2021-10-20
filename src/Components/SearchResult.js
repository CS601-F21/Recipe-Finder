import react, { Component } from "react";
import image from "./image.jpg"
import { RecipeDetails } from "./RecipeDetails";

const ItemButton = (props) => {
    return (
        <li className={["item"]}>
            <div className={["itemBorder"]}>
                <div className={["removeItemButton", "button"].join(" ")}>
                    x
                </div>
                <div className={["itemName"].join(" ")}>
                    {props.itemName}
                </div>
            </div>
        </li>
    )
}

const SearchItems = (props) => {
    return (
        <ul className = {["searchItemList"].join(" ")}>
            <ItemButton itemName = "cauliflower"/>
            <ItemButton itemName = "item2"/>
            <ItemButton itemName = "item3"/>
            <ItemButton itemName = "item4"/>
        </ul>
    )
}

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
                <SuggestedRecipes recipeName = "recipe name" timeTaken = "20mins" difficulty = "3/5" rating = "5/5" tasteProfile = "Sweet" />
                <SuggestedRecipes recipeName = "recipe name" timeTaken = "20mins" difficulty = "3/5" rating = "5/5" tasteProfile = "Sweet" />
                <SuggestedRecipes recipeName = "recipe name" timeTaken = "20mins" difficulty = "3/5" rating = "5/5" tasteProfile = "Sweet" />
                <SuggestedRecipes recipeName = "recipe name" timeTaken = "20mins" difficulty = "3/5" rating = "5/5" tasteProfile = "Sweet" />
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

export {SearchResults}
