import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

//import 'bulma/css/bulma.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Hero from './components/Hero';
import Scores from './components/Scores';
import Articles from './components/Articles';
import Highlight from './components/Highlight';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero />
      
      <Articles />
      <Highlight />
    </div>
  );
}

export default App;
