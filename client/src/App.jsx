import React from 'react';
import Cards from './components/Cards';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import './App.css';

import AboutUs from "./components/AboutUs";

import RandomButton from './components/RandomButton';


class App extends React.Component {
  state = { serverMessage: '' };

  componentDidMount() {
    fetch('/api/demo')
      .then(response => response.json())
      .then(data => this.setState({ serverMessage: data.message }));
  }

  render() {
    return (
     <AboutUs/>
      <>
        <Navigation />
        <Cards />
      </>
    );
  }
}

export default App;
