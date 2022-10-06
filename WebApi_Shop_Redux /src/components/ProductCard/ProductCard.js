import {Image, StyleSheet, Text, View,TouchableWithoutFeedback} from 'react-native';
import React from 'react';

const ProductCard = ({product, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: product.image}} />
      <View style={styles.body_container}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>{product.price}</Text>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e0e0e0',
    borderColor: '#bdbdbd',
    borderWidth: 1,
    margin: 10,
    flexDirection: 'row',
  },
  image: {
    width: 100,
    minHeight:100,
    resizeMode: 'contain',
    backgroundColor:'white'
  },
  body_container: {
    flex: 1,
    padding: 5,
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  price: {
    textAlign: 'right',
    fontSize: 16,
    fontStyle: 'italic',
  },
});
