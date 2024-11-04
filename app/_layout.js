import "../global.css";
import { setStatusBarStyle } from "expo-status-bar";
import { Stack } from "expo-router";
import { View, useColorScheme } from "react-native";
import { Logo } from "../components/Logo";
import { useEffect } from "react";

export default function Layout() {

  useEffect(() => {
    setTimeout(() => {
      setStatusBarStyle("dark");
    }, 0);
  }, []);

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
    </View>
  );
}
