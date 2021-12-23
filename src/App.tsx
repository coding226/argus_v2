import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Header from './components/header/Header';
import Simulation from './components/simulation/Simulation';
import Sustainment from './components/sustainment/Sustainment';



function App() {
  return (
    <div className="app container">
    <Router>
      <Header />
      <Switch>
        <Route path="/simulation">
          <Simulation />
        </Route>
        <Route path="/sustainment">
          <Sustainment />
        </Route>
        <Route path="/">
          <Simulation />
        </Route>
      </Switch>
    </Router>

    </div>
  );
}

export default App;
