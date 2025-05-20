import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import SensorGrid from './ReportScreen/SensorGrid';
import HealthIndicator from './ReportScreen/HealthIndicator';
import SuggestionBox from './ReportScreen/SuggestionBox';
import DailyComparisonChart from './ReportScreen/DailyComparisonChart';

export default function ReportScreen() {
  return (
    <ScrollView style={styles.container}>
      <SensorGrid />
      <HealthIndicator />
      <SuggestionBox />
      <DailyComparisonChart />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5e7eb',  
    padding: 10,
  },
});
