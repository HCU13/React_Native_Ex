
import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  View,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';


//resetleme denenmedi
/*
const resetState = () => {
  qr('');
};*/

export default class App extends Component {
  
  state = {
    qr: ''
  }

  onSuccess = e => {
    this.setState({qr : e.data})
  };
  

  render() {
    return (
      <QRCodeScanner
      onRead={this.onSuccess}
      topContent={
        <Text style={styles.centerText}>
          <Text style={styles.textBold}>QR Code Scanner</Text>
        </Text>
      }
      bottomContent={
        <TouchableOpacity /*onPress={resetState}   resetleme denenmedi */ style={styles.buttonTouchable}>
          <Text style={styles.buttonText}>{this.state.qr}</Text>
        </TouchableOpacity>
      }
    />
    )
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777'
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)'
  },
  buttonTouchable: {
    padding: 16
  }
});