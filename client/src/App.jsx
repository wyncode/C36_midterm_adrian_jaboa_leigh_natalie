import React from 'react';
import Cards from './components/Cards';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
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

      <Cards />
    
    );
  }
}

export default App;
