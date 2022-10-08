import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

type SeriesListProps = {
  category: {
    id: string;
    title: string;
    movies: {
      id: string;
      poster: string;
    }[];
  };
};

const SeriesList = ({ category }: SeriesListProps) => {
  const navigation = useNavigation();

  return (
    <>
      <Text style={styles.title}>{category.title}</Text>
      <FlatList
        data={category.movies}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('SeriesDetails')}
          >
            <Image source={{ uri: item.poster }} style={styles.img} />
          </TouchableOpacity>
        )}
        horizontal={true}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </>
  );
};

export default SeriesList;

const styles = StyleSheet.create({
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
