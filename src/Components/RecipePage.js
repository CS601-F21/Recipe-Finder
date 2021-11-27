import react, { Component, useState } from "react";
import { SearchBar } from "./SearchBar";
import { SearchResults } from "./SearchResult";
import { useSelector } from "react-redux";
import { useParams, useLocation } from "react-router";


const RecipePage = (props) => {
    /**
     * The useLocation hook lets us access the state which has been passed 
     * down from the previous page
     * 
     * recipeInfo will have the following keys :
     *      name,
     *      instructions
     *      ingredients
     *      ingredientQuantity
     *      nutritionValue
     *      fullMatch
     *      missingIngredients
     */
    const location = useLocation();
    const recipeInfo = location.state;
    console.log(recipeInfo)
    return (
        <div className={["activeScreen"].join(" ")}>
            
        </div>
    )
}

export default RecipePage;