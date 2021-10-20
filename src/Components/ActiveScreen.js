import react, { Component } from "react";
import { SearchBar } from "./SearchBar";
import { SearchResults } from "./SearchResult";

const ActiveScreen = (props) => {
    return (
        <div className={["activeScreen"].join(" ")}>
            <SearchBar/>
            <SearchResults/>
        </div>
    )
}

export default ActiveScreen;