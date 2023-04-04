import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";

const NotificationContent = ({ date, title, description }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.date}>{date}</Text>
      </View>
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>

      {description ? (
        <View style={styles.content}>
          <Text style={styles.description}>{description}</Text>
        </View>
      ) : (
        <></>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    width: "100%",
  },
  date: {
    color: "#8e8d8f",
    fontSize: 13,
    padding: 5,
    fontWeight: "500",
  },
  title: {
    // backgroundColor: "white",
    fontWeight: "bold",
    fontSize: 17,
    padding: 5,
  },
  content: {
    // backgroundColor: "blue",
  },
  description: {
    fontSize: 15,
    padding: 5,
    // backgroundColor: "violet",
    textAlign: "left",
    lineHeight: 23,
  },
});

export default NotificationContent;
