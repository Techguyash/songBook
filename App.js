import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons } from "@expo/vector-icons";

import Colors from "./constants/Colors";
import SongOutput from "./screens/SongOutput";
import HomeScreen from "./screens/HomeScreen";
import NotificationScreen from "./screens/NotificationScreen";
import UserScreen from "./screens/UserScreen";
import MyFavouriteScreen from "./screens/MyFavouriteScreen";
import AppCtxProvider from "./store/AppContext";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function BottomNavigation() {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.background },
        headerTintColor: Colors.accentBackground,
        tabBarStyle: { backgroundColor: Colors.accentBackground },
        tabBarActiveTintColor: Colors.white,

        tabBarShowLabel: false,
      }}
    >
      <BottomTabs.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "Song Book",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "md-home-sharp" : "home-outline"}
              size={22}
              color={color}
            />
          ),
        }}
      />
      <BottomTabs.Screen
        name="favourite"
        component={MyFavouriteScreen}
        options={{
          title: "Favourite",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "heart-sharp" : "heart-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <BottomTabs.Screen
        name="notificationScreen"
        component={NotificationScreen}
        options={{
          title: "Notification",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={
                focused ? "ios-notifications-sharp" : "notifications-outline"
              }
              size={24}
              color={color}
            />
          ),

          tabBarBadge: "1",
        }}
      />
      <BottomTabs.Screen
        name="UserScreen"
        component={UserScreen}
        options={{
          title: "",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name="ios-settings-outline" size={24} color={color} />
          ),
          lazy: "true",
        }}
      />
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <AppCtxProvider>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              contentStyle: { backgroundColor: Colors.background },
            }}
          >
            <Stack.Screen
              name="bottomNav"
              component={BottomNavigation}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="songOutput"
              component={SongOutput}
              options={{ headerStyle: { backgroundColor: Colors.background } }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </AppCtxProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: Platform.OS === "android" ? 30 : 0,

    backgroundColor: Colors.background,
  },
});
