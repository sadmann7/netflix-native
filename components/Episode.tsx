import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type EpisodeProps = {
  episode: {
    id: string;
    title: string;
    poster: string;
    duration: string;
    plot: string;
    video: string;
  };
  setCurrentEpisode: React.Dispatch<
    React.SetStateAction<{
      id: string;
      title: string;
      poster: string;
      duration: string;
      plot: string;
      video: string;
    }>
  >;
};

const Episode = ({ episode, setCurrentEpisode }: EpisodeProps) => {
  return (
    <TouchableOpacity
      style={{ margin: 10 }}
      onPress={() => setCurrentEpisode(episode)}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image
          style={{ marginRight: 5, width: 125, aspectRatio: 16 / 9 }}
          source={{ uri: episode.poster }}
        />
        <View style={{ flex: 1 }}>
          <Text style={{ color: 'white', fontSize: 14 }}>{episode.title}</Text>
          <Text style={{ color: 'gray', fontSize: 11 }}>
            {episode.duration}
          </Text>
        </View>
        <MaterialCommunityIcons
          name="download-outline"
          color="white"
          size={24}
        />
      </View>
      <Text style={{ marginTop: 5, color: 'white' }}>{episode.plot}</Text>
    </TouchableOpacity>
  );
};

export default Episode;

const styles = StyleSheet.create({});
