import { Stack } from 'expo-router';

export default function ModalsLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        presentation: 'modal',
      }}
    >
      <Stack.Screen name="meditation" />
      <Stack.Screen name="mantra-jaap" />
      <Stack.Screen name="journal" />
      <Stack.Screen name="ai-guide" />
      <Stack.Screen name="prayers" />
      <Stack.Screen name="manifestation" />
      <Stack.Screen name="voice-log" />
      <Stack.Screen name="sin-log" />
      <Stack.Screen name="pricing" />
      <Stack.Screen name="settings" />
      <Stack.Screen name="privacy-policy" />
      <Stack.Screen name="terms-of-service" />
    </Stack>
  );
}
