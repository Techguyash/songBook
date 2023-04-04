import { ScrollView, StyleSheet, Text, View } from "react-native";
import NotificationList from "../components/NotificationList";
import Colors from "../constants/Colors";

const NotificationScreen = () => {
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
