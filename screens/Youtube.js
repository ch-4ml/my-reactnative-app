import * as React from 'react';
import { WebView } from 'react-native-webview';

export default class Youtube extends React.Component {
  render() {
    return (
      <WebView
        source={{ uri: this.props.navigation.getParam('uri') }}
      />
    )
  }
}