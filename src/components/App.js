import React from 'react';
import Navigation from './navigation/Navigation.component';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Hero from './hero/Hero.component';

export const App = () => {
  return (
    <Router>
      <Switch>
        <Navigation />
        <Hero />
      </Switch>
    </Router>
  )
};
