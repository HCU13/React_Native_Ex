import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  inner_container: {
    padding: 10,
    flex: 1,
    justifyContent:'center'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  info_container: {
    flex:1,
    flexDirection: 'row',
    alignItems:'center',
  },
  year: {
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 12,
  },
  soldout_container:{
    borderWidth:1,
    borderColor:'red',
    padding:5,
    borderRadius:5
  },
  soldout_title:{
    color:'red'
  },
  content_container:{
    flexDirection:'row'
  }
});
