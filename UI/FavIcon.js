import { useContext, useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AppContext } from "../store/AppContext";

const FavIcon = ({ favourite, id }) => {
  const { toggleFavouritesList } = useContext(AppContext);

  const toggleFavSong = () => {
    toggleFavouritesList(id);
  };

  return (
    <View style={styles.favIcon}>
      {favourite ? (
        <Pressable onPress={toggleFavSong}>
          <Ionicons name="heart-sharp" size={24} color="red" />
        </Pressable>
      ) : (
        <Pressable onPress={toggleFavSong}>
          <Ionicons name="heart-outline" size={24} color="black" />
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  favIcon: {
    flex: 0.8,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default FavIcon;
