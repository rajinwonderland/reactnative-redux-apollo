import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  View,
  Text,
  TouchableHighlight,
} from 'react-native'
import ActionCreators from '../actions'

class AppContainer extends Component {

  incrementRecipeCount() {
    this.props.addRecipe()
  }

  render() {
    return (
      <View>
        <Text style={{ marginTop: 20 }}>
          Im App Container Recipe Count: { this.props.recipeCount }
        </Text>
        <TouchableHighlight onPress={() => this.incrementRecipeCount()}>
          <Text>Add Recipe</Text>
        </TouchableHighlight>
      </View>
    )
  }

}

AppContainer.propTypes = {
  addRecipe: PropTypes.func,
  recipeCount: PropTypes.number.isRequired,
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    recipeCount: state.recipeCount,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
