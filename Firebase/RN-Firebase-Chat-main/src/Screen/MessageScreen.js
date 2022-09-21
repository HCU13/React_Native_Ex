import React, {Component} from 'react';
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import io from 'socket.io-client';


export default class MessageScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatMessage: '',
      chatMessages: [],
    };
  }

  componentDidMount() {
    this.socket = io('http://192.168.1.39:3000');
    this.socket.on('chat message', msg => {
      this.setState({chatMessages: [...this.state.chatMessages, msg]});
    });
  }

  submitChatMessage() {
    this.socket.emit('chat message', this.state.chatMessage);
    this.setState({chatMessage: ''});
  }

  render() {
    const chatMessages = this.state.chatMessages.map(chatMessage => (
      <Text key={chatMessage}>{chatMessage}</Text>
    ));

    return (
      <View style={styles.container}>
        <View  style={styles.secontView}>
        <TextInput
          style={styles.ViewStyle}
          autoCorrect={false}
          value={this.state.chatMessage}
          onSubmitEditing={() => this.submitChatMessage()}
          onChangeText={chatMessage => {
            this.setState({ chatMessage });
          }}
        />
        <TouchableOpacity  style={styles.buttonns}
        onPress={() => this.submitChatMessage()}>
        <Text>Send</Text>
     </TouchableOpacity>  
        </View>
        {chatMessages}
      </View>
      
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    flexDirection: 'column-reverse',
  },
  ViewStyle: {
    flex: 1,
    height: 40,
    width: 290,
    borderWidth: 1,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  buttonns:{
    height:40,
    width: 60,
    backgroundColor:'#baffff',
    justifyContent:"center",
    alignItems:"center"
  },
  secontView:{
    flexDirection:'row'
  },
});
