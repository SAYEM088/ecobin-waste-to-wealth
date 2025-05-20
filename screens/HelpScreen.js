import React from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, FontAwesome5, MaterialIcons } from '@expo/vector-icons';

const faqCards = [
  { id: '1', question: 'How does the smart bin detect waste?', color: '#3b82f6' },
  { id: '2', question: 'How to properly dispose of e-waste?', color: '#8b5cf6' },
  { id: '3', question: 'Why was my bin rejected?', color: '#ec4899' },
];

const topics = [
  { id: '1', icon: 'recycle', label: 'Recycling Guidelines', articles: 10 },
  { id: '2', icon: 'trash-restore', label: 'Smart Bin Usage', articles: 8 },
  { id: '3', icon: 'leaf', label: 'Composting', articles: 5 },
  
];

export default function HelpScreen({ onLogout }) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 80 }}>
      <Text style={styles.heading}>Have a burning question? 🔥</Text>

      <View style={styles.searchBox}>
        <Ionicons name="search" size={20} color="#6b7280" style={{ marginRight: 10 }} />
        <TextInput
          placeholder="Search for topics or questions..."
          style={{ flex: 1 }}
          placeholderTextColor="#9ca3af"
        />
      </View>

      <View style={styles.shortcutContainer}>
        <TouchableOpacity style={styles.shortcutItem} onPress={onLogout}>
          <MaterialIcons name="logout" size={24} color="#ef4444" />
          <Text style={styles.shortcutLabel}>Logout</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.shortcutItem}>
          <Ionicons name="person-circle-outline" size={24} color="#2563eb" />
          <Text style={styles.shortcutLabel}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.shortcutItem}>
          <Ionicons name="settings-outline" size={24} color="#10b981" />
          <Text style={styles.shortcutLabel}>Settings</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Frequently Asked</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={faqCards}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.faqCard, { backgroundColor: item.color }]}>
            <Text style={styles.faqText}>{item.question}</Text>
            <Ionicons name="book-outline" size={20} color="#fff" style={{ marginTop: 8 }} />
          </View>
        )}
      />

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Topics</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>

      {topics.map((topic) => (
        <View key={topic.id} style={styles.topicRow}>
          <FontAwesome5 name={topic.icon} size={20} color="#4b5563" style={styles.topicIcon} />
          <View>
            <Text style={styles.topicTitle}>{topic.label}</Text>
            <Text style={styles.topicSubtitle}>{topic.articles} articles</Text>
          </View>
        </View>
      ))}

      <TouchableOpacity style={styles.chatButton}>
        <Ionicons name="chatbubble-ellipses-outline" size={20} color="#2563eb" />
        <Text style={styles.chatText}>Start a conversation</Text>
        <Ionicons name="chevron-up" size={18} color="#2563eb" />
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9fafb', padding: 20 },
  heading: { fontSize: 20, fontWeight: 'bold', marginBottom: 15, color: '#111827' },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e5e7eb',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  shortcutContainer: {
    flexDirection: 'row',
    margin:15,
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  shortcutItem: {
    alignItems: 'center',
    flex: 1,
  },
  shortcutLabel: {
    marginTop: 6,
    fontSize: 13,
    color: '#374151',
    fontWeight: '500',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', color: '#1f2937' },
  viewAll: { fontSize: 14, color: '#3b82f6' },
  faqCard: {
    width: 180,
    borderRadius: 12,
    padding: 15,
    marginRight: 15,
  },
  faqText: { color: '#fff', fontSize: 14, fontWeight: 'bold' },
  topicRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
  },
  topicIcon: { marginRight: 15 },
  topicTitle: { fontSize: 15, color: '#111827', fontWeight: '600' },
  topicSubtitle: { fontSize: 12, color: '#6b7280' },
  chatButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    padding: 12,
    backgroundColor: '#e0e7ff',
    borderRadius: 30,
    justifyContent: 'center',
    gap: 8,
  },
  chatText: { color: '#2563eb', fontWeight: '600', fontSize: 15 },
});
