import React from 'react';
import Cards from './components/Cards';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

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
      // <div id="demo">
      //   <h1>Hello from client/src/App.js</h1>
      //   <h1>{this.state.serverMessage}</h1>
      // </div>
    );
  }
}

export default App;
