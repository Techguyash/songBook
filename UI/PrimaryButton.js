import { Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";

const PrimaryButton = ({ onPress, children }) => {
  return (
    <Pressable
      onPress={onPress}
      android_ripple={{ color: "#f2f2f2" }}
      style={({ pressed }) => (!pressed ? [] : styles.opacity75)}
    >
      <View style={styles.container}>
        <Text style={styles.text}>{children}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  opacity75: {
    opacity: 0.75,
  },

  container: {
    backgroundColor: Colors.accentBackground,
    width: 200,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  text: {
    color: Colors.white,
    fontSize: 16,
  },
});

export default PrimaryButton;
