import React, { useRef, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

export default function HealthIndicator() {
  const fillValue = 64;
  const animatedValue = useRef(new Animated.Value(0)).current;
  const [displayValue, setDisplayValue] = useState(0);
  const glowAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {

    Animated.timing(animatedValue, {
      toValue: fillValue,
      duration: 1800,
      useNativeDriver: false,
    }).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(glowAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(glowAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: false,
        }),
      ])
    ).start();

    const listenerId = animatedValue.addListener(({ value }) => {
      setDisplayValue(Math.round(value));
    });

    return () => {
      animatedValue.removeListener(listenerId);
    };
  }, []);
 
  const glowColor = glowAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgb(25, 233, 101)', 'rgba(10, 95, 41, 0.5)'], 
  });

  return (
    <View style={styles.card}>
      <Text style={styles.label}>Health Index</Text>
      <AnimatedCircularProgress
        size={200}
        width={18}
        fill={fillValue}
        tintColor="#9EBC8A"  
        tintColorSecondary="#537D5D"  
        backgroundColor="#d4d4d8"
        rotation={270}
        arcSweepAngle={180}
        duration={1000}
        lineCap="round"
      >
        {() => (
          <View style={styles.innerContent}>
            <Animated.Text style={[styles.percentage, { color: glowColor }]}>
              {`${displayValue}%`}
            </Animated.Text>
            <Text style={styles.subLabel}>Efficiency</Text>
          </View>
        )}
      </AnimatedCircularProgress>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f8fafc',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 28,
    paddingHorizontal: 16,
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    margin: 20,
  },
  label: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 18,
  },
  innerContent: {
    alignItems: 'center',
    marginTop: 10,
  },
  percentage: {
    fontSize: 36,
    fontWeight: 'bold',
     
  },
  subLabel: {
    fontSize: 14,
    color: '#525B44',
    marginTop: 4,
    fontStyle: 'italic',
  },
});
