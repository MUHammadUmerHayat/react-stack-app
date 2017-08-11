import React from 'react';
import { IndexRoute, Route, Router, browserHistory } from 'react-router';

import FormPage from '../views/Pages/FormPage';
import LoginPage from '../views/Pages/LoginPage';
import DashboardPage from '../views/Pages/DashboardPage';
import TablePage from '../views/Pages/TablePage';
import NotFoundPage from '../views/Pages/NotFoundPage';

import Dashboard from '../views/Layouts/Dashboard';

export default () => (
  <Router history={browserHistory}>
    <Route path="/" component={Dashboard}>
      <IndexRoute component={DashboardPage} />
      <Route path="/dashboard" component={DashboardPage} />
      <Route path="/table" component={TablePage} />
      <Route path="/form" component={FormPage} />
    </Route>
    <Route path="/login" component={LoginPage} />    
    <Route path="*" component={NotFoundPage} />
  </Router>
);
