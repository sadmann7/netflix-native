import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import useColorScheme from '../hooks/useColorScheme';
import Colors from '../constants/Colors';
import TabOneScreen from '../screens/TabOneScreen';
import { RootTabParamList } from '../types';
import { MaterialIcons } from '@expo/vector-icons';
import TabTwoScreen from '../screens/TabTwoScreen';

const BottomTab = createBottomTabNavigator<RootTabParamList>();

const BottomTabNav = () => {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: Colors[colorScheme].tint,
        tabBarStyle: {
          elevation: 0,
          borderTopWidth: 0,
        },
        tabBarIcon: ({ color, size }) => {
          let iconName: any;
          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'Coming_Soon':
              iconName = 'video-library';
              break;
            case 'Search':
              iconName = 'search';
              break;
            case 'Downloads':
              iconName = 'file-download';
            default:
              break;
          }

          return (
            <MaterialIcons
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
      <BottomTab.Screen
        name="Coming_Soon"
        component={TabTwoScreen}
        options={{ title: 'Coming Soon' }}
      />
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
