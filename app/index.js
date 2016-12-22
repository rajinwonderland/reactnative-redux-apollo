import React from 'react'
import {
  AppRegistry,
} from 'react-native'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import { ApolloProvider } from 'react-apollo'

import AppContainer from './containers/AppContainer'
import reducer from './reducers'
import { client } from './apollo'

const loggerMiddleware = createLogger({ predicate: () => __DEV__ })

function configStore(initState) {
  const enhancer = compose(
    applyMiddleware(thunkMiddleware, loggerMiddleware),
  )
  return createStore(reducer, initState, enhancer)
}

const store = configStore({})

const App = () => (
  <ApolloProvider store={store} client={client} >
    <AppContainer />
  </ApolloProvider>
)

AppRegistry.registerComponent('reduxApolloBoilerplate', () => App)

export default App;
