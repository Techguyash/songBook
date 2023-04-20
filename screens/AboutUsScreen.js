import { Image, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Colors from "../constants/Colors";

const AboutUsScreen = () => {
  const navigator = useNavigation();

  return (
    <>
      <View style={styles.container}>
        <View style={styles.topBg}></View>
        <View style={styles.imageLayout}>
          <Image
            source={require("../assets/logo.png")}
            alt="user-logo"
            style={styles.image}
          />
        </View>

        <View style={styles.centeredContainer}>
          <Text style={styles.bold100}>
            The Feet of heavenly Father Ministries
          </Text>
          <Text style={styles.paragraph}>
            இந்த ஊழியத்தின் மூலமாக
            <Text style={styles.bold50}> "பரமனின் கீதங்கள்"</Text> என்ற பாடல்
            செயலியை வெளியிடுவதில் மகிழ்ச்சியடைகிறோம்.
          </Text>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerContent}>
            மேலும் விவரங்கள் அறிய மற்றும் ஜெப உதவிக்கு:
            <Text style={styles.bold75}> 94436-94891 </Text>
          </Text>
        </View>
        <View style={styles.bottomBg}></View>
      </View>
    </>
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
  },
  image: {
    height: 117,
    width: 305,
  },

  centeredContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 1,
    marginTop: 30,
  },

  bold100: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 10,
  },
  bold50: {
    fontSize: 15,
    fontWeight: "bold",
  },
  bold75: {
    fontSize: 18,
    fontWeight: "bold",
  },
  paragraph: {
    marginTop: 20,
    width: "90%",
    textAlign: "center",
    lineHeight: 25,
    letterSpacing: 0.4,
    fontSize: 16,
  },
  footer: {
    marginTop: 80,
    padding: 8,
  },
  footerContent: {
    textAlign: "center",
    lineHeight: 27,
    fontSize: 14,
  },
  bottomBg: {
    backgroundColor: Colors.accentBackground,
    height: 250,
    width: 250,
    borderRadius: 140,
    top: 90,
    left: -120,
  },
  topBg: {
    backgroundColor: Colors.accentBackground,
    height: 200,
    width: 200,
    borderRadius: 140,
    right: -270,
    bottom: 70,
  },
});
