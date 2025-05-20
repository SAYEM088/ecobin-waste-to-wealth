import React from 'react';
import { View, Text, Image, StyleSheet, StatusBar, Platform } from 'react-native';

export default function CustomHeader() {
  return (
    <View style={styles.safeArea}>
      <View style={styles.container}>
        <Image
          source={require('../assets/waste-icon.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>Ecobin</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  logo: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginRight: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2E7D32',
  },
});
