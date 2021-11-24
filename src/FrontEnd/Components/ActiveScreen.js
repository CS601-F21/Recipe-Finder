import react, { Component, useState } from "react";
import { SearchBar } from "./SearchBar";
import { SearchResults } from "./SearchResult";
import { useSelector } from "react-redux";

const ActiveScreen = (props) => {
    return (
        <div className={["activeScreen"].join(" ")}>
            <SearchBar />
            <SearchResults/>
        </div>
    )
}

export default ActiveScreen;