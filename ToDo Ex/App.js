import {Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Task from './components/Task';

const App = () => {

  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
 setTaskItems([...taskItems, task])
 setTask(null);
  }

  const completeTask = (index) => {
    let itemCopy = [...taskItems];
    itemCopy.splice(index,1);
    setTaskItems(itemCopy)
  }

  
  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Task</Text>

        <View style={styles.items}>
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index}  onPress={completeTask}>
                     <Task text={item}/>
                </TouchableOpacity>
              )
             
            })
          }
        </View>
      </View>


      <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.writeTaskWrapper}
      >
      <TextInput style={styles.input} placeholder={'write a task'} value={task} onChangeText={text => setTask(text)}/>
      <TouchableOpacity onPress={() => handleAddTask()}>
        <View style={styles.addWrapper}>
        <Text style={styles.addText}>+</Text>
        </View>
      </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop:60,
    paddingHorizontal:20,

  },
  sectionTitle: {
    fontSize:24,
    fontWeight:'bold'
  },
  items: {
   marginTop:30,
  },
  writeTaskWrapper:{
    position:'absolute',
    bottom:60,
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center'
  },
input:{
  paddingVertical:15,
  paddingHorizontal:15,
  backgroundColor:'#fff',
  borderRadius:60,
  borderColor:'#C0C0C0',
  borderWidth:1,
  width:250,
},
addWrapper:{
  width:60,
  height:60,
  backgroundColor:'#fff',
  borderRadius:60,
  justifyContent:'center',
  alignItems:'center',
  borderColor:'#C0C0C0',
  borderWidth:1,
},
addText:{},
});