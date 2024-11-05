import "../../global.css";
import { Tabs } from "expo-router";
import { HomeIcon, InfoIcon } from "../../components/Icons";
import { Logo } from "@/components/Logo";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: "#C8D9F0"},
        headerStatusBarHeight: 38,
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
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          tabBarIcon: ({ color }) => <InfoIcon color={color} />,
        }}
      />
    </Tabs>
  );
}
