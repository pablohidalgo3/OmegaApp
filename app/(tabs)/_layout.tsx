import "../../global.css";
import { Tabs } from "expo-router";
import {
  HomeIcon,
  InfoIcon,
  FormerIcon,
  RankingIcon,
  CalendarIcon,
  TimelineIcon,
} from "../../components/Icons";
import { Logo } from "@/components/Logo";
import {
  Text,
  View,
  StyleSheet,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";
import { useState } from "react";

export default function TabLayout() {
  const [selectedYear, setSelectedYear] = useState();

  return (
    <View style={styles.container}>
      <Tabs
        screenOptions={{
          headerStyle: {
            backgroundColor: "#111111",
            height: Platform.OS === "ios" ? 124 : 70,
          },
          headerStatusBarHeight: Platform.OS === "ios" ? 70 : 15,
          headerTitle: "",
          headerLeft: () => (
            <Logo style={{ marginLeft: 10 }} tvParallaxProperties={undefined} />
          ),
          headerShadowVisible: false,
          headerTintColor: "#000",
          tabBarStyle: [styles.tabBar],
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "#d4d2d2",
          tabBarItemStyle: {
            justifyContent: "center",
            alignItems: "center",
            top: Platform.OS === "ios" ? 15 : -1,
          },
          tabBarIconStyle: { marginBottom: 0, height: 32 },
          tabBarLabelStyle: { display: "none" },
          // Desactiva el ripple globalmente en todos los botones
          tabBarButton: (props) => (
            <TouchableWithoutFeedback onPress={props.onPress} accessible={true}>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 10, // Aumenta el área táctil
                  margin: -10, // Compensa el padding para que no desplace el ícono
                }}
              >
                {props.children}
              </View>
            </TouchableWithoutFeedback>
          ),
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: ({ color }) => <HomeIcon color={color} />,
            headerRight: () => (
              <Text className="text-white font-bold text-2xl me-3 mb-1">
                {new Date().getFullYear()} Roster
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
          name="ranking"
          options={{
            tabBarIcon: ({ color }) => <RankingIcon color={color} />,
            headerRight: () => (
              <Text className="text-white font-bold text-2xl me-3 mb-1">
                Ranking
              </Text>
            ),
          }}
        />
        <Tabs.Screen
          name="calendar"
          options={{
            tabBarIcon: ({ color }) => <CalendarIcon color={color} />,
            headerRight: () => (
              <Text className="text-white font-bold text-2xl me-3 mb-1">
                Calendar
              </Text>
            ),
          }}
        />
        <Tabs.Screen
          name="about"
          options={{
            tabBarIcon: ({ color }) => <TimelineIcon color={color} />,
            headerRight: () => (
              <Text className="text-white font-bold text-2xl me-3 mb-1">
                Timeline
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
    backgroundColor: "#000",
  },
  tabBar: {
    position: "absolute",
    bottom: Platform.OS === "ios" ? 20 : 20,
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
    marginHorizontal: 20,
  },
});
