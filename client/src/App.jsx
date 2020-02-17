import React from 'react';
import GinCards from './components/GinCards';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import './App.css';
import RandomButton from './components/RandomButton';
import VodkaCard from './components/VodkaCard';
import Home from './components/Home';
import AboutUs from './components/';

const App = () => (
  <BrowserRouter>
    <Navigation />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/gin" component={GinCards} />
      <Route path="/vodka" component={VodkaCard} />
    </Switch>
  </BrowserRouter>
);

export default App;
