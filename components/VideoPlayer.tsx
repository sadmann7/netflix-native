import { StyleSheet, Text, View, Button } from 'react-native';
import { useState, useEffect, useRef } from 'react';
import { Video, AVPlaybackStatus } from 'expo-av';
import { Playback } from 'expo-av/build/AV';

type VideoPlayerProps = {
  episode: {
    id: string;
    title: string;
    poster: string;
    duration: string;
    plot: string;
    video: string;
  };
};

const VideoPlayer = ({ episode }: VideoPlayerProps) => {
  const video = useRef<Playback>(null);
  const [status, setStatus] = useState<any>({});

  useEffect(() => {
    if (!video) return;

    (async () => {
      await video.current?.unloadAsync();
      await video.current?.loadAsync(
        {
          uri: episode.video,
        },
        {},
        false
      );
    })();
  }, [episode]);

  return (
    <>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        usePoster={true}
        posterSource={{ uri: episode.poster }}
        posterStyle={{ resizeMode: 'cover' }}
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
      <View style={styles.buttons}>
        <Button
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying
              ? video.current.pauseAsync()
              : video.current.playAsync()
          }
        />
      </View>
    </>
  );
};

export default VideoPlayer;

const styles = StyleSheet.create({
  video: { width: '100%', aspectRatio: 16 / 9 },
  buttons: {},
});
