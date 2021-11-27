import React, { Component, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from 'redux';
import { allActions } from './State/Action-Creators/allActions'


//is the actual textbox where the user will input the items they have
const TextBox = (props) => {
    return <input className="textBox" id="t1"/>
}

const AddButton = (props) => {
        //if we have different states in the future, we can simply return state.stateName
        //first we get the state
        const state = useSelector((state) => state);
        const dispatch = useDispatch();
        // const actions = bindActionCreators(allActions, dispatch);
        // console.log(actions);
        const addIngredientHelper = () => {
            const {addIngredient, getSuggestions} = bindActionCreators(allActions, dispatch);
        
            let textBox = document.getElementById("t1");
            let ingredientsToBeAdded = textBox.value;
            // console.log("Going to add ingredient " + ingredientsToBeAdded);
            addIngredient({ingredientsToBeAdded});
            getSuggestions();
            // console.log("sent ingredient to addIngredient method");

        } 

    return <button className={["button", "addButton"].join(' ')} onClick = {addIngredientHelper} >Add</button>
}

const SearchBar = (props) => {
    return(
        <div className="searchBar">
            <TextBox/>
            <div className="buttons">
                <AddButton/>
            </div>
        </div>
    ) 
}
export { SearchBar }