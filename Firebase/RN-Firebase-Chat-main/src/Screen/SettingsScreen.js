import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const SettingsScreen = () =>{
return(
  <View style={styles.container}>
<Text style={styles.Text}>Settings</Text>
  </View>);

}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#76a6ef',
    },
    Text:{
        fontSize:20,
        fontWeight:'bold',
        color:'#fff',
    }
})
export default SettingsScreen;