import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import './App.css';

import AboutUs from './components/AboutUs';

import RandomButton from './components/RandomButton';
import Home from './components/Home';

import Search from './components/Search';

// import AboutUs from './components/';

const App = () => (
  <>
    <BrowserRouter>
      <Navigation />
      <Route exact path="/" component={Home} />

      <Route path="/search/:searchTerm" component={Search} />

      <Route exact path="/About" component={AboutUs} />
    </BrowserRouter>
  </>
);
export default App;
