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
import SettingsScreen from "./screens/SettingsScreen";
import MyFavouriteScreen from "./screens/MyFavouriteScreen";
import AppCtxProvider from "./store/AppContext";
import LoginScreen from "./screens/LoginScreen";
import ManageSongsScreen from "./screens/ManageSongsScreen";
import ManageNotificationScreen from "./screens/ManageNotificationScreen";
import NotifyCtxProvider from "./store/NotifyContext";
import Toast from "react-native-toast-message";
import AboutUsScreen from "./screens/AboutUsScreen";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function BottomNavigation() {
  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: {
          backgroundColor: Colors.background,
          borderBottomColor: "black",
          borderBottomWidth: 1,
          height: 105,
        },
        headerTintColor: Colors.accentBackground,
        tabBarStyle: { backgroundColor: Colors.accentBackground },
        tabBarActiveTintColor: Colors.white,
        tabBarShowLabel: false,
      })}
    >
      <BottomTabs.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "Song Book",
          tabBarIcon: ({ color, focused }) => (
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
          tabBarIcon: ({ color, focused }) => (
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
        component={SettingsScreen}
        options={{
          title: "",
          headerStyle: {
            backgroundColor: Colors.white,
            height: 10,
          },
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
    <NavigationContainer>
      <AppCtxProvider>
        <NotifyCtxProvider>
          <View style={styles.container}>
            <StatusBar style="auto" />
            <Stack.Navigator
              screenOptions={{
                headerStyle: {
                  backgroundColor: Colors.background,
                  borderBottomColor: "black",
                  borderBottomWidth: 1,
                  height: 105,
                },
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
                options={{
                  headerStyle: { backgroundColor: Colors.background },
                }}
              />

              <Stack.Screen
                name="loginScreen"
                component={LoginScreen}
                options={{ headerShown: false }}
              />

              <Stack.Screen
                name="manageSongScreen"
                component={ManageSongsScreen}
                options={{
                  presentation: "modal",
                }}
              />
              <Stack.Screen
                name="manageNotificationScreen"
                component={ManageNotificationScreen}
                options={{
                  presentation: "modal",
                }}
              />

              <Stack.Screen
                name="aboutUsScreen"
                component={AboutUsScreen}
                options={{
                  title: "",
                  headerShown: false,
                }}
              />
            </Stack.Navigator>
          </View>
        </NotifyCtxProvider>
      </AppCtxProvider>
      <Toast />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: Platform.OS === "android" ? 30 : 0,
    backgroundColor: Colors.background,
  },
});
