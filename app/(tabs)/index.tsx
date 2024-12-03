import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  ActivityIndicator,
  Text,
  Image,
  Pressable,
} from "react-native";
import { Link, useNavigation } from "expo-router";
import { Player } from "../../interfaces/Player";
import { formatYears } from "../../lib/formatYears";
import { positionOrder } from "../../lib/positionOrder";
import { Platform } from "react-native";

const API_URL = "https://g2historyapi.vercel.app/players"; // Cambia esto si la API está desplegada en un servidor remoto

const PlayersList: React.FC = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error("Error al obtener los jugadores");
        }
        const data: Player[] = await response.json();

        // Filtrar y ordenar los jugadores
        const filteredPlayers = data
          .filter((player) => player.years.includes("2024"))
          .sort(
            (a, b) =>
              (positionOrder[a.position as keyof typeof positionOrder] || 999) -
              (positionOrder[b.position as keyof typeof positionOrder] || 999)
          );

        setPlayers(filteredPlayers);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPlayers();
  }, []);

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center" style={{ backgroundColor: "#C8D9F0" }}>
        <ActivityIndicator color={"#000"} size={"large"} />
      </View>
    );
  }

  if (error) {
    return (
      <View className="flex-1 justify-center items-center" style={{ backgroundColor: "#C8D9F0" }}>
        <Text className="text-xl text-red-500">{error}</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-[#C8D9F0] pt-4 px-2 justify-center">
      <FlatList
        data={players}
        keyExtractor={(player) => player.nickname}
        renderItem={({ item }) => (
          <Link href={`/${item.nickname}`} asChild>
            <Pressable
              className="flex-row items-center bg-[#92a2c8] mb-4 p-2 rounded-lg"
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
              <Image
                source={{ uri: item.img }} // Cambiado para usar la URL desde la API
                className="w-48 h-48 rounded-full mr-4"
                resizeMode="center"
              />
              <View className="flex-1">
                <Text className="text-3xl font-bold mb-1">
                  {item.nickname}
                </Text>
                <Text className="text-xl text-slate-950">{item.name}</Text>
                <Text className="text-xl text-slate-950">{item.country}</Text>
                <Text className="text-xl text-slate-950">
                  {item.position}
                </Text>
                <Text className="text-xl text-slate-950">
                  Age: {item.age}
                </Text>
                <Text className="text-xl text-slate-950">
                  Years: {formatYears(item.years)}
                </Text>
              </View>
            </Pressable>
          </Link>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default PlayersList;