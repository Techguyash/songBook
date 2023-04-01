import { Text, View, StyleSheet, Pressable } from "react-native";
import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

const SongList = () => {
  return (
    <Pressable
      style={styles.SongListContainer}
      android_ripple={{ color: "#ffff99" }}
    >
      <View style={styles.number}>
        <Text>1</Text>
      </View>
      <View style={styles.title}>
        <Text>இயேசு என்னை கைவிடமாட்டார் </Text>
      </View>
      <View style={styles.favIcon}>
        {/* <Ionicons name="heart-outline" size={24} color="black" /> */}
        <Ionicons name="heart-sharp" size={24} color="red" />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  SongListContainer: {
    backgroundColor: Colors.whiteBackground,
    flexDirection: "row",
    height: 80,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 20,
    borderWidth: 0.5,
    elevation: 5,
    overflow: "hidden",
  },
  number: {
    // backgroundColor: "red",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    // backgroundColor: "green",
    flex: 5,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  favIcon: {
    // backgroundColor: "blue",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SongList;
