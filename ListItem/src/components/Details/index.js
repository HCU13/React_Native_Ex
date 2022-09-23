import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { Colors } from 'react-native/Libraries/NewAppScreen';


const Details = ({restaurant}) => {

  const navigation = useNavigation();


const onPress = () => {
navigation.navigate("Details", {id: restaurant.id});
}

  return (
    
    <Pressable onPress={onPress} style={styles.line}>
    <View style={styles.container}>
      <View >
        <Image source={{uri: restaurant.image}} style={styles.image} />
        </View>
        <View style={styles.row}>
        <Text style={styles.title}>{restaurant.name}</Text>
        </View>
        <View style={styles.arrow}>
        <Text >--</Text>
        </View>
        
    </View >
    </Pressable>
    
  );
};
export default Details;

const styles = StyleSheet.create({
    container: {
    flexDirection: 'row',
    marginVertical: 3,
    width:'100%'
  },
  image: {
    width: 130,
    aspectRatio: 4 / 2,
    marginVertical:8,
    marginHorizontal:5
  },
  title: {
    fontSize:13,
    color: Colors.black,
    fontWeight:'420'
  },
  row:{
    flexDirection: "row",
    alignItems: "center",
  },
  line:{
    borderBottomColor: 'grey',
        borderBottomWidth: 0.2,
        marginHorizontal:12
  },
  arrow:{
    marginLeft:'auto',
    flexDirection: "row",
    alignItems: "center",
    fontWeight:'bold'
  }
});
