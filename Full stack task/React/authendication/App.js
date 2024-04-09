
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import LoginComponent from './LoginComponent';
import HomeComponent from './HomeComponent';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginComponent} />
        <ProtectedRoute path="/" component={HomeComponent} />
      </Switch>
    </Router>
  );
};

export default App;
