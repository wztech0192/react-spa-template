import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

class RouterView extends Component {
  shouldComponentUpdate({ location }) {
    if (location.pathname === this.props.location.pathname) {
      return false;
    }
    return true;
  }

  render() {
    const { location } = this.props;
    return (
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="page" timeout={200}>
          <Switch location={location}>
            <Route exact path="/" component={Home} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

export default RouterView;
