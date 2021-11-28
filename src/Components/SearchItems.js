import react , { Components, useState } from "react"
import { useSelector } from "react-redux"
import _uniqueId from 'lodash/uniqueId';
import { useDispatch } from "react-redux";
import { allActions } from './State/Action-Creators/allActions'
import { bindActionCreators } from 'redux';



const ItemButton = (props) => {
    const state = useSelector((state) => state);
    const [id] = useState(_uniqueId("i")); 

    const dispatch = useDispatch();
    const removeEl = (e) => {
        let parentDiv = e.target.parentNode.parentNode;
        let ingredientToBeRemoved = parentDiv.querySelector(".itemNameTag").innerText;


        /**
         * We do not have to remove the element over here, as when we update the state, the element gets 
         * deleted on its own
         */
        // document.getElementById(elId).remove();

        const {removeIngredient} = bindActionCreators(allActions, dispatch);
        removeIngredient({ingredientToBeRemoved});
    }

    return (
        <p className = {["itemNameTag"].join(" ")} onClick = {removeEl}>{props.itemName}</p>                  
    )
}

const PInsertionItem = (props) => {
    return (
        <p className = {["itemName", "removeItemButton"]}>props.name</p>
    )
}

const SearchItems = (props) => {
    const state = useSelector((state) => state);
    let ingredients = state.mainState.ingredients;

    let buttonList = [];

    if (ingredients == undefined){
        ingredients = new Set();
    }

    ingredients.forEach(i => {
        buttonList.push(<ItemButton itemName = {i}/>)
    })

    // console.log("ingredient is ");
    // console.log(buttonList);


    return (
        <div className = "searchItemContainer">
            <div className = {["searchItemList"].join(" ")}>
                {buttonList}
            </div>
        </div>
    )
}

export { SearchItems }