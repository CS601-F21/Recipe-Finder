import react , { Components, useState } from "react"
import { useSelector } from "react-redux"
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
    const state = useSelector((state) => state.mainState);
    let ingredient = state.ingredients;

    let buttonList = [];

    ingredient.forEach(i => {
        buttonList.push(<ItemButton itemName = {i}/>)
    })


    return (
        <ul className = {["searchItemList"].join(" ")}>
            buttonList.join(" ");
        </ul>
    )
}

export { SearchItems }