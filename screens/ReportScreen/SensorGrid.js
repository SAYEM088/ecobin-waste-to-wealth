import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const sensors = [
  { label: 'PH', value: '6.7' },
  { label: 'Moisture', value: '30%' },
  { label: 'Temperature', value: '25°C' },
  { label: 'Gas', value: 'No' },
];

export default function SensorGrid() {
  return (
    <View style={styles.grid}>
      {sensors.map((sensor, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.label}>{sensor.label}</Text>
          <Text style={styles.value}>{sensor.value}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  card: {
    width: '48%',
    backgroundColor: '#8fbc8f',  
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    color: '#134e4a',
  },
  value: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#064e3b',
  },
});
