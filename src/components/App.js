import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from '../containers/navigation/Navigation.container';
import Home from '../containers/home/Home.container';

const App = ({ currentLocation }) => {
  return (
    <Router>
      <Navigation currentLocation={currentLocation}/>
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
    </Router>  
  )
};

export default App;