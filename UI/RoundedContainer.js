import { StyleSheet, View } from "react-native";

const RoundedContainer = ({ children }) => {
  return <View style={styles.outerContainer}>{children}</View>;
};

const styles = StyleSheet.create({
  outerContainer: {
    borderRadius: 20,
    marginHorizontal: 10,
    marginVertical: 5,
    overflow: "hidden",
    borderWidth: 0.5,
  },
});

export default RoundedContainer;
