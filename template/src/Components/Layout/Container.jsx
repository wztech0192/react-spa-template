import React, { Component } from 'react';
import RouterView from '../RouterView';
import { Route } from 'react-router-dom';

class Container extends Component {
  render() {
    return (
      <div className="container">
        <Route render={props => <RouterView location={props.location} />} />
      </div>
    );
  }
}

export default Container;
