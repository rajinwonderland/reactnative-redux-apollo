import React from 'react'
import {
  View,
  Text,
} from 'react-native'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Button, List, ListItem } from 'react-native-elements'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import ActionCreators from '../actions'

const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President',
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman',
  },
]

const ExamplePage = () => (
  <View style={{ marginTop: 20 }}>
    <Button
      raised
      icon={{ name: 'cached' }}
      title="RAISED WITH ICON"
    />

    <List containerStyle={{ marginBottom: 20 }}>
      {
        list.map((l, i) => (
          <ListItem
            roundAvatar
            avatar={{ uri: l.avatar_url }}
            key={i}
            title={l.name}
          />
        ))
      }
    </List>

  </View>
)

const AnotherExamplePage = () => (
  <View style={{ marginTop: 20 }}>
    <Text>This is another page.</Text>
  </View>
)

const AExamplePage = () => (
  <View style={{ marginTop: 20 }}>
    <Text>Another Page</Text>
  </View>
)

const BExamplePage = () => (
  <View style={{ marginTop: 20 }}>
    <Text>Another Page</Text>
  </View>
)

const CExamplePage = () => (
  <View style={{ marginTop: 20 }}>
    <Text>Another Page</Text>
  </View>
)

const AppContainer = () => (
  <ScrollableTabView
    borderColor="#333"
    backgroundColor="#f00"
    tabBarPosition="bottom"
    prerenderingSiblingsNumber={1}
  >
    <ExamplePage tabLabel="A" />
    <AnotherExamplePage tabLabel="B" />
    <AExamplePage tabLabel="C" />
    <BExamplePage tabLabel="D" />
    <CExamplePage tabLabel="F" />
  </ScrollableTabView>
)

const MyQuery = gql`
  query MyAuthorQuery {
    author {
      name
      posts {
        title
        author {
          name
          posts {
            title
          }
        }
      }
    }
  }
`

const AppContainerWithData = graphql(MyQuery)(AppContainer)

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    recipeCount: state.recipeCount,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainerWithData)
