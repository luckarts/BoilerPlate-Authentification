import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));


ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>,
  </BrowserRouter>,
  document.getElementById('root')
);
