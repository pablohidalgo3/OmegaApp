import "../../global.css";
import { Tabs } from "expo-router";
import { HomeIcon, InfoIcon, FormerIcon } from "../../components/Icons";
import { Logo } from "@/components/Logo";
import { Text, View, StyleSheet } from "react-native";
import { useState } from "react";

export default function TabLayout() {
  const [selectedYear, setSelectedYear] = useState();

  return (
    <View style={styles.container}>
      <Tabs
        screenOptions={{
          headerStyle: { backgroundColor: "#111111" },
          headerStatusBarHeight: 42,
          headerTitle: "",
          headerLeft: () => <Logo style={{ marginLeft: 10 }} />,
          headerShadowVisible: false,
          headerTintColor: "#000",
          tabBarStyle: [styles.tabBar],
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "#E6E6E6",
          tabBarItemStyle: {
            justifyContent: "center",
            alignItems: "center",
          },
          tabBarIconStyle: { marginBottom: 0 },
          tabBarLabelStyle: { display: "none" },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: ({ color }) => <HomeIcon color={color} />,
            headerRight: () => (
              <Text className="text-white font-bold text-2xl me-3 mb-1">
                2024 Roster
              </Text>
            ),
          }}
        />
        <Tabs.Screen
          name="former"
          options={{
            tabBarIcon: ({ color }) => <FormerIcon color={color} />,
            headerRight: () => (
              <Text className="text-white font-bold text-xl me-3">
                {selectedYear}
              </Text>
            ),
          }}
          listeners={{
            tabPress: () => {
              setSelectedYear(selectedYear);
            },
          }}
        />
        <Tabs.Screen
          name="about"
          options={{
            tabBarIcon: ({ color }) => <InfoIcon color={color} />,
            headerRight: () => (
              <Text className="text-white font-bold text-2xl me-3 mb-1">
                About
              </Text>
            ),
          }}
        />
      </Tabs>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  tabBar: {
    position: "absolute",
    bottom: 10,
    left: 20,
    right: 20,
    borderRadius: 30,
    backgroundColor: "#f9f9f9",
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    height: 60,
    paddingHorizontal: 10,
    borderTopWidth: 0,
  },
});

