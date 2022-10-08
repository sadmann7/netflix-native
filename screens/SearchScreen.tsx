import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SearchScreen</Text>
      <Text style={styles.desc}>under construction</Text>
    </View>
  );
};

export default SearchScreen;

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
