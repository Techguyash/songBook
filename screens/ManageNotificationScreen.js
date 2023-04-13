import { useContext, useLayoutEffect } from "react";
import { View, StyleSheet, Text } from "react-native";

import {
  createNotification,
  deleteNotification,
} from "../api/notification-http";

import NotificationForm from "../components/manageNotification/NotificationForm";
import Colors from "../constants/Colors";
import { NotifyContext } from "../store/NotifyContext";

import IconButton from "../UI/IconButton";

const ManageNotificationScreen = ({ route, navigation }) => {
  const { addNotify, deleteNotify } = useContext(NotifyContext);

  const id = route.params?.id;

  const isEditing = !!id;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Delete Notification" : "Add Notification",
    });
  }, [navigation, isEditing]);

  const deleteNotificationHandler = async () => {
    deleteNotify(id);
    await deleteNotification(id);
    navigation.goBack();
  };

  const cancelHandler = () => {
    navigation.goBack();
  };

  const confirmHandler = async (data) => {
    const id = await createNotification(data);
    data = { ...data, id: id };
    addNotify(data);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {isEditing ? (
        <View>
          <Text style={styles.title}>Delete Notification</Text>
          <View style={styles.deleteContainer}>
            <IconButton
              icon="trash"
              color={Colors.error}
              size={36}
              onPress={deleteNotificationHandler}
            />
          </View>
        </View>
      ) : (
        <NotificationForm onCancel={cancelHandler} onSubmit={confirmHandler} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: Colors.background,
  },
  title: {
    marginVertical: 24,
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.navColor,
    textAlign: "center",
  },

  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: Colors.accentBackground,
    alignItems: "center",
  },
});

export default ManageNotificationScreen;
