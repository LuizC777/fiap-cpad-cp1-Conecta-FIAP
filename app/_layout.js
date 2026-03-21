import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export default function Layout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "#000" }}>
      <Tabs.Screen
        name="HomeScreen"
        options={{
          title: "TELA 1",
          tabBarIcon: ({ color }) => (
            <Ionicons name="bug-outline" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="ScreenTwo"
        options={{
          title: "TELA 2",
          tabBarIcon: ({ color }) => (
            <Ionicons name="bug-outline" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="ScreenThree"
        options={{
          title: "TELA 3",
          tabBarIcon: ({ color }) => (
            <Ionicons name="bug-outline" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
