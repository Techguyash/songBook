import { useContext, useEffect, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import SongList from "../components/SongList";
import Colors from "../constants/Colors";
import { AppContext } from "../store/AppContext";

const HomeScreen = () => {
  
  const { allSongList } = useContext(AppContext);

  return (
    <View style={styles.homeContainer}>
      <FlatList
        data={allSongList}
        renderItem={(song) => {
          return (
            <SongList
              title={song.item.title}
              number={song.item.number}
              lyrics={song.item.lyrics}
              favourite={song.item.favourite}
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
