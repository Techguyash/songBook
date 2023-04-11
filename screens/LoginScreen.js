import { useContext } from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import PrimaryButton from "../UI/PrimaryButton";
import { AppContext } from "../store/AppContext";

const LoginScreen = () => {
  const { userLoginHandler } = useContext(AppContext);

  return (
    <View style={styles.rootLayout}>
      <View style={styles.headerLayout}>
        <Image
          source={require("../assets/images/adminLogo.png")}
          alt="user-logo"
        />
        <Text style={styles.title}>Admin</Text>
      </View>
      <View style={styles.bodyLayout}>
        <View style={styles.userName}>
          <Text style={styles.userLabel}>User name :</Text>
          <TextInput placeholder="enter the E-mail Id" style={styles.textBox} />
        </View>

        <View style={styles.userName}>
          <Text style={styles.userLabel}>Password : </Text>
          <TextInput placeholder="enter the Password" style={styles.textBox} />
        </View>
      </View>
      <View style={styles.footerLayout}>
        <PrimaryButton onPress={userLoginHandler}>Login</PrimaryButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootLayout: {
    flex: 1,
    // backgroundColor: "red",
    marginTop: 130,
  },
  headerLayout: {
    height: 140,
    // backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  bodyLayout: {
    // backgroundColor: "green",
    height: 300,
    justifyContent: "center",
    alignItems: "center",
  },

  userName: {
    margin: 10,
    gap: 12,
  },

  userLabel: {
    fontSize: 16,
    fontWeight: "500",
  },

  textBox: {
    borderWidth: 1,
    borderColor: "black",
    width: 270,
    padding: 10,
    borderRadius: 15,
  },

  footerLayout: {
    // backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center",
    height: 130,
  },
});

export default LoginScreen;
