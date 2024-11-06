import { ActivityIndicator, Image, ScrollView, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import playersData from "../assets/players_data.json";
import { imageMap } from "@/lib/imageMap";
import g2logo from "../assets/images/g2logo.png";
import { Player } from "../interfaces/Player";
import { formatYears } from "@/lib/formatYears"; // Asegúrate de tener este import configurado correctamente

export default function PlayerDetail() {
  const { nickname } = useLocalSearchParams(); // usa 'nickname' en lugar de 'playerid'
  const [playerInfo, setPlayerInfo] = useState<Player | null>(null);

  useEffect(() => {
    if (nickname) {
      const player = playersData.find((p) => p.nickname === nickname);
      setPlayerInfo(player || null);
    }
  }, [nickname]);

  return (
    <View className="flex-1 bg-[#C8D9F0] pt-4 px-2">
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#C8D9F0" },
          headerShadowVisible: false,
          headerTintColor: "black",
          headerTitleAlign: "center",
          headerTitle: () => (
            <Text
              style={{
                color: "black",
                fontSize: 20,
                fontWeight: "bold",
                maxWidth: 300,
              }}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {playerInfo ? playerInfo.nickname : ""}
            </Text>
          ),
        }}
      />

      <View>
        {playerInfo === null ? (
          <ActivityIndicator color={"#000"} size={"large"} />
        ) : (
          <ScrollView>
            <View className="justify-center items-center text-center">
              <View className="relative w-[260px] h-[310px] mb-4">
                {/* Imagen de fondo, con un ancho ligeramente más grande */}
                <Image
                  source={g2logo}
                  style={{
                    position: "absolute",
                    width: 260,
                    height: 300, // Altura ligeramente aumentada
                    left: "50%", // Centra horizontalmente
                    top: "50%", // Centra verticalmente
                    transform: [{ translateX: -130 }, { translateY: -154 }], // Ajusta el valor de translateY basado en el nuevo alto
                    borderRadius: 10,
                    opacity: 0.4, // Ajusta la opacidad para dar un efecto de fondo transparentado
                    resizeMode: "cover",
                  }}
                />

                {/* Imagen principal, mantiene el tamaño original */}
                <Image
                  source={imageMap[playerInfo.img]}
                  style={{
                    width: 214,
                    height: 294,
                    borderRadius: 10,
                    resizeMode: "contain",
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    transform: [{ translateX: -107 }, { translateY: -147 }],
                  }}
                />
              </View>

              <Text className="text-black text-center font-bold text-2xl">
                {playerInfo.name}
              </Text>

              <View className="bg-[#92a2c8] shadow-md rounded-lg p-4 mt-4 w-11/12">
                <Text className="text-slate-950 font-semibold text-lg mb-2">
                  Country:
                </Text>
                <Text className="text-slate-950 text-base mb-4">
                  {playerInfo.country}
                </Text>
                <Text className="text-slate-950 font-semibold text-lg mb-2">
                  Position:
                </Text>
                <Text className="text-slate-950 text-base mb-4">
                  {playerInfo.position}
                </Text>

                <Text className="text-slate-950 font-semibold text-lg mb-2">
                  Years Played:
                </Text>
                <Text className="text-slate-950 text-base">
                  {formatYears(playerInfo.years)}
                </Text>
              </View>
            </View>
          </ScrollView>
        )}
      </View>
    </View>
  );
}
