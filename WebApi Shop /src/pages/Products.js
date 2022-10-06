import {
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Config from 'react-native-config';
const axios = require('axios').default;
import ProductCard from '../components/ProductCard/ProductCard';
import useFetch from '../hooks/useFetch/useFetch';
import Loading from '../components/Loading/Loading';

const Products = ({navigation}) => {
  const {loading, error, data} = useFetch(Config.API_URL);

const handleProductSelect = id => {
navigation.navigate('DetailsPage',{id})
}


  const renderProduct = ({item}) => <ProductCard product={item} onSelect={() => handleProductSelect(item.id)}/>;


  if (loading) {
    return <Loading/>;
  }
  if (error) {
    return <Text>Bir hata oluştu</Text>;
  }

  return (
    <View>
      <FlatList data={data} renderItem={renderProduct} />
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({});
