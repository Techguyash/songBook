import { useContext, useState } from "react";
import { Alert, Image, StyleSheet, Text, TextInput, View } from "react-native";
import PrimaryButton from "../UI/PrimaryButton";
import { AppContext } from "../store/AppContext";
import Colors from "../constants/Colors";

const LoginScreen = () => {
  const { userLoginHandler } = useContext(AppContext);

  const [inputs, setInputs] = useState({
    userName: {
      value: "",
      isValid: true,
    },
    password: {
      value: "",
      isValid: true,
    },
  });

  const submitHandler = () => {
    const userName = inputs.userName.value;
    const password = inputs.password.value;

    const userNameIsValid = userName.trim().length > 0;
    const passwordIsValid = password.trim().length > 0;

    if (!userNameIsValid || !passwordIsValid) {
      setInputs((curInputs) => {
        return {
          userName: {
            value: curInputs.userName.value,
            isValid: userNameIsValid,
          },
          password: {
            value: curInputs.password.value,
            isValid: passwordIsValid,
          },
        };
      });
      return;
    }

    if (userName === "BDCAdmin" && password === "One2eight") {
      userLoginHandler();
    } else {
      Alert.alert("Invalid Credentials", "User name or password is incorrect");
    }
  };

  const inputChangeHandler = (inputIdentifier, enteredValue) => {
    setInputs((curInputs) => {
      return {
        ...curInputs,
        [inputIdentifier]: { value: enteredValue, isValid: true },
      };
    });
  };

  const formIsValid = !inputs.userName.isValid || !inputs.password.isValid;
  return (
    <View style={styles.rootLayout}>
      <View style={styles.headerLayout}>
        <Image
          source={require("../assets/icon.png")}
          alt="user-logo"
          style={styles.imageLayout}
        />
        <Text style={styles.title}>Admin</Text>
      </View>
      <View style={styles.bodyLayout}>
        {/* User name group */}
        <View style={styles.userName}>
          <Text
            style={[
              styles.userLabel,
              !inputs.userName.isValid && styles.invalidLabel,
            ]}
          >
            User name :
          </Text>
          <TextInput
            placeholder="enter the E-mail Id"
            style={[
              styles.textBox,
              !inputs.userName.isValid && styles.invalidInput,
            ]}
            autoCorrect={false}
            onChangeText={inputChangeHandler.bind(this, "userName")}
            value={inputs.userName.value}
          />
        </View>

        {/* password group */}
        <View style={styles.userName}>
          <Text
            style={[
              styles.userLabel,
              !inputs.password.isValid && styles.invalidLabel,
            ]}
          >
            Password :{" "}
          </Text>
          <TextInput
            placeholder="enter the Password"
            style={[
              styles.textBox,
              !inputs.password.isValid && styles.invalidInput,
            ]}
            autoCorrect={false}
            onChangeText={inputChangeHandler.bind(this, "password")}
            value={inputs.password.value}
          />
        </View>
      </View>

      {formIsValid && (
        <Text style={styles.errorText}>
          Invalid Credentials - Please check the entered data
        </Text>
      )}
      <View style={styles.footerLayout}>
        <PrimaryButton onPress={submitHandler}>Login</PrimaryButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootLayout: {
    flex: 1,
    marginTop: 130,
  },
  headerLayout: {
    height: 140,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  imageLayout: {
    height: 90,
    width: 80,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  bodyLayout: {
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
    justifyContent: "center",
    alignItems: "center",
    height: 130,
  },
  errorText: {
    textAlign: "center",
    color: Colors.error,
    margin: 8,
  },

  invalidLabel: {
    color: Colors.error,
  },
  invalidInput: {
    backgroundColor: Colors.errorLight,
  },
});

export default LoginScreen;
