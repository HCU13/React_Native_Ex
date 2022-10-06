import { StyleSheet, Text, View,Image,Dimensions } from 'react-native'
import React from 'react'
import useFetch from '../hooks/useFetch/useFetch';
import Config from 'react-native-config';
import Loading from '../components/Loading/Loading';

const Detail = ({route}) => {
  const {id} = route.params;
  const{loading,data} = useFetch(`${Config.API_URL}/${id}`)

  if (loading) {
    return <Loading/>;
  }

  return (
    <View style={styles.container}>
     <Image source={{uri : data.image}} style={styles.Image}/>
     <View style ={styles.body_container}>
     <Text style={styles.title}>{data.title}</Text>
     <Text style={styles.desc}>{data.description}</Text>
     <Text style={styles.price}>{data.price} TL</Text>
     </View>
    </View>
  )
}

export default Detail

const diveceSize= Dimensions.get('window')

const styles = StyleSheet.create({
  container:{
flex:1,
  },
Image:{
width: diveceSize.width,
height: diveceSize.height / 3,
resizeMode:'contain',
backgroundColor:'white'
},
title:{
fontWeight:'bold',
fontSize:25
},
desc:{
fontStyle:'italic',
marginVertical:5,
},
price:{
  fontWeight:'bold',
  fontSize:22,
  textAlign:'right'

},
body_container:{
padding:10
}
})