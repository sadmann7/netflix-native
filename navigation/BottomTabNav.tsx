import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import useColorScheme from '../hooks/useColorScheme';
import Colors from '../constants/Colors';
import TabOneScreen from '../screens/TabOneScreen';
import { RootTabParamList } from '../types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import TabTwoScreen from '../screens/TabTwoScreen';

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
      <BottomTab.Screen name="Home" component={TabOneScreen} />
      <BottomTab.Screen name="Upcoming" component={TabTwoScreen} />
      <BottomTab.Screen name="Search" component={TabTwoScreen} />
      <BottomTab.Screen name="Downloads" component={TabTwoScreen} />
    </BottomTab.Navigator>
  );
};

export default BottomTabNav;

const styles = StyleSheet.create({
  tabBarIcon: {
    marginBottom: -3,
  },
});
