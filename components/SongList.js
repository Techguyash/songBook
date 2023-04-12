import { Text, View, StyleSheet, Pressable } from "react-native";

import { useNavigation } from "@react-navigation/native";

import Colors from "../constants/Colors";
import FavIcon from "../UI/FavIcon";
import RoundedContainer from "../UI/RoundedContainer";
import { useContext } from "react";
import { AppContext } from "../store/AppContext";

const SongList = ({ number, title, favourite, lyrics, id }) => {
  const { authenticated } = useContext(AppContext);

  const navigation = useNavigation();

  const navigateSongScreenHandler = () => {
    navigation.navigate("songOutput", {
      number: number,
      title: title,
      lyrics: lyrics,
      id: id,
    });
  };

  const navigateAdminScreenHandler = () => {
    navigation.navigate("manageSongScreen", {
      number: number,
      title: title,
      lyrics: lyrics,
      id: id,
    });
  };

  return (
    <RoundedContainer>
      <Pressable
        style={styles.SongListContainer}
        android_ripple={{ color: "#838285" }}
        onPress={
          authenticated ? navigateAdminScreenHandler : navigateSongScreenHandler
        }
      >
        <View style={styles.title}>
          <Text style={{ textAlign: "justify" }}>{title} </Text>
        </View>

        <FavIcon favourite={favourite} id={number} />
      </Pressable>
    </RoundedContainer>
  );
};

const styles = StyleSheet.create({
  SongListContainer: {
    backgroundColor: Colors.whiteBackground,
    flexDirection: "row",
    height: 80,
    elevation: 5,
  },

  title: {
    flex: 5,
    flexDirection: "row",
    alignItems: "center",
    textAlign: "left",
    justifyContent: "flex-start",
    paddingLeft: 20,
  },
});

export default SongList;
