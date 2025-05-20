import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  const goToCoinPage = () => {
    navigation.navigate('CoinDetails');
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {/* Profile Section */}
        <View style={styles.profileContainer}>
          <Image
            source={require("../assets/sayem.jpg")}
            style={styles.profileImage}
          />
          <Text style={styles.name}>Sayem Sarker</Text>
          <Text style={styles.location}>📍 Savar, Dhaka</Text>

          {/* Gold Coin */}
          <TouchableOpacity style={styles.coinContainer} onPress={goToCoinPage}>
            <Image
              source={require('../assets/gold-coin.png')}
              style={styles.coinIcon}
            />
            <Text style={styles.coinText}>1,200</Text>
          </TouchableOpacity>
        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Features */}
        <View style={styles.featuresContainer}>
          <Text style={styles.dashboardTitle}>Eco Features</Text>

          <View style={styles.featureGrid}>
            <TouchableOpacity style={styles.featureCard}>
              <Text style={styles.featureIcon}>🧮</Text>
              <Text style={styles.featureText}>Calculator</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.featureCard}>
              <Text style={styles.featureIcon}>♻️</Text>
              <Text style={styles.featureText}>Waste Info</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.featureCard}>
              <Text style={styles.featureIcon}>🌱</Text>
              <Text style={styles.featureText}>Plant Info</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.featureCard}>
              <Text style={styles.featureIcon}>🗑️</Text>
              <Text style={styles.featureText}>Bin Info</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Recent Activity (Demo) list */}
        <View style={styles.recentActivityContainer}>
          <Text style={styles.recentTitle}>Recent Activity</Text>

          <View style={styles.activityItem}>
            <Text style={styles.activityEmoji}>🗑️</Text>
            <Text style={styles.activityText}>You recycled 3 plastic bottles</Text>
          </View>

          <View style={styles.activityItem}>
            <Text style={styles.activityEmoji}>🌿</Text>
            <Text style={styles.activityText}>You planted a sapling</Text>
          </View>

          <View style={styles.activityItem}>
            <Text style={styles.activityEmoji}>♻️</Text>
            <Text style={styles.activityText}>You earned 200 eco coins</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    paddingBottom: 40,
  },
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#F5F6FF',
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 40,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  location: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 10,
  },
  coinContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8DAA6',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    marginTop: 10,
  },
  coinIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  coinText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#7B5E00',
  },
  divider: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 30,
  },
  featuresContainer: {
    marginBottom: 30,
  },
  dashboardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'center',
  },
  featureGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  featureCard: {
    width: '47%',
    backgroundColor: '#fff',
    paddingVertical: 20,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 15,
    elevation: 4,
  },
  featureIcon: {
    fontSize: 30,
    marginBottom: 8,
  },
  featureText: {
    fontSize: 16,
    fontWeight: '600',
  },
  recentActivityContainer: {
    marginBottom: 40,
  },
  recentTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
  },
  activityEmoji: {
    fontSize: 22,
    marginRight: 10,
  },
  activityText: {
    fontSize: 16,
  },
});
