import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, StyleSheet, TouchableOpacity, Text } from 'react-native';

const ChatIA = () => {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);

  const handleSend = () => {
    if (message.trim() !== '') {
      const newMessage = {
        id: Math.random().toString(),
        text: message,
        isUser: true,
      };
      setChat((prevChat) => [...prevChat, newMessage]);
      setTimeout(() => {
        const responseMessage = {
          id: Math.random().toString(),
          text: 'Chat IA Response',
          isUser: false,
        };
        setChat((prevChat) => [...prevChat, responseMessage]);
      }, 1000);
      setMessage('');
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={[styles.messageContainer, item.isUser ? styles.userMessage : styles.iaMessage]}>
      <Text style={styles.messageText}>{item.text}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.chatContainer}>
        <FlatList
          data={chat}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.chatContentContainer}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite sua mensagem"
          onChangeText={(text) => setMessage(text)}
          value={message}
        />
        <Button title="Enviar" onPress={handleSend} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  chatContainer: {
    flex: 1,
    marginBottom: 10,
  },
  chatContentContainer: {
    flexGrow: 1,
    justifyContent: 'flex-end', // Colocar as mensagens no final do contêiner
  },
  messageContainer: {
    backgroundColor: '#eee',
    borderRadius: 4,
    marginBottom: 8,
    padding: 10,
    maxWidth: '80%',
    alignSelf: 'flex-start',
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#007AFF',
  },
  iaMessage: {
    backgroundColor: '#ccc',
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    marginRight: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
});

export default ChatIA;

