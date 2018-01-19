import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './redux/create';
import ApiClient from './helpers/ApiClient';
import {Provider, connect} from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import getRoutes from './routes';

const history = createHistory();

const client = new ApiClient();
const store = createStore(history, client);

ReactDOM.render(
  <Provider store={store} key="provider">
    <Router>
      {getRoutes()}
    </Router>
  </Provider>,
  document.getElementById('root')
);
