import { combineReducers } from 'redux'
import { client          } from '../apollo'
import * as recipesReducer from './recipes'

export default combineReducers({
  ...recipesReducer,
  apollo: client.reducer(),
})
