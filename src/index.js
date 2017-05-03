import "babel-polyfill";
import React from "react";
import {render} from "react-dom";
import configureStore from "./store/configureStore";
import {Provider} from "react-redux";
import {Router, browserHistory} from "react-router";
import createRoutes from "./routes/index";

const store = configureStore();
const routes = createRoutes(store);

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,

  document.getElementById('app')
);
