import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import QrScreen from './src/Screens/QrScreen';
import ScannerScreen from './src/Screens/ScannerScreen';


export default function App() {
  return (
    <View style={{flex:1}}>
        <ScannerScreen/>
    </View>
  )
};

const styles = StyleSheet.create({
})