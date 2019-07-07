import React, { Component } from 'react';
import RouterView from '../RouterView';
import { Route } from 'react-router-dom';

class Container extends Component {
  render() {
    return <Route render={props => <RouterView location={props.location} />} />;
  }
}

export default Container;
