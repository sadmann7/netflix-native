import { StyleSheet, View, Text, Image, FlatList } from 'react-native';
import categories from '../assets/data/categories';
import SeriesList from '../components/SeriesList';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={categories.items}
        renderItem={({ item }) => <SeriesList category={item} />}
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
