import React, { Component } from "react";

//is the actual textbox where the user will input the items they have
const TextBox = (props) => {
    return <input className="textBox" />
}

const AddButton = (props) => {
    return <button className={["button", "addButton"].join(' ')}>Add</button>
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