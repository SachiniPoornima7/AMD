import { Stack } from "expo-router";

export default function RecipesLayout() {
  return (
    <Stack screenOptions={{ headerShown: true, animation: "slide_from_right" }}>
      <Stack.Screen name="index" options={{ title: "Workouts" }} />
      <Stack.Screen name="[id]" options={{ title: "Workout" }} />
      <Stack.Screen name="edit" options={{ title: "Edit Workout" }} />
      <Stack.Screen name="create" options={{ title: "New Workout" }} />
    </Stack>
  );
}
