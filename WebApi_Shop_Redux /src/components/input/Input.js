import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Input = ({placeholder, onType,value, iconName}) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input}  placeholder={placeholder} onChangeText={onType} value={value}/>
      <Icon name={iconName} size={25} />
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
    container:{
        padding:1,
        margin:10,
        backgroundColor:'white',
        borderRadius:20,
        flexDirection:'row',
        alignItems:'center'
    },
    input:{
        flex:1,
    }
})