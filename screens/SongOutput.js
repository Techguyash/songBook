import { useContext, useLayoutEffect } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";
import { AppContext } from "../store/AppContext";

function SongOutput({ route, navigation }) {
  const { textFontSize } = useContext(AppContext);

  const title = route.params.title;
  const lyrics = route.params.lyrics;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: title,
      headerStyle: {
        backgroundColor: Colors.background,
        borderBottomWidth: 1,
        borderBottomColor: Colors.black,
      },
    });
  }, [title, navigation]);

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={true}
        style={styles.contentArea}
      >
        <Text style={[styles.textContent, { fontSize: Number(textFontSize) }]}>
          {lyrics}
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  contentArea: {
    height: "85%",
    backgroundColor: Colors.white,
    margin: 10,
    padding: 10,
    borderRadius: 10,
    elevation: 25,
  },
  textContent: {
    marginVertical: 5,
    textAlign: "center",
    marginBottom: 10,
    paddingBottom: 15,
  },
});

export default SongOutput;
