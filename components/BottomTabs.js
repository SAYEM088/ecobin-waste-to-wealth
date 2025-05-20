import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from '../navigation/HomeStack';  
import ReportScreen from '../screens/ReportScreen';
import NotificationScreen from '../screens/NotificationScreen';
import HelpScreen from '../screens/HelpScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomHeader from './CustomHeader';

const Tab = createBottomTabNavigator();

export default function BottomTabs({ onLogout }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        header: () => <CustomHeader />,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Home':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'Report':
              iconName = focused ? 'document-text' : 'document-text-outline';
              break;
            case 'Notifications':
              iconName = focused ? 'notifications' : 'notifications-outline';
              break;
            case 'Help':
              iconName = focused ? 'help-circle' : 'help-circle-outline';
              break;
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Report" component={ReportScreen} />
      <Tab.Screen name="Notifications" component={NotificationScreen} />

      <Tab.Screen name="Help">
        {(props) => <HelpScreen {...props} onLogout={onLogout} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
