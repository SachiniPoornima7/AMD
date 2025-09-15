import { MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

const tabs = [
  { label: "Home", name: "home", icon: "home-filled" },
  { label: "Workouts", name: "workouts", icon: "workout-menu" },
  { label: "Profile", name: "profile", icon: "person" },
  { label: "Settings", name: "settings", icon: "settings" },
] as const;

export default function DashboardLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#007AFF",
        tabBarInactiveTintColor: "#999",
        tabBarStyle: { backgroundColor: "#ccc" },
      }}
    >
      {tabs.map(({ name, icon, label }) => (
        <Tabs.Screen
          key={name}
          name={name}
          options={{
            title: label,
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name={icon as any} color={color} size={size} />
            ),
          }}
          listeners={({ navigation }) => ({
            tabPress: (e) => {
              if (name === "workouts") {
                e.preventDefault();
                navigation.navigate("workouts/index"); // ✅ always go to list
              }
            },
          })}
        />
      ))}
    </Tabs>
  );
}
