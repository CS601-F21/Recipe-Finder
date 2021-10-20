import react, { Component } from "react";
import image from "./image.jpg"

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
                <div className={["recipeInfoContainer"].join(" ")}>
                    <div className={["recipeNameContainer"].join(" ")}>
                        {props.recipeName}
                    </div>
                    <div className={["recipeDetailsContainer"].join(" ")}>
                        <div className={["recipeTimeTake", "recipeInfo"].join(" ")}>
                            <div className={["heading"].join(" ")}>
                                Cooking Time :
                            </div>
                            <div className={["timeTaken", "info"].join(" ")}>
                            {props.timeTaken}
                            </div>
                        </div>
                        <div className={["recipeDifficulty", "recipeInfo"].join(" ")}>
                            <div className={["heading"].join(" ")}>
                                Difficulty :
                            </div>
                            <div className={["difficulty", "info"].join(" ")}>
                                {props.difficulty}
                            </div>
                        </div>
                        <div className={["recipeRating", "recipeInfo"].join(" ")}>
                            <div className={["heading"].join(" ")}>
                                Rating :
                            </div>
                            <div className={["rating", "info"].join(" ")}>
                                {props.rating}
                            </div>
                        </div>
                        <div className={["recipeTasteProfile", "recipeInfo"].join(" ")}>
                            <div className={["heading"].join(" ")}>
                                Taste Profile:
                            </div>
                            <div className={["tasteProfile", "info"].join(" ")}>
                                {props.tasteProfile}
                            </div>
                        </div>
                    </div>
                </div>

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
