import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

//import 'bulma/css/bulma.css';
import Header from './components/Header';
import MainCarousel from './components/MainCarousel';
import MatchSchedule from './components/MatchSchedule';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import ArticleNews from './components/ArticleNews';
import PodCast from './components/PodCast';
import HighlightWeek from './components/HighlightWeek';
import Article from './components/Article';



function App() {
  return (
    <div className="App">
      <Header />
      <MainCarousel />
      <MatchSchedule />
      <Article />
      <PodCast />
      <HighlightWeek />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
