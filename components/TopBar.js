import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

export default class TopBar extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Left</Text>
        <View>
          <Text style={[styles.text, {fontSize: 20}]}>{this.props.title || 'TITLE'}</Text>
          <Text style={[styles.text, {fontSize: 10, textAlign: 'center'}]}>{this.props.refreshDate || '-'}</Text>
        </View>
        <Text style={styles.text}>Right</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    height: 52,
    flexDirection: 'row',
    backgroundColor: '#a0f0ff',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
  },
  text: {
    color: '#009fff',
  }
});