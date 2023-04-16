import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

const MenuItem = ({ icon, title, onPress, value }) => {
  const showInput = !!value;
  const [fontSize, setFontSize] = useState(value);

  const fontSizeChangeHandler = (input) => {
    setFontSize(input);
    onPress(input);
  };

  return (
    <Pressable
      android_ripple={{ color: "#ffffff" }}
      style={({ pressed }) => (!pressed ? [] : styles.opacity75)}
      onPress={onPress}
    >
      <View style={styles.menuList}>
        <Ionicons name={icon} size={25} />

        <Text style={styles.menuText}>{title}</Text>
        {showInput && (
          <View style={styles.txtContainer}>
            <View style={styles.innerContainer}>
              <TextInput
                style={styles.textBox}
                value={fontSize}
                onChangeText={fontSizeChangeHandler}
                keyboardType="decimal-pad"
              />
            </View>
          </View>
        )}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  menuList: {
    margin: 5,
    padding: 10,
    flexDirection: "row",
    gap: 12,
    borderBottomWidth: 1,
    borderColor: Colors.black,
    alignItems: "center",
  },
  menuText: {
    fontSize: 16,
    fontWeight: 500,
  },
  opacity75: {
    opacity: 0.75,
  },
  txtContainer: {
    width: "65%",
  },

  innerContainer: {
    alignItems: "flex-end",
  },
  textBox: {
    backgroundColor: Colors.white,
    width: 50,
    height: 35,
    fontSize: 18,
    borderRadius: 5,
    marginLeft: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default MenuItem;
