import { Text, View, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import Colors from "../constants/Colors";

const SongList = ({ number, title, favourite, lyrics }) => {
  const navigation = useNavigation();

  const navigationHandler = () => {
    navigation.navigate("songOutput", {
      title: title,
      number: number,
      lyrics: lyrics,
    });
  };

  const [favState, setFavState] = useState(favourite);

  const favouriteChangeHandler = () => {
    console.log("logged");
    setFavState((prev) => !prev);
  };

  return (
    <View style={styles.outerContainer}>
      <Pressable
        style={styles.SongListContainer}
        android_ripple={{ color: "#838285" }}
        onPress={navigationHandler}
      >
        <View style={styles.number}>
          <Text>{number}</Text>
        </View>
        <View style={styles.title}>
          <Text style={{ textAlign: "center" }}>{title} </Text>
        </View>
        <View style={styles.favIcon}>
          {favState ? (
            <Pressable onPress={favouriteChangeHandler}>
              <Ionicons name="heart-sharp" size={24} color="red" />
            </Pressable>
          ) : (
            <Pressable onPress={favouriteChangeHandler}>
              <Ionicons name="heart-outline" size={24} color="black" />
            </Pressable>
          )}
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    borderRadius: 20,
    marginHorizontal: 10,
    marginVertical: 5,
    overflow: "hidden",
  },

  SongListContainer: {
    backgroundColor: Colors.whiteBackground,
    flexDirection: "row",
    height: 80,
    borderWidth: 0.5,
    elevation: 5,
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
