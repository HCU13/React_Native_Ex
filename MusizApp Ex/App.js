import { SafeAreaView, StyleSheet, Text, View,FlatList } from 'react-native'
import React, {useState,useEffect} from 'react'
import music_data from './src/Data/music-data.json'
import SongCard from './src/components/SongCard/SongCard'
import SearchBar from './src/components/SearchBar/SearchBar'

const App = () => {

  const [list, setList] = useState(music_data);

  const renderSong = ({item}) => <SongCard song={item}/>
  const renderSeperator = () => <View style={styles.seperator}></View>
  const handleSearch = text => {
    const filteredList = music_data.filter(song => {
      const searcedText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();

      return currentTitle.indexOf(searcedText) > -1 ;
    })

    setList(filteredList);
  };

  return (
    <View style={styles.container}>
      <SearchBar onSearch={handleSearch}/>
      <FlatList 
      ItemSeparatorComponent={renderSeperator}
      keyEctractor={item => item.id}
      data={list}
      renderItem={renderSong}
      />
      </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  seperator:{
    borderWidth:1,
    borderColor:'#e0e0e0',
  }
})