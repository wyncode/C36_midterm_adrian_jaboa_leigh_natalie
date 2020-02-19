import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import './App.css';
import AboutUs from './components/AboutUs';
import RandomButton from './components/RandomButton';
import Home from './components/Home';
import Search from './components/Search';

const App = () => (
  <>

  <BrowserRouter>
    <Navigation />
      <Route exact path="/" component={Home} />
      <Route exact path="/About" component={AboutUs}/>
      <Route exact path="/randombutton"component={RandomButton}/>
      <Route path="/search/:searchTerm" component={Search} />


  </BrowserRouter>
  </>
);
export default App;
