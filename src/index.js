import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './containers/App';
import { configureStore } from './store/configureStore';

// require('dotenv');
// if (process.env.NODE_ENV === 'development') {
//   require('dotenv').config({ path: '.env.local' }); // eslint-disable-line
//   console.log(process.env);
// }

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
