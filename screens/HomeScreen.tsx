import { StyleSheet, View, Text, Image, FlatList } from 'react-native';
import categories from '../assets/data/categories';

const firstCategory = categories.items[0];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Popular or Netflix</Text>
      <FlatList
        data={firstCategory.movies}
        renderItem={({ item }) => (
          <Image source={{ uri: item.poster }} style={styles.img} />
        )}
        horizontal={true}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  img: {
    width: 100,
    height: 170,
    resizeMode: 'cover',
    borderRadius: 5,
    margin: 5,
  },
});
