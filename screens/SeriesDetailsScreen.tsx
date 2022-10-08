import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { useState } from 'react';
import movie from '../assets/data/movie';
import {
  AntDesign,
  Entypo,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from '@expo/vector-icons';
import Episode from '../components/Episode';
import { Picker } from '@react-native-picker/picker';
import VideoPlayer from '../components/VideoPlayer';

const seasonNames = movie.seasons.items.map((season) => season.name);

const SeriesDetailsScreen = () => {
  const [currentSeason, setCurrentSeason] = useState(movie.seasons.items[0]);
  const [currentEpisode, setCurrentEpisode] = useState(
    movie.seasons.items[0].episodes.items[0]
  );

  return (
    <View style={styles.container}>
      <VideoPlayer episode={currentEpisode} />
      <FlatList
        data={currentSeason.episodes.items}
        renderItem={({ item }) => (
          <Episode episode={item} setCurrentEpisode={setCurrentEpisode} />
        )}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <View style={{ padding: 12 }}>
            <Text style={styles.title}>{movie.title}</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.match}>98% match</Text>
              <Text style={styles.year}>{movie.year}</Text>
              <View style={styles.ageContainer}>
                <Text style={styles.age}>12+</Text>
              </View>
              <Text style={styles.year}>{movie.numberOfSeasons} Seasons</Text>
              <MaterialIcons name="hd" size={24} color="white" />
            </View>
            <TouchableOpacity
              style={[styles.btn, styles.playBtn]}
              onPress={() => console.log('pressed')}
            >
              <Entypo
                name="controller-play"
                color="black"
                size={24}
                style={styles.btnIcon}
              />
              <Text style={styles.playBtnText}>Play</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.btn, styles.downloadBtn]}
              onPress={() => console.log('pressed')}
            >
              <MaterialCommunityIcons
                name="download"
                color="white"
                size={24}
                style={styles.btnIcon}
              />
              <Text style={styles.downloadBtnText}>Download</Text>
            </TouchableOpacity>
            <Text style={{ marginTop: 10, color: 'white' }}>{movie.plot}</Text>
            <Text style={{ marginTop: 5, color: 'gray' }}>{movie.cast}</Text>
            <Text style={{ color: 'gray' }}>{movie.creator}</Text>
            <View style={{ marginVertical: 5, flexDirection: 'row' }}>
              <View style={{ marginHorizontal: 20, alignItems: 'center' }}>
                <AntDesign name="plus" color="white" size={24} />
                <Text style={{ color: 'darkgray' }}>My List</Text>
              </View>
              <View style={{ marginHorizontal: 20, alignItems: 'center' }}>
                <AntDesign name="like2" color="white" size={24} />
                <Text style={{ color: 'darkgray' }}>Rate</Text>
              </View>
              <View style={{ marginHorizontal: 20, alignItems: 'center' }}>
                <Ionicons name="paper-plane-outline" color="white" size={24} />
                <Text style={{ color: 'darkgray' }}>Share</Text>
              </View>
            </View>
            <Picker
              selectedValue={currentSeason.name}
              onValueChange={(itemValue, itemIndex) =>
                setCurrentSeason(movie.seasons.items[itemIndex])
              }
              style={{ color: 'white', width: 131 }}
              dropdownIconColor="white"
            >
              {seasonNames.map((seasonName) => (
                <Picker.Item
                  key={seasonName}
                  label={seasonName}
                  value={seasonName}
                />
              ))}
            </Picker>
          </View>
        }
      />
    </View>
  );
};

export default SeriesDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    width: '100%',
    aspectRatio: 16 / 9,
    resizeMode: 'cover',
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  match: {
    color: '#59d467',
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 15,
  },
  year: {
    color: '#757575',
    marginRight: 10,
  },
  ageContainer: {
    backgroundColor: '#e6e229',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
    paddingHorizontal: 3,
    marginRight: 10,
  },
  age: {
    color: 'black',
    fontWeight: 'bold',
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    borderRadius: 2,
  },
  playBtn: {
    marginTop: 10,
    backgroundColor: 'white',
  },
  playBtnText: {
    color: 'black',
    fontWeight: '500',
  },
  downloadBtn: {
    marginTop: 8,
    backgroundColor: '#252525',
  },
  downloadBtnText: { color: 'white', fontWeight: '500' },
  btnIcon: {
    marginRight: 2,
  },
});
