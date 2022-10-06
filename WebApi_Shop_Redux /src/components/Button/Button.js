import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React from 'react';

const Button = ({text, onPress, loading}) => {
  return (
    <TouchableOpacity disabled={loading} style={styles.container} onPress={onPress}>
      {loading ? (
        <ActivityIndicator color={'white'} />
      ) : (
        <Text style={styles.title}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    backgroundColor: '#2286c3',
    borderRadius: 20,
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 17,
    color: 'white',
  },
});
