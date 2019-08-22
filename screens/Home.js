import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import CoinView from './CoinView';
import TopBar from '../components/TopBar';
/*
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}
*/


export default class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  _setRefreshDate = (date) => {
    console.log('Updated: ' + date);
    if (this.props.navigation) {
      this.props.navigation.setParams({refreshDate: date});
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <CoinView 
          navigation={this.props.navigation}
          refreshDate={this._setRefreshDate}
          style={styles.coinView} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  statusBar: {
    backgroundColor: '#000000',
    height: Constants.statusBarHeight,
    width: '100%',
  },
  coinView: {
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  }
});
