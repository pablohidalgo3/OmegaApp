import { ActivityIndicator, Image, ScrollView, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { Player } from "../interfaces/Player";
import { formatYears } from "@/lib/formatYears"; // Asegúrate de tener este import configurado correctamente
import g2logo from "../assets/images/g2logo.png";
import { Platform } from "react-native";

const API_URL = "https://g2historyapi.fly.dev/players"; // Cambia esto si tu API está desplegada en un servidor remoto
const API_KEY = "053eed99-1e5d-41a1-83fc-8fad2aa3bc1e";

export default function PlayerDetail() {
  const { nickname } = useLocalSearchParams();
  const [playerInfo, setPlayerInfo] = useState<Player | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPlayer = async () => {
      if (nickname) {
        try {
          const response = await fetch(`${API_URL}/${nickname}`, {
            headers: {
              "Authorization": `Bearer ${API_KEY}`
            }
          });
          if (!response.ok) {
            throw new Error("Jugador no encontrado");
          }
          const player: Player = await response.json();
          setPlayerInfo(player);
        } catch (err) {
          if (err instanceof Error) {
            setError(err.message);
          } else {
            setError("An unknown error occurred");
          }
        } finally {
          setLoading(false);
        }
      }
    };

    fetchPlayer();
  }, [nickname]);

  const renderTrophies = (titles: string | null) => {
    if (!titles || titles.trim() === "" || titles.trim() === "None yet") {
      return (
        <Text className="text-xl text-red-500 mt-6 text-center">
          Forging a leyend...
        </Text>
      );
    } else if (titles.trim() === "None") {
      return (
        <Text className="text-xl text-red-500 mt-6 text-center">
          No trophies
        </Text>
      );
    }

    const titleMap = {
      "Rift Rivals": "🥇", // Menor importancia
      "EU LCS": "🎖️",
      LEC: "🏆", // Mayor importancia
      MSI: "🌟", // Muy especial
    };

    const processedTitles = titles.split(";").map((title) => title.trim());

    return (
      <View className="mt-6 w-11/12 mb-8">
        <Text className="text-white text-center text-xl font-bold mb-4">
          G2 Trophies
        </Text>
        <View className="bg-[#262424] rounded-lg p-4">
          {processedTitles
            .reduce((rows: string[][], title, index) => {
              const row = Math.floor(index / 3); // 3 trofeos por fila
              if (!rows[row]) rows[row] = [];
              rows[row].push(title);
              return rows;
            }, [])
            .map((row, rowIndex) => (
              <View key={rowIndex} className="flex-row justify-evenly mb-4">
                {row.map((title, colIndex) => (
                  <View
                    key={colIndex}
                    className="items-center"
                    style={{ width: "30%" }}
                  >
                    <Text className="text-4xl">
                      {
                        titleMap[
                          Object.keys(titleMap).find(
                            (key): key is keyof typeof titleMap =>
                              title.includes(key)
                          ) || "LEC"
                        ]
                      }
                    </Text>
                    <Text
                      className="text-sm text-[#c9c9c9] text-center mt-2"
                      style={{ flexWrap: "wrap" }}
                    >
                      {title}
                    </Text>
                  </View>
                ))}
              </View>
            ))}
        </View>
      </View>
    );
  };

  return (
    <View className="flex-1 bg-[#111111] pt-4 px-2">
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#111111" },
          headerShadowVisible: false,
          headerTintColor: "white",
          headerTitleAlign: "center",
          headerBackTitle: "Volver",
          headerTitle: () => (
            <Text
              style={{
                color: "white",
                fontSize: 20,
                fontWeight: "bold",
                width: 200,
                maxWidth: 200,
                textAlign: "center",
              }}
            >
              {playerInfo ? playerInfo.nickname : "Cargando..."}
            </Text>
          ),
        }}
      />

      <View>
        {loading ? (
          <ActivityIndicator color={"#ef4444"} size={"large"} />
        ) : error ? (
          <View className="flex-1 justify-center items-center">
            <Text className="text-xl text-red-500">{error}</Text>
          </View>
        ) : (
          playerInfo && (
            <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
              <View className="justify-center items-center text-center">
                <View className="relative w-[260px] h-[310px] mb-4">
                  <Image
                    source={g2logo}
                    style={{
                      position: "absolute",
                      width: 260,
                      height: 300,
                      left: "50%",
                      top: "50%",
                      transform: [{ translateX: -130 }, { translateY: -150 }],
                      borderRadius: 10,
                      opacity: 0.4,
                      resizeMode: "cover",
                    }}
                  />
                  <Image
                    source={{ uri: playerInfo.img }}
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
                <Text className="text-white text-center font-bold text-2xl">
                  {playerInfo.name}
                </Text>

                <View
                  className="bg-[#262424] shadow-md rounded-lg p-4 mt-4 w-11/12"
                  style={{
                    ...Platform.select({
                      ios: {
                        shadowColor: "#000",
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.1,
                        shadowRadius: 3,
                      },
                      android: {
                        elevation: 4,
                      },
                    }),
                  }}
                >
                  <Text className="text-white font-semibold text-lg mb-2">
                    Country:
                  </Text>
                  <Text className="text-[#c9c9c9] text-base mb-4">
                    {playerInfo.country}
                  </Text>
                  <Text className="text-white font-semibold text-lg mb-2">
                    Position:
                  </Text>
                  <Text className="text-[#c9c9c9] text-base mb-4">
                    {playerInfo.position}
                  </Text>

                  <Text className="text-white font-semibold text-lg mb-2">
                    Years Played:
                  </Text>
                  <Text className="text-[#c9c9c9] text-base">
                    {formatYears(playerInfo.years)}
                  </Text>
                </View>
                {renderTrophies(playerInfo.titles)}
              </View>
            </ScrollView>
          )
        )}
      </View>
    </View>
  );
}
