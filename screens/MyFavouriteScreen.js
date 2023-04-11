import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { AppContext } from "../store/AppContext";
import SongList from "../components/SongList";
import Colors from "../constants/Colors";

const MyFavouriteScreen = () => {
  const { allSongList } = useContext(AppContext);

  const filteredSongs = allSongList.filter((song) => song.favourite);

  return (
    <>
      {filteredSongs.length < 1 ? (
        <View style={styles.noFavouritesLayout}>
          <Text style={{ fontSize: 100 }}>💔</Text>
          <Text style={styles.emptyListText}>Your Favourite List is Empty</Text>
        </View>
      ) : (
        <View style={styles.homeContainer}>
          <FlatList
            data={filteredSongs}
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
      )}
    </>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  noFavouritesLayout: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyListText: {
    fontSize: 19,
    fontWeight: "600",
  },
});

export default MyFavouriteScreen;
