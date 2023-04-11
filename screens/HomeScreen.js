import { useContext, useLayoutEffect, useState } from "react";
import { View, StyleSheet, FlatList, TextInput, Text } from "react-native";
import SongList from "../components/SongList";
import Colors from "../constants/Colors";
import { AppContext } from "../store/AppContext";

import { Ionicons } from "@expo/vector-icons";
import SearchBar from "../components/SearchBar";

const HomeScreen = ({ navigation }) => {
  const { allSongList, filteredList, authenticated, filterSongByTitleHandler } =
    useContext(AppContext);

  const [showSearchBar, setShowSearchBar] = useState(true);

  const enableSearchBar = () => {
    setShowSearchBar(false);
  };

  const disableSearchBar = () => {
    setShowSearchBar(true);
  };

  const filterSongsList = (enteredText) => {
    filterSongByTitleHandler(enteredText);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <View style={styles.headerContainer}>
            {authenticated && (
              <Ionicons
                name="add-outline"
                size={26}
                style={{
                  marginRight: 25,
                  fontSize: 32,
                }}
                onPress={() => {
                  navigation.navigate("manageSongScreen");
                }}
              />
            )}

            {showSearchBar && (
              <Ionicons
                name="search"
                size={26}
                style={{
                  marginRight: 25,
                }}
                onPress={enableSearchBar}
              />
            )}
          </View>
        );
      },
    });
  }, [authenticated, showSearchBar]);

  return (
    <>
      <View style={styles.homeContainer}>
        {allSongList?.length < 1 && (
          <View style={styles.noFavouritesLayout}>
            <Text style={{ fontSize: 100 }}>😧</Text>
            <Text style={styles.emptyListText}>Oops !! No Songs available</Text>
          </View>
        )}
        {!showSearchBar && (
          <SearchBar
            disableSearchBar={disableSearchBar}
            filterSongsList={filterSongsList}
          />
        )}
        <View style={{ paddingTop: 10, paddingHorizontal: 3 }}>
          <FlatList
            data={showSearchBar ? allSongList : filteredList}
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
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

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

export default HomeScreen;
