import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Wallet = () => {
  const cryptocurrencies = [
    { name: 'Bitcoin', balance: 0.5, price: 50000, variation: '+5.2%', icon: 'bitcoin' },
    { name: 'Ethereum', balance: 2.3, price: 3000, variation: '-2.7%', icon: 'ethereum' },
    { name: 'Litecoin', balance: 10.8, price: 150, variation: '+1.4%', icon: 'litecoin' },
  ];

  const handleCryptoPress = (crypto) => {
    console.log('Cryptocurrency Pressed:', crypto.name);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Wallet</Text>
      {cryptocurrencies.map((crypto) => (
        <TouchableOpacity
          style={styles.cryptoContainer}
          key={crypto.name}
          onPress={() => handleCryptoPress(crypto)}
        >
          <View style={styles.iconContainer}>
            <Icon name={crypto.icon} size={24} color="black" />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.cryptoName}>{crypto.name}</Text>
            <Text style={styles.cryptoBalance}>
              {crypto.balance} {crypto.name === 'Bitcoin' ? 'BTC' : crypto.name === 'Ethereum' ? 'ETH' : 'LTC'}
            </Text>
            <Text style={styles.cryptoPrice}>Price: ${crypto.price}</Text>
            <Text style={styles.cryptoVariation}>Variation: {crypto.variation}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F8F8F8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  cryptoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E7E7E7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoContainer: {
    marginLeft: 16,
  },
  cryptoName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  cryptoBalance: {
    fontSize: 16,
    color: '#777',
  },
  cryptoPrice: {
    fontSize: 14,
    color: '#999',
  },
  cryptoVariation: {
    fontSize: 14,
    color: '#2ECC71',
  },
});

export default Wallet;






