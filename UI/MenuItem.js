import { Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

const MenuItem = ({ icon, title, onPress }) => {
  return (
    <Pressable
      android_ripple={{ color: "#ffffff" }}
      style={({ pressed }) => (!pressed ? [] : styles.opacity75)}
      onPress={onPress}
    >
      <View style={styles.menuList}>
        <Ionicons name={icon} size={25} />
        <Text style={styles.menuText}>{title}</Text>
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
});
export default MenuItem;
