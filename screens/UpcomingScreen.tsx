import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const UpcomingScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>UpcomingScreen</Text>
      <Text style={styles.desc}>under construction</Text>
    </View>
  );
};

export default UpcomingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 18,
    color: 'white',
  },
  desc: {
    fontSize: 14,
    color: 'gray',
  },
});
