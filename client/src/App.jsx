import React from 'react';
import GinCards from './components/GinCards';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import './App.css';

import AboutUs from './components/AboutUs';

import RandomButton from './components/RandomButton';
import VodkaCard from './components/VodkaCard';
import Home from './components/Home';

import Search from './components/Search';


// import AboutUs from './components/';


const App = () => (
  <>
  <RandomButton/>

  <BrowserRouter>
    <Navigation />
      <Route exact path="/" component={Home} />
      <Route exact path="/gin" component={GinCards} />
      <Route exact path="/vodka" component={VodkaCard} />

      <Route path="/search/:searchTerm" component={Search} />

      <Route exact path="/About" component={AboutUs}/>

  </BrowserRouter>
  </>
);
export default App;
