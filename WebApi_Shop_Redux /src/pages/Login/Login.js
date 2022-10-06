import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  SafeAreaView,
  Alert,
} from 'react-native';
import React from 'react';
import Input from '../../components/input/Input';
import Button from '../../components/Button/Button';
import {Formik} from 'formik';
import usePost from '../../hooks/usePost/usePost';
import Config from 'react-native-config';
import AsyncStorage from '@react-native-async-storage/async-storage';



const Login = ({navigation}) => {
  const {data, loading, error, post} = usePost();

  function handleLogin(values) {
    post(Config.API_AUTH_URL + '/login', values);
  }

  if (data) {
    if (data.status === 'error') {
      Alert.alert('Kullanıcı bulunamadı');
    } else {
      AsyncStorage.setItem('@USER', JSON.stringify(user))
      navigation.navigate('ProductPage');
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo_container}>
        <Image
          style={styles.logo}
          source={require('../../assets/login-logo.png')}
        />
      </View>
      <Formik
        initialValues={{username: '', password: ''}}
        onSubmit={handleLogin}>
        {({handleSubmit, handleChange, values}) => (
          <View style={styles.body_container}>
            <Input
              placeholder="Kullanıcı adını giriniz"
              value={values.username}
              onType={handleChange('username')}
              iconName="account"
            />
            <Input
              placeholder="Şifrenizi giriniz"
              value={values.password}
              onType={handleChange('password')}
              iconName="key"
            />
            <Button text="giriş yap" onPress={handleSubmit} loading={loading} />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#64b5f6',
  },
  logo_container: {
    flex: 1,
  },
  body_container: {
    flex: 1,
  },
  logo: {
    height: Dimensions.get('window').height / 3,
    width: Dimensions.get('window').width,
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
    marginTop: 50,
  },
});

const user = {
  "address": {
    "geolocation": {
      "lat": "-37.3159",
      "long": "81.1496"
    },
    "city": "kilcoole",
    "street": "new road",
    "number": 7682,
    "zipcode": "12926-3874"
  },
  "id": 1,
  "email": "john@gmail.com",
  "username": "johnd",
  "password": "m38rmF$",
  "name": {
    "firstname": "john",
    "lastname": "doe"
  },
  "phone": "1-570-236-7033",
  "__v": 0
}