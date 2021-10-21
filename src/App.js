/*
  reference on how to use redux https://www.youtube.com/watch?v=9jULHSe41ls
*/
import './App.css';
import React, { Component } from "react";
import ActiveScreen from './Components/ActiveScreen';

// import { SearchBar } from './Components/SearchBar'
// import { SearchResults } from './Components/SearchResult'


class App extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
        <ActiveScreen/>
    )}
}

export default App;
