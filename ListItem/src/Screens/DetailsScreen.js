import React, { Component } from 'react'
import { Text, View, Image,StyleSheet } from 'react-native'
import restaurants from '../../assets/restaurants.json';

const restaurant = restaurants[1];


const DetailsScreen = () => {
 
    return (
      <View style={styles.page}>
        <Image source={{uri : restaurant.image}} style={styles.image}/>
        <Text style={styles.title}>{restaurant.name}</Text>
      </View>
    )
  }
  const styles = StyleSheet.create({
    image:{
      width:'100%',
      aspectRatio: 5/3,
      borderRadius:50,
      marginTop:10,
    },
    page:{
      flex:1,
    },
    title:{
      fontSize:20,
      fontWeight:'600',
      marginTop:20,
      alignSelf:'center',
    }
  })

export default DetailsScreen;