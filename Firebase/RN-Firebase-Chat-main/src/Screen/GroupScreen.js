import React from 'react';
import {StyleSheet, FlatList,Text,View} from 'react-native';
import {
  UserInfo,
  UserImgWrapper,
  UserImg,
  TextSection,
} from '../Styles/MessageStyles';

const Messages = [
  {
    id: '1',
    userName: 'Group 1',
    userImg: require('../users/user-1.jpg'),
  },
  {
    id: '2',
    userName: 'Group 2',
    userImg: require('../users/user-2.jpg'),
  },
  {
    id: '3',
    userName: 'Group 3',
    userImg: require('../users/user-4.jpg'),
  },
  {
    id: '4',
    userName: 'Group 4',
    userImg: require('../users/user-5.jpg'),
  },
  {
    id: '5',
    userName: 'Group 5',
    userImg: require('../users/user-6.jpg'),
  },
];

const ChatScreen = ({navigation}) => {
  return (
    <View style={{flex:1,paddingLeft: 10, paddingRight: 10,backgroundColor:'#f20042',padding:20}}>
      <FlatList
        data={Messages}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={{backgroundColor:'#fff',borderRadius:30,marginBottom:10}}>
            <UserInfo >
              <UserImgWrapper style={{paddingLeft:10}}>
                <UserImg source={item.userImg} />
              </UserImgWrapper>
              <TextSection>
                <View>
                  <Text>{item.userName}</Text>
                </View>
              </TextSection>
            </UserInfo>
          </View>
        )}
      />
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
