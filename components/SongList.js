import { Text, View, StyleSheet, Pressable } from "react-native";

import { useNavigation } from "@react-navigation/native";

import Colors from "../constants/Colors";
import FavIcon from "../UI/FavIcon";
import RoundedContainer from "../UI/RoundedContainer";

const SongList = ({ number, title, favourite, lyrics }) => {
  const navigation = useNavigation();

  const navigationHandler = () => {
    navigation.navigate("songOutput", {
      title: title,
      number: number,
      lyrics: lyrics,
    });
  };

  return (
    <RoundedContainer>
      <Pressable
        style={styles.SongListContainer}
        android_ripple={{ color: "#838285" }}
        onPress={navigationHandler}
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
