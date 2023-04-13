import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import Input from "./Input";
import Colors from "../../constants/Colors";
import Button from "../../UI/Button";

const NotificationForm = ({ onCancel, onSubmit }) => {
  const [inputs, setInputs] = useState({
    title: {
      value: "",
      isValid: true,
    },
    description: {
      value: "",
      isValid: true,
    },
  });

  const inputChangeHandler = (inputIdentifier, enteredValue) => {
    setInputs((curInputs) => {
      return {
        ...curInputs,
        [inputIdentifier]: { value: enteredValue, isValid: true },
      };
    });
  };

  const getCurrentDate = () => {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const submitHandler = () => {
    const notifyData = {
      title: inputs.title.value,
      description: inputs.description.value,
      date: getCurrentDate(),
    };

    const titleIsValid = notifyData.title.trim().length > 0;
    const descriptionIsValid = notifyData.description.trim().length > 0;

    if (!titleIsValid || !descriptionIsValid) {
      setInputs((curInputs) => {
        return {
          title: { value: curInputs.title.value, isValid: titleIsValid },
          description: {
            value: curInputs.description.value,
            isValid: descriptionIsValid,
          },
        };
      });
      return;
    }
    onSubmit(notifyData);
  };

  const formIsValid = !inputs.title.isValid || !inputs.description.isValid;

  return (
    <View>
      <Text style={styles.title}>Add Notification</Text>
      <Input
        label="Title"
        invalid={!inputs.title.isValid}
        textInputConfig={{
          keyboardType: "default",
          autoCorrect: false,
          onChangeText: inputChangeHandler.bind(this, "title"),
          value: inputs.title.value,
        }}
      />

      <Input
        label="Description"
        invalid={!inputs.description.isValid}
        textInputConfig={{
          multiline: true,
          autoCorrect: false,
          numberOfLines: 15,
          onChangeText: inputChangeHandler.bind(this, "description"),
          value: inputs.description.value,
        }}
      />
      {formIsValid && (
        <Text style={styles.errorText}>
          Invalid Input Values - Please check the entered data
        </Text>
      )}
      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={onCancel}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={submitHandler}>
          Create
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    marginVertical: 24,
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.navColor,
    textAlign: "center",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  errorText: {
    textAlign: "center",
    color: Colors.error,
    margin: 8,
  },
});

export default NotificationForm;
