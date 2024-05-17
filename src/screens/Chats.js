import { View, Text , StyleSheet, FlatList, Image, TouchableOpacity} from 'react-native'
import React, { useState, useEffect } from 'react'
import DATA from './../data/Chatdata';
import {MaterialCommunityIcons} from 'react-native-vector-icons'

const Chats = () => {
  const [chatData, setChatData] = useState(DATA)

  useEffect(() => {
    setChatData(DATA)
  })
  return (
    <View style={styles.container}>
      <FlatList 
       data = {chatData}
       keyExtractor={(item) => item.id.toString()}
       renderItem={({item}) => (
        <View style={styles.chatContainer}>
          <Image source = {item.photos}  style={styles.image}/>
          <View style={styles.chatContent}> 
            <View style={styles.chatHeader}> 
             <Text style={styles.chatName}>{item.name}</Text>
             <Text style={styles.chatTime}>{item.time}</Text>
            </View>
             <View style={styles.messages}> 
             <Text style={styles.chatMessage}>{item.lastMessage}</Text>
             </View>
          </View>
        </View>
       )}
      />
    </View>
  )
}

export default Chats

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 16,
    },
    chatContainer: {
      flexDirection: 'row',
      marginRight: 16,
      marginLeft: 16
    },
    image: {
      height: 50,
      width: 50,
      backgroundColor: '#128C7E',
      borderRadius: 25,
      alignItems:'center',
      justifyContent: 'center'
    },
    chatContent: {
      flex : 1,
      borderBottomWidth: 0,
      marginLeft:16 ,
      paddingBottom:16 ,
      marginBottom: 13
    },
    chatHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 2,
      marginBottom: 4
    }, 
    chatname: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    chatTime: {
      fontSize: 12,
      color: '#A0A09E',
    }
  });