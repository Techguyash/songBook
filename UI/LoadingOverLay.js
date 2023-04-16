import { View, ActivityIndicator, StyleSheet, Text } from "react-native";
import React from "react";
import Colors from "../constants/Colors";

const LoadingOverLay = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={"large"} color={Colors.accentBackground} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.background,
    padding: 24,
  },
});

export default LoadingOverLay;
