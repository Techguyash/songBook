import { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const FavIcon = ({ favourite, id }) => {
  const [favState, setFavState] = useState(favourite);

  const favouriteChangeHandler = () => {
    console.log("logged");
    setFavState((prev) => !prev);
  };

  return (
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
  );
};

const styles = StyleSheet.create({
  favIcon: {
    // backgroundColor: "blue",
    flex: 0.8,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default FavIcon;
