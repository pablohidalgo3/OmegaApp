import FontAwesome from "@expo/vector-icons/FontAwesome";
import Entypo from "@expo/vector-icons/Entypo";

// Ajuste de tipos para aceptar propiedades genéricas
export const HomeIcon = (props: Partial<React.ComponentProps<typeof FontAwesome>>) => (
  <FontAwesome name="home" size={32} {...props} />
);

export const InfoIcon = (props: Partial<React.ComponentProps<typeof FontAwesome>>) => (
  <FontAwesome name="info" size={32} {...props} />
);

export const FormerIcon = (props: Partial<React.ComponentProps<typeof Entypo>>) => (
  <Entypo name="back-in-time" size={32} {...props} />
);
