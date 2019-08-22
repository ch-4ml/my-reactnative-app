import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import Home from './screens/Home'
import Youtube from './screens/Youtube'

const HeaderTitle = (props) => {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Text style={{ fontSize: 18 }}>{props.title}</Text>
      <Text style={{ fontSize: 13, color: 'gray' }}>{props.subtitle}</Text>
    </View>
  )
}

const MainStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: (
          <HeaderTitle
            title={'Show Me The Coin'}
            subtitle={navigation.getParam('refreshDate', '-')}
          />
        ),
        headerStyle: {
          backgroundColor: 'skyblue',
        }
      }
    }
  },
  Youtube: {
    screen: Youtube,
    navigationOptions: ({navigation}) => {
      return {
        title: navigation.getParam('title', 'YOUTUBE'),
      }
    }
  }
}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: 'skyblue',
    }
  }
  // initialRouteName: 'Home',
})

const AppContainer = createAppContainer(MainStack)

const App = () => {
  return (
    <AppContainer />
  )
}

export default App