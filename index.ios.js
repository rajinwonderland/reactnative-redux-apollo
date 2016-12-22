import React from 'react';
import {
  AppRegistry,
} from 'react-native';

import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import reducer from './app/reducers'
import AppContainer from './app/containers/AppContainer'

const loggerMiddleware = createLogger({ predicate: () => __DEV__ })

function configStore(initState) {
  const enhancer = compose(
    applyMiddleware(thunkMiddleware, loggerMiddleware),
  )
  return createStore(reducer, initState, enhancer)
}

const store = configStore({}) // no initall state...

// this is the root node of the application.
const App = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
)

AppRegistry.registerComponent('reduxApolloBoilerplate', () => App);

export default App
