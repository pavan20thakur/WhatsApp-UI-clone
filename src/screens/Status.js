import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';

const Status = () => {
  const statusData = [
    {
      id: '1',
      name: 'John Doe',
      time: '10 minutes ago',
      status: 'Just now',
      image: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      id: '2',
      name: 'Jane Smith',
      time: '1 hour ago',
      status: 'Feeling happy',
      image: 'https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8bmF0dXJhbHxlbnwwfHx8fDE3MTU3NTA4NjJ8MA&ixlib=rb-4.0.3',
    },
    {
      id: '3',
      name: 'Alice Johnson',
      time: '2 hours ago',
      status: 'At work',
      image: 'https://via.placeholder.com/150',
    },
  ];

  const renderStatusItem = ({ item }) => (
    <View style={styles.statusItem}>
      <Image source={{ uri: item.image }} style={styles.statusImage} />
      <View style={styles.statusInfo}>
        <Text style={styles.statusName}>{item.name}</Text>
        <Text style={styles.statusTime}>{item.time}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.myStatusContainer}>
        <Text style={styles.myStatusText}>My Status</Text>
        <View style={styles.myStatusItem}>
          <Image
            source={{ uri: 'https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630' }} // Placeholder image URL
            style={styles.myStatusImage}
          />
          <View style={styles.myStatusInfo}>
            <Text style={styles.myStatusName}>Your Name</Text>
            <Text style={styles.myStatusTime}>Tap to add </Text>
          </View>
        </View>
      </View>
      <Text style={styles.myStatusText}>Recent Updates</Text>
      <FlatList
        data={statusData}
        renderItem={renderStatusItem}
        keyExtractor={(item) => item.id}
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
  myStatusContainer: {
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  myStatusText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10
  },
  myStatusItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  myStatusImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  myStatusInfo: {
    marginLeft: 10,
  },
  myStatusName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  myStatusTime: {
    fontSize: 14,
    color: '#666',
  },
  statusItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  statusImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  statusInfo: {
    flex: 1,
    marginLeft: 10,
  },
  statusName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  statusTime: {
    fontSize: 14,
    color: '#666',
  },
  statusText: {
    flex: 1,
    fontSize: 14,
    color: '#666',
  },
});

export default Status;
