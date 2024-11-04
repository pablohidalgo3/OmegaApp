import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { JSX } from "react";

export const CircleInfoIcon = (props: JSX.IntrinsicAttributes) => (
  <FontAwesome6 name="circle-info" size={24} color="white" {...props} />
);

export const HomeIcon = (props: JSX.IntrinsicAttributes) => (
  <FontAwesome name="home" size={32} color="white" {...props} />
);

export const InfoIcon = (props: JSX.IntrinsicAttributes) => (
  <FontAwesome name="info" size={32} color="white" {...props} />
);