import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import { StackedBarChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;
const chartWidth = screenWidth - 40;

const chartData = {
  labels: ['pH', 'Temp', 'Moisture'],
 
  data: [
    [6.7, 6.2],
    [25, 24],
    [30, 40],
  ],
  barColors: ['#729762', '#344955'],
};

export default function DailyStackedBarChart() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daily Comparison</Text>

      <View style={styles.legendContainer}>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, { backgroundColor: '#729762' }]} />
          <Text style={styles.legendText}>Today</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, { backgroundColor: '#344955' }]} />
          <Text style={styles.legendText}>Yesterday</Text>
        </View>
      </View>

      <StackedBarChart
        data={chartData}
        width={chartWidth}
        height={300}
        chartConfig={{
          backgroundGradientFrom: '#91AC8F',
          backgroundGradientTo: '#f9fafb',
          decimalPlaces: 1,
          color: (opacity = 1) => `rgba(17, 24, 30, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(75, 85, 99, ${opacity})`,
          barPercentage: 0.7,
          propsForBackgroundLines: {
            strokeDasharray: '',
            stroke: '#e5e7eb',
          },
        }}
        style={styles.chart}
        // 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  borderTopColor: "black",
  borderTopWidth: 1, 
  marginBottom: 16,
  padding: 16,
  alignItems: "center",
}
,
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
    textAlign: 'center',
    marginBottom: 12,
  },
  legendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
    gap: 20,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  legendDot: {
    width: 16,
    height: 12,
    borderRadius: 6,
    marginRight: 6,
  },
  legendText: {
    fontSize: 14,
    color: '#708871',
  },
  chart: {
    borderRadius: 16,
  },
});
