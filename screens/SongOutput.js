import { useLayoutEffect } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";

function SongOutput({ route, navigation }) {
  const title = route.params.title;
  const lyrics = route.params.lyrics;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: title,
    });
  }, [title, navigation]);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.contentArea}>
        <Text style={styles.textContent}>{lyrics}</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentArea: {
    height: "85%",
    backgroundColor: Colors.white,
    margin: 8,
    padding: 10,
    borderRadius: 10,
    elevation: 20,
    borderWidth: 1,
  },
  textContent: {
    fontSize: 17,
    marginVertical: 5,
    textAlign: "center",
  },
});

export default SongOutput;
