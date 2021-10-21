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
        const state = useSelector((state) => state.mainState);
        const dispatch = useDispatch();
    const addIngredientHelper = () => {
        const {addIngredient, removeIngredient} = bindActionCreators(allActions, dispatch);
    
        let textBox = document.getElementById("t1");
        let ingredientsToBeAdded = textBox.value;
        addIngredient(ingredientsToBeAdded);
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