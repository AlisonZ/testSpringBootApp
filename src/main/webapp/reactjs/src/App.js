import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';

import NavigationBar from './components/NavigationBar';
import HomePage from './components/HomePage';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <Router >
          <NavigationBar />
         <div> **Test React-Springboot App** </div>

         <Switch>
            <Route path="/" exact component={HomePage}></Route>
            <Route path="/about" exact component={AboutMe}></Route>
         </Switch>

    </Router>
  );
}

export default App;
