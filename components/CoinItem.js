import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

export default class CoinItem extends React.Component {
  render () {
    let date = new Date();
    let now = date.toLocaleString();

    return (
      <View>
        <View style={styles.container}>
          <Image
            style={{width: 50, height: 50, marginLeft: 5, marginRight: 5}}
            source={{uri: this.props.iconUri}}
          />
          <View style={{flex: 4}}>
            <Text style={{fontSize: 15}}>{this.props.name || 'Name'}</Text>
            <Text style={styles.volume}>{'Vol: ' + (this.props.volume || 0)}</Text>
          </View>
          <Text style={styles.price}>{'$' + (this.props.price || 0)}</Text>
          <Text style={{fontSize: 18, flex: 1}}>{'#' + (this.props.rank || 'Rank')}</Text>
        </View>
        <View style={{backgroundColor: '#dcfaff', alignItems: 'stretch', height: 2}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 80,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    color: 'black',
    fontSize: 13,
  },
  volume: {
    fontSize: 10,
    color: '#AAAAAA',
  },
  price: {
    fontSize: 15,
    color: 'black',
    flex: 5,
  }
});