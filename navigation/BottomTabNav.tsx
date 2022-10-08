import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import useColorScheme from '../hooks/useColorScheme';
import Colors from '../constants/Colors';
import { RootTabParamList } from '../types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import UpcomingScreen from '../screens/UpcomingScreen';
import SearchScreen from '../screens/SearchScreen';
import DownloadsScreen from '../screens/DownloadsScreen';

const BottomTab = createBottomTabNavigator<RootTabParamList>();

const BottomTabNav = () => {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: Colors[colorScheme].tint,
        tabBarInactiveTintColor: 'white',
        tabBarStyle: {
          elevation: 0,
          borderTopWidth: 0,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: any; //TODO: replace any wth the correct types
          switch (route.name) {
            case 'Home':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'Upcoming':
              iconName = focused ? 'calendar-month' : 'calendar-month-outline';
              break;
            case 'Search':
              iconName = focused ? 'magnify-plus-outline' : 'magnify';
              break;
            case 'Downloads':
              iconName = focused ? 'download' : 'download-outline';
            default:
              break;
          }

          return (
            <MaterialCommunityIcons
              name={iconName}
              color={color}
              size={size}
              style={styles.tabBarIcon}
            />
          );
        },
      })}
    >
      <BottomTab.Screen name="Home" component={HomeScreen} />
      <BottomTab.Screen name="Upcoming" component={UpcomingScreen} />
      <BottomTab.Screen name="Search" component={SearchScreen} />
      <BottomTab.Screen name="Downloads" component={DownloadsScreen} />
    </BottomTab.Navigator>
  );
};

export default BottomTabNav;

const styles = StyleSheet.create({
  tabBarIcon: {
    marginBottom: -3,
  },
});
