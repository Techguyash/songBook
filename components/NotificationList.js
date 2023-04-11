import { StyleSheet, View } from "react-native";
import RoundedContainer from "../UI/RoundedContainer";
import { Ionicons } from "@expo/vector-icons";
import NotificationContent from "../UI/NotificationContent";
import Colors from "../constants/Colors";

const NotificationList = (props) => {
  return (
    <RoundedContainer>
      <View style={styles.container}>
        <View style={styles.userArea}>
          <NotificationContent {...props} />
        </View>

        <View style={styles.adminMenu}>
          <Ionicons name="ellipsis-vertical" size={22} color="black" />
        </View>
      </View>
    </RoundedContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    maxHeight: 350,
    backgroundColor: Colors.white,
  },
  userArea: {
    flex: 7,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  adminMenu: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default NotificationList;
