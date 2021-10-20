import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import { SearchBar } from './Components/SearchBar'
import { SearchResults } from './Components/SearchResult'
import ActiveScreen from './Components/ActiveScreen';


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
