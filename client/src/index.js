import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./store/reducers";
import { composeWithDevTools } from "redux-devtools-extension";

import createSagaMiddleware from "redux-saga";
import rootSaga from "./store/saga/rootSaga";

import Router from "./Router";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// mount it on the Store
const store = createStore(reducers, composeWithDevTools(applyMiddleware(sagaMiddleware)));
// then run the saga
sagaMiddleware.run(rootSaga);

// render the application
ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById("root")
);
