import { useContext, useLayoutEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import NotificationList from "../components/NotificationList";
import Colors from "../constants/Colors";
import { AppContext } from "../store/AppContext";

import { NotifyContext } from "../store/NotifyContext";

const NotificationScreen = ({ navigation }) => {
  const { notifications, getAllNotify } = useContext(NotifyContext);
  const { authenticated } = useContext(AppContext);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <View style={styles.headerContainer}>
            {authenticated && (
              <Ionicons
                name="add-outline"
                size={26}
                style={{
                  marginRight: 25,
                  fontSize: 32,
                }}
                onPress={() => {
                  navigation.navigate("manageNotificationScreen");
                }}
              />
            )}
          </View>
        );
      },
    });
  }, [authenticated]);

  useLayoutEffect(() => {
    getAllNotify();
  }, [notifications]);

  return (
    <View style={styles.container}>
      <FlatList
        data={notifications}
        renderItem={(notify) => {
          return (
            <NotificationList
              id={notify.item.id}
              date={notify.item.date}
              title={notify.item.title}
              description={notify.item.description}
              link={notify.item.link}
              linkTitle={notify.item.linkTitle}
            />
          );
        }}
        keyExtractor={(notify) => notify.id}
      />
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});
