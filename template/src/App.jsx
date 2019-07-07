import React, { Component } from 'react';
import Header from './Components/Layout/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import Container from './Components/Layout/Container';

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Container />
      </Router>
    );
  }
}

export default App;
