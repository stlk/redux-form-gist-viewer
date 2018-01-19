import { createStore as _createStore, applyMiddleware, compose } from 'redux';
import createMiddleware from './middleware/clientMiddleware';
import thunk from 'redux-thunk';

export default function createStore(client) {

  const middleware = [createMiddleware(client), thunk];

  const reducer = require('./modules/reducer').default;
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = _createStore(reducer, composeEnhancers(
    applyMiddleware(...middleware),
    // other store enhancers if any
  ));

  if (process.env.NODE_ENV === 'production' && module.hot) {
    module.hot.accept('./modules/reducer', () => {
      store.replaceReducer(require('./modules/reducer'));
    });
  }

  return store;
}
