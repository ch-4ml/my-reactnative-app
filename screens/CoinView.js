import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import CoinItem from '../components/CoinItem';
import { getCoinUri } from '../libs/Constants';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import { SampleData } from '../assets/SampleData.js';

export default class CoinView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coinDatas: [],
      isLoading: false,
    };
  }

  _getCoinDatas = async(limit) => {
    this.setState({
      isLoading: true,
    });

    try {
      const response = await fetch(`https://api.coinmarketcap.com/v1/ticker/?limit=${limit}`);
      const responseJson = await response.json();

      const date = new Date();
      const now = date.toLocaleString();

      if(this.props.refreshDate != null) {
        this.props.refreshDate(now);
      }

      await this.setState({
        coinDatas: responseJson,
        isLoading: false,
      });
    } catch(error) {
      console.error('_getCoinDatas', error);
    }
  }

  componentDidMount() {
    this._getCoinDatas(20);

    // setInterval(() => {
    //   this._getCoinDatas(20);
    // }, 60000);
  }

  _renderItem = ({item}) => {
    const { rank, name, price_usd, market_cap_usd, last_updated } = item; // Destructuring
    return(
      <TouchableOpacity
        onPress={() => this.props.navigation && this.props.navigation.push('Youtube', {title: name, uri: getCoinUri(name).youtube})}>
        <CoinItem
          rank = {rank}
          name = {name}
          price = {price_usd}
          volume = {market_cap_usd}
          iconUri = {getCoinUri(name).icon}
        />
      </TouchableOpacity>
    );
  }

  render() {
    return(
      <FlatList
        data={this.state.coinDatas}
        keyExtractor={(item) => item.name}
        renderItem={this._renderItem}
        refreshing={this.state.isLoading}
        onRefresh={this._getCoinDatas}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  line: {
    backgroundColor: 'skyblue',
    width: '100%', 
    height: 5,
  }
});