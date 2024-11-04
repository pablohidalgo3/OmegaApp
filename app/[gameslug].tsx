import { ActivityIndicator, Image, ScrollView, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { getGameDetails } from "../lib/metacritic";
import { Score } from "../components/Score";

interface GameInfo {
  title: string;
  img: string;
  score: number;
  description: string;
}

export default function Detail() {
  const { gameslug } = useLocalSearchParams();
  const [gameInfo, setGameInfo] = useState<GameInfo | null>(null);

  useEffect(() => {
    if (gameslug) {
      getGameDetails(gameslug as string).then(setGameInfo);
    }
  }, [gameslug]);

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
                maxWidth: 300, // Ajusta el ancho máximo según tus necesidades
              }}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {gameInfo === null ? "" : gameInfo.title}
            </Text>
          ),
        }}
      />

      <View>
        {gameInfo === null ? (
          <ActivityIndicator color={"#000"} size={"large"} />
        ) : (
          <ScrollView>
            <View className="justify-center items-center text-center">
              <Image
                className="mb-4 rounded"
                source={{ uri: gameInfo.img }}
                style={{ width: 214, height: 294 }}
              />
              <Score score={gameInfo.score} maxScore={100} />
              <Text className="text-black text-center font-bold text-xl">
                {gameInfo.title}
              </Text>
              <Text className="text-black/70 mt-4 text-left mb-8 text-base">
                {gameInfo.description}
              </Text>
            </View>
          </ScrollView>
        )}
      </View>
    </View>
  );
}
