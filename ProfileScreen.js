import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ProfileScreen = () => {
  const handleEditProfileImage = () => {
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://mobimg.b-cdn.net/v3/fetch/3f/3f7256483825b2bd5bb498e18e20906e.jpeg' }} style={styles.profileImage} />
      <TouchableOpacity onPress={handleEditProfileImage} style={styles.editButton}>
        <Text style={styles.editButtonText}>Editar Foto de perfil</Text>
      </TouchableOpacity>
      <Text style={styles.name}>Anonymous</Text>
      <Text style={styles.bio}>Software Developer</Text>
      <View style={styles.infoContainer}>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Age</Text>
          <Text style={styles.infoValue}>30</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Location</Text>
          <Text style={styles.infoValue}>New York</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Email</Text>
          <Text style={styles.infoValue}>Anonymous@example.com</Text>
        </View>
      </View>
      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.optionItem}>
          <Ionicons name="person" size={24} color="#007AFF" />
          <Text style={styles.optionText}>Conta</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionItem}>
          <Ionicons name="lock-closed" size={24} color="#007AFF" />
          <Text style={styles.optionText}>Privacidade</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionItem}>
          <Ionicons name="settings" size={24} color="#007AFF" />
          <Text style={styles.optionText}>Configurações</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionItem}>
          <Ionicons name="help" size={24} color="#007AFF" />
          <Text style={styles.optionText}>Ajuda</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  editButton: {
    alignSelf: 'center',
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    backgroundColor: '#007AFF',
  },
  editButtonText: {
    color: '#FFF',
    fontSize: 14,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bio: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  infoContainer: {
    width: '100%',
  },
  infoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  infoValue: {
    fontSize: 16,
  },
  optionsContainer: {
    width: '100%',
    marginTop: 20,
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  optionText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#007AFF',
  },
});

export default ProfileScreen;



