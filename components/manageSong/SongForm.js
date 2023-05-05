import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Input from "./Input";
import Colors from "../../constants/Colors";
import Button from "../../UI/Button";

const SongForm = ({ onCancel, onSubmit, submitButtonLabel, defaultValues }) => {
  const [inputs, setInputs] = useState({
    number: {
      value: defaultValues ? defaultValues.number.toString() : "",
      isValid: true,
    },
    title: {
      value: defaultValues ? defaultValues.title : "",
      isValid: true,
    },
    lyrics: {
      value: defaultValues ? defaultValues.lyrics : "",
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

  const submitHandler = () => {
    const songData = {
      number: +inputs.number.value,
      title: inputs.title.value,
      lyrics: inputs.lyrics.value,
    };

    const numberIsValid = !isNaN(songData.number) && songData.number > 0;
    const titleIsValid = songData.title.trim().length > 0;
    const lyricsIsValid = songData.lyrics.trim().length > 0;

    if (!numberIsValid || !titleIsValid || !lyricsIsValid) {
      setInputs((curInputs) => {
        return {
          number: { value: curInputs.number.value, isValid: numberIsValid },
          title: { value: curInputs.title.value, isValid: titleIsValid },
          lyrics: { value: curInputs.lyrics.value, isValid: lyricsIsValid },
        };
      });
      return;
    }
    onSubmit(songData);
  };

  const formIsValid =
    !inputs.number.isValid || !inputs.title.isValid || !inputs.lyrics.isValid;

  return (
    <ScrollView>
      <KeyboardAvoidingView behavior="position">
        <View>
          <Text style={styles.title}>Add New Song</Text>
          <Input
            label="Number"
            invalid={!inputs.number.isValid}
            textInputConfig={{
              keyboardType: "numeric",
              autoCorrect: false,
              onChangeText: inputChangeHandler.bind(this, "number"),
              value: inputs.number.value,
            }}
          />
          <Input
            label="Title"
            invalid={!inputs.title.isValid}
            textInputConfig={{
              autoCorrect: false,
              onChangeText: inputChangeHandler.bind(this, "title"),
              value: inputs.title.value,
            }}
          />
          <Input
            label="Lyrics"
            invalid={!inputs.lyrics.isValid}
            textInputConfig={{
              multiline: true,
              autoCorrect: false,
              numberOfLines: 15,
              onChangeText: inputChangeHandler.bind(this, "lyrics"),
              value: inputs.lyrics.value,
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
              {submitButtonLabel}
            </Button>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    marginVertical: 5,
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

export default SongForm;
