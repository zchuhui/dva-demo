import React from 'react';
import { Router, Route } from 'dva/router';

import IndexPage from './routes/IndexPage';
import Users from "./routes/Users.js";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} /> 
      <Route path="/users" component={Users} />
      <Route path="/1" component={require('./routes/menu-1.js')} />
      <Route path="/2" component={require('./routes/menu-2.js')} />
    </Router>
  ); 
};

export default RouterConfig
