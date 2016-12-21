import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ActionCreators } from '../actions'
import { bindActionCreators } from 'redux'
import {
  View,
  Text,
  TouchableHighlight
} from 'react-native'

class AppContainer extends Component {

  incrementRecipeCount() {
    this.props.addRecipe();
  }

  render() {
    return (
      <View>
        <Text style = {{marginTop: 20}}>
          I'm App Container Recipe Count: { this.props.recipeCount }
        </Text>
        <TouchableHighlight onPress = {() => this.incrementRecipeCount() }>
          <Text>Add Recipe</Text>
        </TouchableHighlight>
      </View>
    )
  }

}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    recipeCount: state.recipeCount
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
