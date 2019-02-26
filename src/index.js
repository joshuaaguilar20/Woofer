import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';


//debugger so you can see whats happening with the state. 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers,  composeEnhancers(applyMiddleware(reduxThunk)))



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);


