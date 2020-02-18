import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import store from './store';

render(
  <Provider store={store}>
    <App style={{ backgroundColor: '#f7d4d6' }}/>
  </Provider>,
  document.getElementById('root')

);
