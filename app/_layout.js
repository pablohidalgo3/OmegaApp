import "../global.css";
import { setStatusBarStyle } from "expo-status-bar";
import { Stack } from "expo-router";
import { View } from "react-native";
import { Logo } from "../components/Logo";
import { useEffect } from "react";

export default function Layout() {

  return (
    <View style={{ flex: 1 }}>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#C8D9F0" },
          headerShadowVisible: false,
          headerTintColor: "yellow",
          headerTitle: "",
          headerLeft: () => <Logo />,
          statusBarStyle: "dark",
          statusBarColor: "#C8D9F0"
        }}
      />
    </View>
  );
}
