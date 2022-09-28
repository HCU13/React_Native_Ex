import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLOURS, Items} from '../database/Database';


const Home = ({navigation}) => {
  const [products, setproducts] = useState([]);
  const [accesory, setaccesory] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getDataFromDB();
    });

    return unsubscribe;
  }, [navigation]);


  //Db den veriyi çekmek 

  const getDataFromDB = () => {
    let productList = [];
    let accessoryList = [];

    for (let index = 0; index < Items.length; index++) {
      if (Items[index].category == 'product') {
        productList.push(Items[index]);
      } else if (Items[index].category == 'accessory') {
        accessoryList.push(Items[index]);
      }
    }

    setproducts(productList);
    setaccesory(accessoryList);
  };
  //ürün yaratmak

  const ProductCard = ({data}) => {
return(
    <TouchableOpacity style={styles.CardTouch} onPress={() => navigation.navigate("ProductInfo",{productsID: data.id})}>
      <View style={styles.Cardstyle}> 
        {
          data.isOff ? (
            <View style={styles.PercentStyle}>
              <Text style={styles.CardPercent}>{data.offPercentage}</Text>
            </View>
          ) : null}
          <Image source={data.productImage}  style={styles.ProductCardImage}/>
      </View>
      <Text style={styles.productNameStyle}>{data.productName}</Text>
      {data.category == 'accessory' ? data.isAvailable   : null}
      <Text>
      $ {data.productPrice}
      </Text>
    </TouchableOpacity>
    
)
  }
  

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={COLOURS.white} barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.TopView}></View>
        <View style={styles.TopTextView}>
          <Text style={styles.TopText}>ShopScreen</Text>
        </View>
        <View  style={{padding:16}}>
        <View style={styles.productArea}>
          <Text
            style={{
              fontSize: 18,
              color: COLOURS.black,
              fontWeight: '500',
              letterSpacing: 1,
            }}>
            Ürünlerimiz
          </Text>
          <Text style={{fontSize: 14, color: COLOURS.blue}}>Tümünü gör</Text>
        </View>
        <View  style={styles.MainScreenCard}>
          {products.map(data => {
            return <ProductCard data={data} key={data.id} />
          })}
        </View>
        </View>
          

        <View  style={{padding:16}}>
        <View style={styles.productArea}>
          <Text
            style={{
              fontSize: 18,
              color: COLOURS.black,
              fontWeight: '500',
              letterSpacing: 1,
            }}>
            Aksesuarlar
          </Text>
          <Text style={{fontSize: 14, color: COLOURS.blue}}>Tümünü gör</Text>
        </View>
        <View  style={styles.MainScreenCard}>
          {accesory.map(data => {
            return <ProductCard data={data} key={data.id} />
          })}
        </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: COLOURS.white,
  },
  TopView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    paddingTop: '5%',
  },
  shoppingBag: {
    fontSize: 18,
    color: COLOURS.backgroundMedium,
    padding: 12,
    borderRadius: 10,
    backgroundColor: COLOURS.backgroundLight,
    borderWidth: 1,
    borderColor: COLOURS.backgroundLight,
  },
  TopTextView: {
    marginBottom: 10,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  TopText: {
    fontSize: 26,
    color: COLOURS.black,
    fontWeight: '500',
    letterSpacing: 1,
    marginBottom: 10,
  },
  productArea: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  
  },
  ProductCardImage:{
    width:'80%',
    height:'80%',
    resizeMode:'contain'
  },
  Cardstyle:{
    width:'100%',
    height:100,
    borderRadius:10,
    backgroundColor:COLOURS.backgroundLight,
    position:'relative',
    justifyContent:'center',
    alignItems:'center',
    marginBottom:8,
  },
  CardTouch:{
    width:'48%',
    marginVertical:14,
    SafeAreaView:'false'
  },
  PercentStyle:{
    position:'absolute',
    width:'20%',
    height:'24%',
    backgroundColor:COLOURS.green,
    top:0,
    left:0,
    borderTopLeftRadius:10,
    borderBottomRightRadius:10,
    alignItems:'center',
    justifyContent:'center'
  },
  CardPercent:{
    fontSize:12,
    color:COLOURS.white,
    fontWeight:'bold',
    letterSpacing:1,
  },
  productNameStyle:{
    fontSize:12,
    color:COLOURS.black,
    fontWeight:'600',
    marginBottom:2,
  },
  MainScreenCard:{
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-around'
  }
});
