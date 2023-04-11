import { StyleSheet, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SearchBar = ({ disableSearchBar, filterSongsList }) => {
  return (
    <View style={styles.searchLayout}>
      <View style={styles.textContainer}>
        <TextInput
          placeholder="Search with Number / Song"
          style={styles.text}
          onChangeText={filterSongsList}
        />
      </View>
      <View style={styles.btnContainer}>
        <Ionicons name="close" size={26} onPress={disableSearchBar} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchLayout: {
    backgroundColor: "white",
    flexDirection: "row",
    marginTop: 15,
    marginHorizontal: 15,
    borderRadius: 20,
    overflow: "hidden",
    borderColor: "black",
    borderWidth: 1,
    alignItems: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
  },
  textContainer: {
    flex: 8,
    height: 40,
    alignItems: "flex-start",
    paddingLeft: 20,
    justifyContent: "center",
  },
  btnContainer: {
    flex: 1,
  },
});

export default SearchBar;
