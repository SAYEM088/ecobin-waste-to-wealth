import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';  

export default function SuggestionBox() {
  return (
    <View style={styles.box}>
      <View style={styles.header}>
        <MaterialIcons name="lightbulb-outline" size={20} color="#2563eb" />
        <Text style={styles.title}>Suggestion</Text>
      </View>
      <Text style={styles.content}>
        Consider reducing moisture level. Add dry biodegradable items for better composting.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#8fbc8f',
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 2, height: 5 },
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    gap: 6,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e3a8a',
  },
  content: {
    color: '#1e293b',
    fontSize: 14,
    lineHeight: 20,
  },
});
