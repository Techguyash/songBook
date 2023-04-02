import { View, Text, StyleSheet, FlatList } from "react-native";
import SongList from "../components/SongList";
import Colors from "../constants/Colors";
import Songs from "../data/Data";

const HomeScreen = ({}) => {
  return (
    <View style={styles.homeContainer}>
      <FlatList
        data={Songs}
        renderItem={(song) => {
          return (
            <SongList
              title={song.item.title}
              number={song.item.number}
              lyrics={song.item.lyrics}
              favourite={true}
            />
          );
        }}
        keyExtractor={(song) => song.number}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});

export default HomeScreen;
