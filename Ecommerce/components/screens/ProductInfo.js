import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
  Animated
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLOURS, Items} from '../database/Database';
import {SafeAreaView} from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const width = Dimensions.get('window').width;

const ProductInfo = ({route, navigation}) => {
  
  const {productsID} = route.params;
  const [product, setProduct] = useState({});


  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getDataFromDB();
    });

    return unsubscribe;
  }, [navigation]);

  //ID üzerinden ürün verielrini çekmek

  const getDataFromDB = async () => {
    for (let index = 0; index < Items.length; index++) {
      if (Items[index].id == productsID) {
        await setProduct(Items[index]);
        return;
      }
    }
  };
 

  //ürün scroll card

  const renderProduct = ({item, index,navigate}) => {
    return (
      <View style={styles.ImageView}>
        <Image source={item} style={styles.image}/>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={COLOURS.backgroundLight}
        barStyle="dark-content"
      />
      <ScrollView>
        <View style={styles.TopBar}>
          <View style={styles.TopArea}>
            <TouchableOpacity  onPress={() =>
         navigation.navigate('Home')}>
              <MaterialCommunityIcons name="backspace-outline" style={styles.backButtonText} />
            </TouchableOpacity>
          </View>
          <FlatList   
          data={product.productImageList ? product.productImageList : null}
          horizontal
          renderItem={renderProduct}
          showsHorizontalScrollIndicator={false}
          decelerationRate={0.8}
          snapToInterval={width}
          bounces={false}
          />
        </View>
        <View style={{marginTop:6,marginHorizontal:14,}}>
        <View  style={styles.TopText}>
              <Text style={styles.Name}>
                {product.productName}
              </Text>
          </View>
          <View style={{marginTop:15}}>
          <Text style={styles.descriptionStyle}>{product.description}</Text>
          </View>
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginVertical:14, borderBottomColor:COLOURS.backgroundLight,borderBottomWidth:3,paddingBottom:20}}>
            <View style={{flexDirection:'row',width:'80%',alignItems:'center'}}>
              <View style={styles.location}>
              <MaterialCommunityIcons name="location-enter" size={20} color="black" />
              </View>
            <Text>Rustaveli ave 57,{'\n'} 17-001, Batume</Text>
            </View>
            <MaterialCommunityIcons name="arrow-collapse-right" size={24} color="black"  />
          </View>
          <View style={styles.PriceArea}>
            <Text style={styles.Price}>$ {product.productPrice}.00</Text>
            <Text style={{  opacity:0.5,fontSize:12}}>
              Tax Rate 2%~$({product.productPrice / 20}($) 
              {product.productPrice + (product.productPrice / 20)}
            </Text>
          </View>
          </View>
      </ScrollView>
      <View style={styles.Avaible}>
      <TouchableOpacity style={styles.Button}>
        <Text style={styles.AvaibleText}>
          {product.isAvailable ? "Add to cart" : "Not Avialable"}
        </Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProductInfo;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: COLOURS.white,
    position: 'relative',
  },
  TopBar: {
    width: '100%',
    backgroundColor: COLOURS.backgroundLight,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4,
  },
  TopArea: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 16,
    paddingLeft: 16,
  },
  backButtonText: {
    fontSize: 25,
    color: COLOURS.backgroundDark,
    padding: 12,
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    
  },
  ImageView: {
    width: width,
    height: 350,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Name:{
    fontSize:16,
    fontWeight:'600',
    letterSpacing:0.5,
    marginVertical:4,
    coor:COLOURS.black,
    maxHeight:'84%',
  },
  TopText:{
    marginTop:16,
    flexDirection:'row',
    marginVertical:4,
  },
  descriptionStyle:{
    fontSize:12,
    color:COLOURS.black,
    fontWeight:'400',
    letterSpacing:1,
    opacity:0.5,
    lineHeight:20,
    maxWidth:'85%',
    maxHeight: 44,
    marginBottom:18,
  },
  location:{
    color:COLOURS.blue,
    backgroundColor:COLOURS.backgroundLight,
    alignItems:'center',
    justifyContent:'center',
    padding:16,
    borderRadius:100,
    marginRight:10,
  },
  Price:{
    fontSize:18,
    fontWeight:'500',
    maxWidth:'85%',
    color:COLOURS.black,
    marginBottom:4,
  },
  PriceArea:{
    paddingHorizontal:16,
    paddingTop:20
  },
  Avaible:{
    position:'relative',
    height:'5%',
    width:'100%',
    justifyContent:'center',
    alignItems:'center'
  },
  Button:{
    width:'46%',
    height:'90%',
    backgroundColor:COLOURS.blue,
    borderRadius:100,
    justifyContent:'center',
    alignItems:'center',
  },
  AvaibleText:{
    fontSize:12,
    fontWeight:'500',
    letterSpacing:1,
    color: COLOURS.white,
    textTransform:'uppercase'
  }
});
