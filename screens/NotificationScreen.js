import { useContext, useLayoutEffect } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import NotificationList from "../components/NotificationList";
import Colors from "../constants/Colors";
import { AppContext } from "../store/AppContext";

const NotificationScreen = ({ navigation }) => {
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
              />
            )}
          </View>
        );
      },
    });
  }, [authenticated]);

  return (
    <ScrollView style={styles.container}>
      <NotificationList
        date={"31/1/2023"}
        title="Friday Schedule Changed"
        description=" மேல்வீட்டறையினிலே நிரப்பிய பரலோக அக்கினி ஆவி ஆத்துமாவை முற்றும்
          முழுவதும் ந"
      />

      <NotificationList
        date={"02/06/2023"}
        title="Notification 2"
        description="அக்கினி ஆவி  முற்றும் முழுவதும் ந"
      />
      <NotificationList date={"02/06/2023"} title="Notification 3" />
      <NotificationList
        date={"31/1/2023"}
        title="Friday Schedule Changed"
        description="மேல்வீட்டறையினிலே நிரப்பிய பரலோக அக்கினி ஆவி ஆத்துமாவை முற்றும்
          முழுவதும் ந மேல்வீட்டறையினிலே நிரப்பிய பரலோக அக்கினி ஆவி ஆத்துமாவை முற்றும்"
      />
      <NotificationList
        date={"31/1/2023"}
        title="Friday Schedule Changed"
        description=" மேல்வீட்டறையினிலே நிரப்பிய பரலோக அக்கினி ஆவி ஆத்துமாவை முற்றும்
          முழுவதும் ந"
      />

      <NotificationList
        date={"02/06/2023"}
        title="Notification 2"
        description="அக்கினி ஆவி  முற்றும் முழுவதும் ந"
      />
    </ScrollView>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});
