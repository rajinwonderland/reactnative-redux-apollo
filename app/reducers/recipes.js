import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

export const searchedRecipes = createReducer({}, {

})

export const recipeCount = createReducer(0, {
  [types.ADD_RECIPE](state) {
    return state + 1;
  },
});
