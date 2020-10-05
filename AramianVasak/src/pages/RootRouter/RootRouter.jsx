import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../Home';
import Layout from '../../components/Layout';
import Chat from '../Chat';

const RootRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/main" component={Chat} />
        <Route
          render={() => (
            <div>
              <h1>I am 404</h1>
            </div>
          )}
        />
      </Switch>
    </Router>
  );
};

export default RootRouter;
