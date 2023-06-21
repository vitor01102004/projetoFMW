import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const contacts = [
  {
    name: 'John Doe',
    number: '+55 (81) 99527-8647',
    profileImage: 'https://oroborendaextra.com.br/wp-content/uploads/2022/01/esta-pessoa-nao-existe-engenharia360-4.png',
  },
  {
    name: 'Jane Smith',
    number: '+55 (81) 98646-5673',
    profileImage: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.utnTDgZPWDpIXSqqIpf3egHaHb%26pid%3DApi&f=1&ipt=078e5765117b4fdff6103ed25a49a196cc35c3318fe07d8467d42cb58e4791b2&ipo=images',
  },
  {
    name: 'Mike Johnson',
    number: '+55 (81) 97545-2324',
    profileImage: 'https://static.imasters.com.br/wp-content/uploads/2019/02/20112325/person05.jpg',
  },
  {
    name: 'Emily Davis',
    number: '+55 (81) 99547-7678',
    profileImage: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP._nEtaxrOWwbjcUVKKs_GMwHaHb%26pid%3DApi&f=1&ipt=070291642f4df94ea93100f11f32993c189b52fad42a983ecd310e67b081f8c1&ipo=images',
  },
  {
    name: 'David Brown',
    number: '+55 (81) 98646-3435',
    profileImage: 'https://4.bp.blogspot.com/-CENuNO3JxtY/XBlsz_8TCdI/AAAAAAAAljI/k9MoF3nYnb4V3sZEGM3z-MQ08G1MfIaEwCLcBGAs/s1600/ai-image-generation-fake-faces-people-nvidia-5c18b20b472c2__700.jpg',
  },
];

const ContactScreen = () => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.contactContainer} onPress={() => handleContactPress(item)}>
      <Image source={{ uri: item.profileImage }} style={styles.profileImage} />
      <View style={styles.contactInfo}>
        <Text style={styles.contactName}>{item.name}</Text>
        <Text style={styles.contactNumber}>{item.number}</Text>
      </View>
    </TouchableOpacity>
  );

  const handleContactPress = (contact) => {
    console.log('Contact Pressed:', contact);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={contacts}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  contactContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  contactInfo: {
    flex: 1,
  },
  contactName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  contactNumber: {
    fontSize: 16,
    color: '#888',
  },
});

export default ContactScreen;




