import React, {Component} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import Details from '../components/Details';
import restaurants from '../../assets/restaurants.json'
import DetailsScreen from '../Screens/DetailsScreen';

export default function HomeScreen() {
  return (
    
    <View style={styles.container}>
      <FlatList
        data={restaurants}
        renderItem={({item}) => <Details restaurant={item} />}
      />
    </View>
    
  );
}

const styles = StyleSheet.create({

});
