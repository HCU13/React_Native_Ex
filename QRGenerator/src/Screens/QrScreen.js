import { StyleSheet, Text, View,Button,AppRegistry } from 'react-native'
import React from 'react'
import QRCode from 'react-native-qrcode-svg';
import Rehber from '../../Source/Rehber.json'
import ScannerScreen from '../Screens/ScannerScreen';

let { Pharmacy } = Rehber;

function QrScreen() {

  state = {
    item : {Pharmacy}
  }

  return (
    <View style={styles.container}>
    <QRCode
      value={JSON.stringify(this.state.item.Pharmacy)}
      size={200}
      bgColor='#000000'
      fgColor='#FFFFFF'/>
     <View style={{marginTop:50}}>
      <Button title='Scanner'onPress={() => navigation.navigate('ScannerScreen')}/>

     </View>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent:'center',
      alignItems:'center'
  },

  input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      margin: 10,
      borderRadius: 20,
      padding: 5,
  }
});

AppRegistry.registerComponent('QrScreen', () => QrScreen);

module.exports = QrScreen;