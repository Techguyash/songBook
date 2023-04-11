import { View, Text, TextInput, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const Input = ({ label, textInputConfig, invalid }) => {
  const inputStyles = [styles.input];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultipleLine);
  }
  return (
    <View style={styles.inputContainer}>
      <Text style={[styles.label, invalid && styles.invalidLabel]}>
        {label}
      </Text>
      <TextInput
        style={[inputStyles, invalid && styles.invalidInput]}
        {...textInputConfig}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  label: {
    fontSize: 16,
    color: Colors.black,
    marginBottom: 4,
  },
  input: {
    backgroundColor: Colors.white,
    color: Colors.backgroundText,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
  },
  inputMultipleLine: {
    minHeight: 200,
    textAlignVertical: "top",
  },
  invalidLabel: {
    color: Colors.error,
  },
  invalidInput: {
    backgroundColor: Colors.errorLight,
  },
});

export default Input;
