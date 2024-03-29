import { Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

import ModalSelector from "react-native-modal-selector";

const data = [
  { key: 0, section: true, label: "Select Font Size" },
  { key: 15, label: "15" },
  { key: 16, label: "16" },
  { key: 18, label: "18" },
  { key: 20, label: "20" },
  { key: 24, label: "24" },
  { key: 28, label: "28" },
];

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
              <ModalSelector
                style={styles.modalOverlay}
                overlayStyle={styles.overlayBackground}
                sectionStyle={{
                  backgroundColor: Colors.accentBackground,
                  borderRadius: 25,
                }}
                sectionTextStyle={{ color: Colors.white }}
                optionStyle={{ borderBottomColor: "black" }}
                data={data}
                initValue={fontSize}
                onChange={(option) => {
                  fontSizeChangeHandler(option.key);
                }}
              />
            </View>
          </View>
        )}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  overlayBackground: {
    flex: 1,
    padding: "5%",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.8)",
  },

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
  modalOverlay: {
    color: "black",
    backgroundColor: Colors.accentBackground,
    borderRadius: 10,
    width: 65,
    height: 38,
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
