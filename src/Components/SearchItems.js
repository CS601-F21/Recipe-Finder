import react , { Components, useState } from "react"
import { useSelector } from "react-redux"
import _uniqueId from 'lodash/uniqueId';
import { useDispatch } from "react-redux";
import { allActions } from './State/Action-Creators/allActions'
import { bindActionCreators } from 'redux';



const ItemButton = (props) => {
    const state = useSelector((state) => state);
    const [id] = useState(_uniqueId("i"));
    // let id = state.ingredientId;
    // const dispatch = useDispatch();
    //     const removeIngredientHelper = () => {
    //         const {addIngredient, removeIngredient} = bindActionCreators(allActions, dispatch);
    //         let ingredientToBeRemoved = 
    //         removeIngredient({ingredientsToBeAdded});
    //     } 

    const dispatch = useDispatch();
    const removeEl = (e) => {
        let parentDiv = e.target.parentNode.parentNode;
        let elId = parentDiv.id;
        let ingredientToBeRemoved = parentDiv.querySelector(".itemName").innerText;
        document.getElementById(elId).remove();

        const {addIngredient, removeIngredient} = bindActionCreators(allActions, dispatch);
        removeIngredient({ingredientToBeRemoved});
    }


    return (
        <li className={["item"]} id={id}>
            <div className={["itemBorder"]}>
                <div className={["removeItemButton", "button"].join(" ")} onClick = {removeEl}>
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
        <ul className = {["searchItemList"].join(" ")}>
            {buttonList}
        </ul>
    )
}

export { SearchItems }