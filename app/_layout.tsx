import "../global.css";
import { Stack } from "expo-router";
import { setStatusBarBackgroundColor, setStatusBarStyle } from "expo-status-bar";
import { useEffect } from "react";

export default function RootLayout() {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setStatusBarStyle("light");
      setStatusBarBackgroundColor("#111111");
    }, 100); // Prueba con 100ms o 200ms para ver si mejora la consistencia
  
    return () => clearTimeout(timeoutId); // Limpia el timeout al desmontar el componente
  }, []);
  

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
