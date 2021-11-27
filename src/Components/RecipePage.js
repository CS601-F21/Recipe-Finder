import react, { Component, useState } from "react";
import { RecipeInstructionPage } from "./RecipeInstructionPage"
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
    return (
        <div className={["activeScreen"].join(" ")}>
            <RecipeInstructionPage recipeInfo = {recipeInfo} />
        </div>
    )
}

export default RecipePage;