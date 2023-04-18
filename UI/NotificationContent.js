import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import * as Linking from "expo-linking";

const NotificationContent = ({ date, title, description, link, linkTitle }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.date}>{date}</Text>
      </View>
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>

      {description && (
        <View style={styles.content}>
          <Text style={styles.description}>{description}</Text>
        </View>
      )}
      {link && (
        <Pressable
          onPress={() => {
            Linking.openURL(link);
          }}
        >
          <Text style={styles.hyperLink}>{linkTitle}</Text>
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    width: "100%",
  },

  hyperLink: {
    color: "red",
    padding: 5,
    fontSize: 16,
  },
  date: {
    color: "#8e8d8f",
    fontSize: 13,
    padding: 5,
    fontWeight: "500",
  },
  title: {
    fontWeight: "bold",
    fontSize: 17,
    padding: 5,
  },
  content: {},
  description: {
    fontSize: 15,
    padding: 5,
    textAlign: "left",
    lineHeight: 23,
  },
});

export default NotificationContent;
