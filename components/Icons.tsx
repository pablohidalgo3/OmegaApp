import FontAwesome from "@expo/vector-icons/FontAwesome";
import Entypo from '@expo/vector-icons/Entypo';

import { JSX } from "react";

export const HomeIcon = (props: JSX.IntrinsicAttributes) => (
  <FontAwesome name="home" size={32} color="black" {...props} />
);

export const InfoIcon = (props: JSX.IntrinsicAttributes) => (
  <FontAwesome name="info" size={32} color="black" {...props} />
);

export const FormerIcon = (props: JSX.IntrinsicAttributes) => (
  <Entypo name="back-in-time" size={32} color="black" {...props} />
);