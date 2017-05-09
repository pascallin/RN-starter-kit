import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import createSagaMiddleware from 'redux-saga'

import AppReducer from './reducer';
import AppWithNavigationState from './navigator/AppNavigator';

const sagaMiddleware = createSagaMiddleware()
import rootSaga from './sagas'
const store = createStore(AppReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

export default class ReduxExampleApp extends React.Component {
  store = store
  render() {
    return (
      <Provider store={this.store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}