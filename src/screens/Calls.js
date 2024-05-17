import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const ChatBubble = ({ message, sender }) => {
  return (
    <View style={[styles.bubbleContainer, sender === 'me' ? styles.bubbleMe : styles.bubbleOther]}>
      <Text style={styles.messageText}>{message}</Text>
    </View>
  );
};

const Calls = () => {
  const chatData = [
    { id: '1', message: 'Hey, how are you?', sender: 'me' },
    { id: '2', message: 'I\'m good, thanks!', sender: 'other' },
    { id: '3', message: 'What are you up to?', sender: 'me' },
    { id: '4', message: 'Just chilling, you?', sender: 'other' },
    { id: '5', message: 'Same here.', sender: 'me' },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={chatData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ChatBubble
            message={item.message}
            sender={item.sender}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  bubbleContainer: {
    maxWidth: '80%',
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
  },
  bubbleMe: {
    alignSelf: 'flex-end',
    backgroundColor: '#DCF8C6',
  },
  bubbleOther: {
    alignSelf: 'flex-start',
    backgroundColor: '#EAEAEA',
  },
  messageText: {
    fontSize: 16,
  },
});

export default Calls;
