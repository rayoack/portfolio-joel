import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';

import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function Routes() {

  return (
    <Switch>
      <CSSTransitionGroup
          transitionName="SlideIn"
          transitionEnterTimeout={5000}
          transitionLeaveTimeout={3000}>

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/skills" component={Skills} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/Contact" component={Contact} />
      </CSSTransitionGroup>
    </Switch>
  )
}

export default Routes;