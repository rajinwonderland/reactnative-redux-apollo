/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware    from 'redux-thunk'
import createLogger       from 'redux-logger'
import reducer            from './app/reducers'
import AppContainer       from './app/containers/AppContainer'
import { client }         from './app/apollo'
import { ApolloProvider } from 'react-apollo'

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ })

function configStore(initState) {
  const enhancer = compose(
    applyMiddleware(thunkMiddleware, loggerMiddleware)
  )
  return createStore(reducer, initState, enhancer)
}

const store = configStore({}) // no initall state...

// this is the root node of the application.
const App = () => (
  <ApolloProvider store = { store } client = { client } >
    <AppContainer />
  </ApolloProvider>
)

AppRegistry.registerComponent('reduxApolloBoilerplate', () => App);

export default App
