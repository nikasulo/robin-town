import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from '../containers/navigation/Navigation.container';
import Home from '../containers/home/Home.container';

const App = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
    </Router>  
  )
};

export default App;