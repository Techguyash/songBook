import { Pressable, StyleSheet, Text, View } from "react-native";
import { useContext, useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import Colors from "../constants/Colors";
import MenuItem from "../UI/MenuItem";
import { AppContext } from "../store/AppContext";

const SettingsScreen = ({ navigation }) => {
  const { userLogoutHandler, authenticated } = useContext(AppContext);

  const navigator = useNavigation();

  const navigateLoginScreenHandler = () => {
    navigator.navigate("loginScreen");
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <View style={styles.headerContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Settings</Text>
            </View>
          </View>
        );
      },
    });
  }, []);

  return (
    <View style={styles.rootLayout}>
      <View style={styles.menuContainer}>
        <MenuItem
          icon="person-outline"
          title="user"
          onPress={navigateLoginScreenHandler}
        />
        <MenuItem icon="text-outline" title="Font Size" onPress={() => {}} />

        <MenuItem icon="timer-outline" title="About us" onPress={() => {}} />
      </View>
      {authenticated && (
        <Pressable onPress={userLogoutHandler}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>Log Out</Text>
          </View>
        </Pressable>
      )}
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  headerContainer: {
    height: 280,
    width: 400,
    position: "relative",
    top: 20,
    borderBottomLeftRadius: 450,
    borderBottomRightRadius: 350,
    backgroundColor: Colors.navColor,
  },
  rootLayout: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: "center",
  },
  menuContainer: {
    margin: 20,
  },
  titleContainer: {
    marginTop: 200,
    marginLeft: "38%",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    color: "#ffffff",
    fontWeight: "400",
    padding: 10,
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
  btn: {
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    borderRadius: 10,
    backgroundColor: "red",
    fontSize: 19,
    padding: 12,
    color: Colors.white,
  },
});
