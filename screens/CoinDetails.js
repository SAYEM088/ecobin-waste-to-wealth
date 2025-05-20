import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
  Modal,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import dayjs from 'dayjs';

const screenWidth = Dimensions.get('window').width;

export default function CoinDetails() {
  const navigation = useNavigation();
  const [selectedDay, setSelectedDay] = useState(null);

  const coinHistory = [
    { date: '2025-05-02', coin: 10, reason: 'Used Eco Transport' },
    { date: '2025-05-10', coin: 20, reason: 'Trash Audit' },
    { date: '2025-05-12', coin: 50, reason: 'Eco Donation' },
    { date: '2025-05-13', coin: 15, reason: 'Used Eco Transport' },
    { date: '2025-05-15', coin: 30, reason: 'Recycled 5 items' },
    { date: '2025-05-25', coin: 20, reason: 'Trashr Audit' },
    { date: '2025-05-27', coin: 5, reason: 'Eco Tip Shared' },
  ];

  const coinMap = coinHistory.reduce((acc, item) => {
    acc[item.date] = item.coin;
    return acc;
  }, {});
  const coinReasonMap = coinHistory.reduce((acc, item) => {
    acc[item.date] = item.reason;
    return acc;
  }, {});

  const generateCenteredDays = (centerMonth = dayjs().month(), year = dayjs().year()) => {
    const centerDate = dayjs(`${year}-${centerMonth + 1}-15`);
    const days = [];
    for (let i = -30; i < 70; i++) {
      const date = centerDate.add(i, 'day');
      days.push({
        dateStr: date.format('YYYY-MM-DD'),
        dayOfWeek: date.day(),
        weekIndex: Math.floor(i / 7),
      });
    }
    return days;
  };

  const getGreenShade = (value) => {
    if (value >= 50) return '#005a1e';
    if (value >= 30) return '#2e7d32';
    if (value >= 15) return '#66bb6a';
    if (value > 0) return '#a5d6a7';
    return '#e0e0e0';
  };

  const renderHeatmap = () => {
    const days = generateCenteredDays();
    const columns = [];

    for (let i = 0; i < 15; i++) {
      columns.push([]);
    }

    days.forEach((day) => {
      const coin = coinMap[day.dateStr] || 0;
      columns[day.weekIndex + 5]?.push({
        key: day.dateStr,
        coin,
        color: getGreenShade(coin),
      });
    });

    return (
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.heatmapScroll}>
        <View style={styles.heatmapContainer}>
          {columns.map((week, weekIdx) => (
            <View key={weekIdx} style={styles.weekColumn}>
              {Array.from({ length: 7 }).map((_, dayIdx) => {
                const cell = week.find((c) => dayjs(c.key).day() === dayIdx);
                return (
                  <TouchableOpacity
                    key={dayIdx}
                    onPress={() => cell?.coin && setSelectedDay(cell.key)}
                    style={[
                      styles.daySquare,
                      { backgroundColor: cell ? cell.color : '#e0e0e0' },
                    ]}
                  />
                );
              })}
            </View>
          ))}
        </View>
      </ScrollView>
    );
  };

  const renderHeader = () => (
    <View>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Icon name="chevron-left" size={26} color="green" />
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>

      <View style={styles.coinBox}>
        <Image source={require('../assets/gold-coin.png')} style={styles.coinImage} />
        <Text style={styles.coinAmount}>1,200</Text>
        <Text style={styles.coinLabel}>Eco Coins</Text>
      </View>

      <Text style={styles.chartTitle}>Recent Activity</Text>
      {renderHeatmap()}

      <Text style={styles.historyHeader}>Activity Log</Text>
    </View>
  );

  const historyData = coinHistory
    .sort((a, b) => dayjs(b.date).valueOf() - dayjs(a.date).valueOf())
    .map((item, index) => ({
      id: String(index + 1),
      title: item.reason || 'Activity',
      date: dayjs(item.date).format('MMM D, YYYY'),
      coin: `+${item.coin}`,
    }));

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        contentContainerStyle={styles.container}
        data={historyData}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={renderHeader}
        renderItem={({ item }) => (
          <View style={styles.historyItem}>
            <View>
              <Text style={styles.historyTitle}>{item.title}</Text>
              <Text style={styles.historyDate}>{item.date}</Text>
            </View>
            <Text style={styles.coinChange}>{item.coin}</Text>
          </View>
        )}
      />

      <Modal visible={!!selectedDay} transparent animationType="fade">
        <TouchableOpacity style={styles.modalOverlay} onPress={() => setSelectedDay(null)}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{dayjs(selectedDay).format('MMMM D, YYYY')}</Text>
            <Text style={styles.modalReason}>
              {coinReasonMap[selectedDay] || 'Contribution logged'}
            </Text>
            <Text style={styles.modalCoin}>+{coinMap[selectedDay]} coins</Text>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F5F6FF',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 10,
  },
  backText: {
    fontSize: 16,
    color: 'green',
    fontWeight: '500',
  },
  coinBox: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 20,
    elevation: 4,
    marginBottom: 20,
  },
  coinImage: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  coinAmount: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#7B5E00',
  },
  coinLabel: {
    fontSize: 16,
    color: '#555',
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  heatmapScroll: {
    marginBottom: 20,
  },
  heatmapContainer: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  weekColumn: {
    flexDirection: 'column',
    marginRight: 3,
  },
  daySquare: {
    width: 14,
    height: 14,
    marginBottom: 3,
    borderRadius: 2,
  },
  historyHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 15,
  },
  historyItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 15,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 2,
  },
  historyTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  historyDate: {
    fontSize: 13,
    color: '#666',
  },
  coinChange: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2E7D32',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 25,
    borderRadius: 15,
    alignItems: 'center',
    width: 280,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  modalReason: {
    fontSize: 15,
    color: '#333',
    marginBottom: 4,
  },
  modalCoin: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007E33',
  },
});
