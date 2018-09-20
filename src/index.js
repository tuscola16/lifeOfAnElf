import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import App from './App';
import { BrowserRouter } from 'react-router-dom'

const store = configureStore();

render(
  <BrowserRouter>
    <Provider store={store}>
        <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);