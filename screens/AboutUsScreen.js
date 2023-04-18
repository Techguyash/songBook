import { Image, StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";

const AboutUsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageLayout}>
        <Image
          source={require("../assets/icon.png")}
          alt="user-logo"
          style={styles.image}
        />
      </View>
      <View style={styles.centeredContainer}>
        <Text style={styles.title}>BDC Church</Text>
        <Text style={styles.title2}>Address comes here</Text>
        <Text style={styles.title2}>Address comes here</Text>
        <Text style={styles.title}>Other Details comes here</Text>
      </View>
    </View>
  );
};

export default AboutUsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  imageLayout: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 35,
  },
  image: {
    height: 115,
    width: 100,
  },
  centeredContainer: {
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  title2: {
    fontSize: 18,
  },
});
