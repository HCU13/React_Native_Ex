import { Text, StyleSheet, View, Image,ImageBackground } from 'react-native'
import React, { Component, useState } from 'react'
import { TextInput, Button, Surface } from 'react-native-paper'
import { Colors } from 'react-native/Libraries/NewAppScreen'


const aaaa = require("../../Image/Image.jpg")

const Login = ({navigation}) => {

    return (
        <ImageBackground source={aaaa} resizeMode="cover" style={styles.image}>
     <View style={styles.container}>
        <Text style={styles.title}>Log In</Text>
        <Surface style={styles.box}>
            <View>
        <TextInput label="Username"  mode="outlined"/>
        <TextInput label="Password" mode="outlined"/>
        <Button onPress={() => undefined} style={styles.LogIn} mode='contained' >Log In</Button>
        <Button onPress={() => navigation.navigate('Register')} style={styles.Register} mode='contained'  >Register</Button>
        </View>
        </Surface>
     </View>
     </ImageBackground>
    
    )
  
}

const styles = StyleSheet.create({
container:{
    flex:1,
    justifyContent:'center',
    padding:30,
},
LogIn:{
    marginTop:20,
    backgroundColor:'#1fa15e'
},
Register:{
    marginTop:10,
    backgroundColor:'#007264'
},
title:{
    fontSize: 40,
    textAlign:'center',
    fontWeight:'bold',
    color:Colors.black,
    paddingBottom:30,
},
box:{
    borderRadius:10,
    padding:20,
    height:250
},
image:{
    flex:1,
    justifyContent:'center'
}
})

export default Login;