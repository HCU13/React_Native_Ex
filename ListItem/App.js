import { NavigationContainer } from '@react-navigation/native';
import React, {Component} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import RootNavigator from './src/navigation';

export default function App() {
  return (
    <NavigationContainer>
    <RootNavigator/>
    </NavigationContainer>
  );
}


