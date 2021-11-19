import react, { Component, useState } from "react";
import image from "./image.jpg"
import { RecipeDetails } from "./RecipeDetails";
import { SearchItems } from "./SearchItems";
import { useSelector } from "react-redux";
import _uniqueId from 'lodash/uniqueId';


const SuggestedRecipes = (props) => {
    const [id] = useState(_uniqueId("r"));
    return (
            <li className = {["singleSuggestion"].join(" ")} id={id}>
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
    const state = useSelector((state) => state);
    let suggestedRecipes = (state.mainState.suggestedRecipe)
    // console.log(suggestedRecipes)
    
    let allSuggested = [];
    if (suggestedRecipes == undefined){
        suggestedRecipes = {};
    }
    for (let i = 0; i < suggestedRecipes.length; i++){
        allSuggested.push(<SuggestedRecipes key = {i} {...suggestedRecipes[i]}/>)
    }

    return (
        <div className={["searchResultsWrapper"]}>
            <ul className={["suggestions"].join(" ")}>
                {allSuggested}
                {/* <SuggestedRecipes recipeName = {props.recipeName} timeTaken = {props.timeTaken} difficulty = {props.difficulty}
                 rating = {props.rating} tasteProfile = {props.tasteProfile} /> */}
                {/* <SuggestedRecipes recipeName = {props.recipeName} timeTaken = {props.timeTaken} difficulty = {props.difficulty}
                 rating = {props.rating} tasteProfile = {props.tasteProfile} />
                <SuggestedRecipes recipeName = {props.recipeName} timeTaken = {props.timeTaken} difficulty = {props.difficulty}
                 rating = {props.rating} tasteProfile = {props.tasteProfile} />
                <SuggestedRecipes recipeName = {props.recipeName} timeTaken = {props.timeTaken} difficulty = {props.difficulty}
                 rating = {props.rating} tasteProfile = {props.tasteProfile} /> */}
            </ul>
        </div>
    )
}

const SearchResults = (props) => {    
    return (
        <div className={["searchResults"].join(" ")}>
            <SearchItems/>
            <SearchOutput/>
            {/* {allSuggested} */}
        </div>
    )
}

export { SearchResults }
