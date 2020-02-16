import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Home from './pages/Home'
import Navigation from './components/Navigation'
import About from './pages/About'
import About from './pages/About'
import Catagories from './pages/Contacts'

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation/>
      <Switch>
        <Route exact path = "/" component={Home}/>
        <Route exact path = "/about" component={About}/>
        <Route exact path = "/catagories" component={Catagories}/>
      </Switch>
      </BrowserRouter>
      
    </div>
  );
}
//created by Natalie Lozano 02.15.2020

class App extends React.Component {
  state = { serverMessage: '' };

  componentDidMount() {
    fetch('/api/demo')
      .then(response => response.json())
      .then(data => this.setState({ serverMessage: data.message }));
  }

  render() {
    return (
      <div id="demo">
        <h1>Hello from client/src/App.js</h1>
        <h1>{this.state.serverMessage}</h1>
      </div>
    );
  }
}

export default App;
