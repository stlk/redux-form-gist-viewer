import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './redux/create';
import ApiClient from './helpers/ApiClient';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import Layout from './components/Layout';

import getRoutes from './routes';

const client = new ApiClient();
const store = createStore(client);

ReactDOM.render(
  <Provider store={store} key="provider">
    <Router>
      <Layout>
        {getRoutes()}
      </Layout>
    </Router>
  </Provider>,
  document.getElementById('root')
);
