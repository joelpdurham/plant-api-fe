import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import store from './store';
import { AuthProvider } from './hooks/auth';

render(
  <Provider store={store}>
    <AuthProvider>
      <App style={{ backgroundColor: '#f7d4d6' }}/>
    </AuthProvider>
  </Provider>,
  document.getElementById('root')

);
