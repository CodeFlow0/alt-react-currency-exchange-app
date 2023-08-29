import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from './Layout';
import Home from './Home';
import CurrencyConverter from './CurrencyConverter';

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path='/currencyconverter' component={CurrencyConverter} />
        <Route render={() => <h1>404 Not found</h1>} />
      </Switch>
    </Router>
  );
}

export default App;
