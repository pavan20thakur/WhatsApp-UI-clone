import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Community = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
      <Image
          source={require('../../assets/icon.png')} // Local image path
          style={styles.profileImage}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>John Doe</Text>
          <Text style={styles.profileStatus}>Available</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.settingItem}>
        <Text style={styles.settingText}>Account</Text>
        <Text style={styles.settingSubtext}>Privacy, security, change number</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingItem}>
        <Text style={styles.settingText}>Chats</Text>
        <Text style={styles.settingSubtext}>Theme, wallpapers, chat history</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingItem}>
        <Text style={styles.settingText}>Notifications</Text>
        <Text style={styles.settingSubtext}>Message, group & call tones</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingItem}>
        <Text style={styles.settingText}>Help</Text>
        <Text style={styles.settingSubtext}>FAQ, contact us, privacy policy</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingItem}>
        <Text style={styles.settingText}>Invite</Text>
        <Text style={styles.settingSubtext}>Invite a friend to WhatsApp</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  profileInfo: {
    marginLeft: 20,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileStatus: {
    fontSize: 14,
    color: '#666',
  },
  settingItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingVertical: 15,
  },
  settingText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  settingSubtext: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
});

export default Community;
