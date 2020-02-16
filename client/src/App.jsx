import React from 'react';
import './App.css';
import AboutUs from "./components/AboutUs";

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
    );
  }
}

export default App;
