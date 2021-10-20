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
                    {props.recipeName}
                </div>

            </li>
    )
}

const SearchOutput = (props) => {
    return (
        <div className={["searchResultsWrapper"]}>
            <ul className={["suggestions"].join(" ")}>
                <SuggestedRecipes recipeName = "Paneer Butter Masala"/>
                <SuggestedRecipes recipeName = "Paneer Butter Masala"/>
                <SuggestedRecipes recipeName = "Paneer Butter Masala"/>
                <SuggestedRecipes recipeName = "Paneer Butter Masala"/>
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
