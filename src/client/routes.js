import React from 'react';
import { Route } from 'react-router';
import App from '../components/App';
import TodoPage from '../components/todos/TodoPage'

export default (
  <Route path="/" component={App}>
    <Route path="todos" component={TodoPage} />
  </Route>
);

