import { Text, StyleSheet, View, Image,ImageBackground } from 'react-native'
import React, { Component, useState } from 'react'
import { TextInput, Button, Surface } from 'react-native-paper'
import { Colors } from 'react-native/Libraries/NewAppScreen'


const aaaa = require("../../Image/Image.jpg")

const Register = ({navigation:{goBack}}) => {

    return (
        <ImageBackground source={aaaa} resizeMode="cover" style={styles.image}>
     <View style={styles.container}>
        <Text style={styles.title}>Register</Text>
        <Surface style={styles.box}>
            <View>
        <TextInput label="Name" mode="outlined"/>
         <TextInput label="Surname" mode="outlined"/>
         <TextInput label="E-Mail" mode="outlined"/>
        <TextInput label="password" mode="outlined"/>
        <TextInput label="Password" mode="outlined"/>
        <Button onPress={() => navigation.navigate('Register')} style={styles.Register} mode='contained' >Register</Button>
        <Button onPress={() => goBack()} style={styles.LogIn} mode='contained'>Log In</Button>
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
Register:{
    marginTop:20,
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
    height:430
},
image:{
    flex:1,
    justifyContent:'center'
},
LogIn:{
    marginTop:10,
    backgroundColor:'#1fa15e'
}
})

export default Register;