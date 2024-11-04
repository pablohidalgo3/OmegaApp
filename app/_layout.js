import "../global.css";
import { StatusBar } from 'expo-status-bar';
import { Stack } from "expo-router";
import { View, useColorScheme } from "react-native";
import { Logo } from "../components/Logo";

export default function Layout() {

  const colorScheme = useColorScheme();
  const DarkStatusBar = () => (
    <StatusBar style='dark' />
  );

  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#C8D9F0" },
          headerShadowVisible: false,
          headerTintColor: "yellow",
          headerTitle: "",
          headerLeft: () => <Logo />,
        }}
      />
      {colorScheme === 'light' ? <DarkStatusBar /> : <DarkStatusBar />}
      <StatusBar />
    </View>
  );
}
