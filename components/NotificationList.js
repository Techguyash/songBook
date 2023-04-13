import { Pressable, StyleSheet, View } from "react-native";
import RoundedContainer from "../UI/RoundedContainer";
import NotificationContent from "../UI/NotificationContent";
import Colors from "../constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { AppContext } from "../store/AppContext";

const NotificationList = (props) => {
  const { authenticated } = useContext(AppContext);

  const navigation = useNavigation();

  const navigateToAdminScreen = () => {
    navigation.navigate("manageNotificationScreen", { id: props.id });
  };

  return (
    <Pressable onPress={authenticated ? navigateToAdminScreen : () => {}}>
      <RoundedContainer>
        <View style={styles.container}>
          <View style={styles.userArea}>
            <NotificationContent {...props} />
          </View>
        </View>
      </RoundedContainer>
    </Pressable>
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
