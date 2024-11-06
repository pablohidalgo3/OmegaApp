import "../../global.css";
import { Tabs } from "expo-router";
import { HomeIcon, InfoIcon, FormerIcon } from "../../components/Icons";
import { Logo } from "@/components/Logo";
import { Text } from "react-native";
import { useState } from "react";

export default function TabLayout() {
  const [selectedYear, setSelectedYear] = useState("2024"); // Año inicial por defecto

  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: "#C8D9F0" },
        headerStatusBarHeight: 42,
        headerTitle: "",
        headerLeft: () => <Logo style={{ marginLeft: 10 }} />,
        headerShadowVisible: false,
        headerTintColor: "#fff",
        tabBarStyle: {
          backgroundColor: "#92a2b8",
          borderTopWidth: 0, // Elimina la línea superior de la barra en ambas plataformas
          shadowColor: "transparent", // Elimina sombras en iOS
          elevation: 0, // Elimina sombras en Android
        },
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
        tabBarItemStyle: {
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarIconStyle: {
          marginBottom: 0, // Elimina cualquier margen inferior
        },
        tabBarLabelStyle: {
          display: "none", // Oculta las etiquetas si solo deseas mostrar iconos
        },
      }}
    >
      {/* Primera pestaña: "2024 Roster" */}
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
          headerRight: () => (
            <Text className="text-slate-950 font-bold text-2xl me-3">2024 Roster</Text>
          ),
        }}
      />

      {/* Segunda pestaña: Histórico con año dinámico */}
      <Tabs.Screen
        name="former"
        options={{
          tabBarIcon: ({ color }) => <FormerIcon color={color} />,
          headerRight: () => (
            <Text className="text-slate-950 font-bold text-xl me-3">{selectedYear}</Text>
          ),
        }}
        listeners={{
          tabPress: () => {
            // Opcional: establecer el año cuando se selecciona la pestaña
            setSelectedYear(selectedYear);
          },
        }}
      />

      {/* Tercera pestaña: "About" */}
      <Tabs.Screen
        name="about"
        options={{
          tabBarIcon: ({ color }) => <InfoIcon color={color} />,
          headerRight: () => (
            <Text className="text-slate-950 font-bold text-2xl me-3">About</Text>
          ),
        }}
      />
    </Tabs>
  );
}
