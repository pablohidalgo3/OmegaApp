import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  ActivityIndicator,
  Text,
  Image,
  Pressable,
} from "react-native";
import { Link } from "expo-router";
import { Player } from "../../interfaces/Player";
import { formatYears } from "../../lib/formatYears";
import { positionOrder } from "../../lib/positionOrder";

const API_URL = "https://g2historyapi-production.up.railway.app/players/year";
const currentYear = new Date().getFullYear().toString();

const PlayersList: React.FC = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await fetch(API_URL + "/" + currentYear);
        if (!response.ok) {
          throw new Error("Error al obtener los jugadores");
        }
        const data: Player[] = await response.json();

        // Ordenar los jugadores por posición
        const orderedPlayers = data.sort(
          (a, b) =>
            (positionOrder[a.position as keyof typeof positionOrder] || 999) -
            (positionOrder[b.position as keyof typeof positionOrder] || 999)
        );

        setPlayers(orderedPlayers);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchPlayers();
  }, []);

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center bg-[#111111]">
        <ActivityIndicator color="#fff" size="large" />
      </View>
    );
  }

  if (error) {
    return (
      <View className="flex-1 justify-center items-center bg-[#111111]">
        <Text className="text-xl text-[#FF4655]">{error}</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-[#111111] pt-7 px-2">
      <FlatList
        data={players}
        keyExtractor={(player) => player.nickname}
        renderItem={({ item }) => (
          <Link href={`/${item.nickname}`} asChild>
            <Pressable
              className="bg-[#262424] mb-6 rounded-3xl shadow-lg overflow-hidden"
              style={{
                padding: 16,
                marginHorizontal: 16,
                elevation: 5,
              }}
            >
              {/* Contenedor con texto del rol en el fondo */}
              <View className="relative w-full h-48 mb-4">
                {/* Texto del rol en grande */}
                <Text
                  className={`absolute ${
                    ["top", "mid", "adc"].includes(item.position.toLowerCase())
                      ? "text-9xl"
                      : "text-7xl"
                  } font-extrabold text-[#FF4655] w-full text-center`}
                  style={{
                    top: "50%",
                    transform: [{ translateY: -32 }], // Ajuste para centrar verticalmente
                    zIndex: 1,
                  }}
                >
                  {item.position.toUpperCase()}
                </Text>

                {/* Foto del jugador */}
                <Image
                  source={{ uri: item.img }}
                  className="w-full h-full object-cover"
                  style={{ position: "absolute", zIndex: 2 }}
                  resizeMode="contain"
                />
              </View>

              {/* Información del jugador */}
              <View className="flex-col items-start">
                <Text className="text-3xl font-bold text-[#ffffff]">
                  {item.nickname}
                </Text>
                <Text className="text-lg text-[#c9c9c9]">{item.name}</Text>
                <Text className="text-lg text-[#c9c9c9]">
                  {item.country} | {item.position}
                </Text>
                <Text className="text-sm text-[#7d7d7d]">
                  Age: {item.age} | Years: {formatYears(item.years)}
                </Text>
              </View>
            </Pressable>
          </Link>
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 70 }}
      />
    </View>
  );
};

export default PlayersList;
