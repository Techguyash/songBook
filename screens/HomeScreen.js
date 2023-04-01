import { View, Text, StyleSheet } from "react-native";
import SongList from "../components/SongList";

const HomeScreen = () => {
  return (
    <View style={styles.homeContainer}>
      <Text>HomeScreen</Text>
      <SongList />
    </View>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
  },
});

export default HomeScreen;
