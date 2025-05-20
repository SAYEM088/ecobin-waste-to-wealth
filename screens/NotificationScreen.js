import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import * as Haptics from 'expo-haptics';

const sampleNotifications = [
  {
    id: '1',
    title: 'Bin 2 is full!',
    message: 'Please empty Bin 2. It reached 95% capacity.',
    time: '2 mins ago',
  },
  {
    id: '2',
    title: 'pH level alert',
    message: 'pH dropped below safe threshold in Zone 1.',
    time: '10 mins ago',
  },
  {
    id: '3',
    title: 'New report available',
    message: 'Your daily waste report is ready to view.',
    time: '1 hour ago',
  },
  {
    id: '4',
    title: 'Temperature spike detected',
    message: 'Temperature in Bin 1 has risen above 40°C.',
    time: '3 hours ago',
  },
  {
    id: '5',
    title: 'Gas emission warning',
    message: 'High levels of methane detected near Bin 3.',
    time: '5 hours ago',
  },
  {
    id: '6',
    title: 'Moisture level too high',
    message: 'Excess moisture found in Zone 2. Consider adding dry waste.',
    time: '6 hours ago',
  },
  {
    id: '7',
    title: 'System check complete',
    message: 'All sensors are functioning normally.',
    time: 'Yesterday',
  },
  {
    id: '8',
    title: 'New feature available',
    message: 'Try our new bin health analytics on the Report screen.',
    time: '2 days ago',
  },
];

export default function NotificationScreen() {
  useEffect(() => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.message}>{item.message}</Text>
      <Text style={styles.time}>{item.time}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Notifications</Text>
      <FlatList
        data={sampleNotifications}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6', 
    paddingTop: 10,
    paddingHorizontal: 15,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#1f2937',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 5,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111827',
  },
  message: {
    fontSize: 14,
    marginTop: 5,
    color: '#374151',
  },
  time: {
    fontSize: 12,
    marginTop: 8,
    color: '#9ca3af',
    textAlign: 'right',
  },
});
