/*
  reference on how to use redux https://www.youtube.com/watch?v=9jULHSe41ls
*/
import './App.css';
import React, { Component } from "react";
import HomePage from './Components/HomePage';
import RecipePage from './Components/RecipePage';
import { Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path = "/" element = {<HomePage/>}/>
      <Route path = "/recipe" element = {<RecipePage/>}/>
    </Routes>
  )
}

export default App;
