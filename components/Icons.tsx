import FontAwesome from "@expo/vector-icons/FontAwesome";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

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

export const RankingIcon = (props: Partial<React.ComponentProps<typeof FontAwesome>>) => (
  <FontAwesome6 name="ranking-star" size={25} {...props} />
);

export const CalendarIcon = (props: Partial<React.ComponentProps<typeof Entypo>>) => (
  <Entypo name="calendar" size={28} {...props} />
);

export const TimelineIcon = (props: Partial<React.ComponentProps<typeof MaterialCommunityIcons>>) => (
  <MaterialCommunityIcons name="timeline-text-outline" size={28} {...props} />
);