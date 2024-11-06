import { ActivityIndicator, Image, ScrollView, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import playersData from "../assets/players_data.json";
import { imageMap } from "@/lib/imageMap";

interface PlayerInfo {
  nickname: string;
  name: string;
  country: string;
  birthday: string;
  age: number;
  team: string;
  position: string;
  years: string;
  img: string;
}

export default function PlayerDetail() {
  const { nickname } = useLocalSearchParams(); // usa 'nickname' en lugar de 'playerid'
  const [playerInfo, setPlayerInfo] = useState<PlayerInfo | null>(null);

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
              <Image
                className="mb-4 rounded"
                source={imageMap[playerInfo.img]}
                style={{ width: 214, height: 294 }}
              />
              <Text className="text-black text-center font-bold text-xl">
                {playerInfo.name}
              </Text>
              <Text className="text-black/70 mt-4 text-left mb-8 text-base">
                País: {playerInfo.country}
              </Text>
              <Text className="text-black/70 mt-2 text-left text-base">
                Equipo: {playerInfo.team}
              </Text>
              <Text className="text-black/70 mt-2 text-left text-base">
                Posición: {playerInfo.position}
              </Text>
              <Text className="text-black/70 mt-2 text-left text-base">
                Años jugados: {playerInfo.years}
              </Text>
            </View>
          </ScrollView>
        )}
      </View>
    </View>
  );
}
