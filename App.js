import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import Colors from "./constants/Colors";
import SongList from "./components/SongList";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>App Component</Text>
      <SongList />
      <SongList />
      <SongList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
    backgroundColor: Colors.background,
  },
});
