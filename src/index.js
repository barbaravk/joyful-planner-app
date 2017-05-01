import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import { Router, browserHistory } from "react-router";
import routes from "./client/routes";
import { loadTodos } from './actions/todoActions'
// import './styles/styles.css'; //Webpack can import CSS files too!
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/toastr/build/toastr.min.css';

const store = configureStore();
store.dispatch(loadTodos());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,

  document.getElementById('app')
);


// const router = <Router history={browserHistory} routes={routes}/>;
//
// render(router, document.getElementById('app'));
