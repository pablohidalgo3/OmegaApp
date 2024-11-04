import { ActivityIndicator, Image, ScrollView, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Screen } from "../components/Screen";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { getGameDetails } from "../lib/metacritic";
import { Score } from "../components/Score";

export default function Detail() {
  const { gameslug } = useLocalSearchParams();
  const [gameInfo, setGameInfo] = useState(null);

  useEffect(() => {
    if (gameslug) {
      getGameDetails(gameslug).then(setGameInfo);
    }
  }, [gameslug]);

  return (
    <Screen>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#C8D9F0" },
          headerShadowVisible: false,
          headerTintColor: "black",
          headerTitleAlign: "center",
          headerLeft: () => {},
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
          headerRight: () => {},
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
    </Screen>
  );
}
