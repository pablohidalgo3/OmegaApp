import "../global.css";
import { StatusBar } from 'expo-status-bar';
import { Link, Stack } from "expo-router";
import { Pressable, View } from "react-native";
import { Logo } from "../components/Logo";
import { CircleInfoIcon } from "../components/Icons";

export default function Layout() {
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
      <StatusBar style='dark' />
    </View>
  );
}
