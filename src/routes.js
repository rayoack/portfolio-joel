import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import './global.css';

import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function Routes() {

  return (
    <Route render={({location}) => (
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          classNames="SlideIn"
          timeout={{ enter: 5000, exit: 3000 }}>
          <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/skills" component={Skills} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/Contact" component={Contact} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    )} />
  )
}

export default Routes;