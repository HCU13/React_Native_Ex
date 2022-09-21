import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Messagess = [
  {
    id: '1',
    userName: 'Jenny Doe',
    userImg: require('../users/user-1.jpg'),
  },
  {
    id: '2',
    userName: 'John Doe',
    userImg: require('../users/user-2.jpg'),
  },
  {
    id: '3',
    userName: 'Ken William',
    userImg: require('../users/user-4.jpg'),
  },
  {
    id: '4',
    userName: 'Selina Paul',
    userImg: require('../users/user-5.jpg'),
  },
  {
    id: '5',
    userName: 'Christy Alex',
    userImg: require('../users/user-6.jpg'),
  },
  {
    id: '1',
    userName: 'Jenny Doe',
    userImg: require('../users/user-1.jpg'),
  },
  {
    id: '2',
    userName: 'John Doe',
    userImg: require('../users/user-2.jpg'),
  },
  {
    id: '3',
    userName: 'Ken William',
    userImg: require('../users/user-4.jpg'),
  },
  {
    id: '4',
    userName: 'Selina Paul',
    userImg: require('../users/user-5.jpg'),
  },
  {
    id: '5',
    userName: 'Christy Alex',
    userImg: require('../users/user-6.jpg'),
  },
];

const CreateGroupScreen = ({item, navigation}) => {
  return (
    <LinearGradient
      colors={['#f26a50', '#f20042', '#f20045']}
      style={styles.gradient}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Group Members</Text>
      </View>
      <FlatList 
        style={{padding:20}}
          horizontal
          data={Messagess}
          renderItem={({item}) => ( 
            <View style={styles.membersup}>
                  <Image style={styles.UserImgg} source={item.userImg} />
                  <Text style={styles.UserNamee}>{item.userName}</Text>
            </View>
          )}
        />
        
      <View style={styles.ops}>
        <View style={styles.col}>
        </View>
        <FlatList style={{padding:20}}
        numColumns={2}
          data={Messagess}
          renderItem={({item}) => (
            <TouchableOpacity style={styles.members}
              onPress={() =>
                navigation.navigate(
                  '',
                  {userName: item.userName},
                  {userImg: item.userImg},    
                )
              }>
              <View>
                <View>
                  <Image style={styles.UserImgg} source={item.userImg} />
                  <Text style={styles.UserNamee}>{item.userName}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </LinearGradient>
  );
};
export default CreateGroupScreen;

const styles = StyleSheet.create({
  gradient:{
      height:'100%',
      position:"absolute",
      paddingHorizontal:20,
      // paddingTop:0
      
  },
  headerContainer:{
      flexDirection:'row',
  },
  header:{
      fontFamily:'Montserrat_800ExtraBold',
      color:'#FFF',
      fontSize:24
  },
  ops:{
      borderTopLeftRadius:40,
      borderTopRightRadius:40,
      height:500,
      backgroundColor:'#FFF',
      // marginHorizontal:-20,
  },
  col:{
      marginTop:40,
  },
  members:{
    marginBottom:30,
    width:150,
    alignItems:'center',
    borderWidth: 3,
    borderColor: "white",
    // backgroundColor:'#efc4bd'
  },
  UserImgg:{
    width: 60,
    height:70,
    borderRadius: 25,
    alignSelf:'center',
  },
  membersup:{
    width:80,
    alignItems:'center',
  }
})