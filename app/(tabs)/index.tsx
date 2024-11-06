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
import playersData from "../../assets/players_data.json";
import { currentRoster2024 } from "../../lib/imageMap";
import { Player } from "../../interfaces/Player";
import { formatYears } from "../../lib/formatYears";
import { positionOrder } from "../../lib/positionOrder";

const PlayersList: React.FC = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const navigation = useNavigation();

  useEffect(() => {
    // Filtrar jugadores del año 2024 y ordenar por posición
    const filteredPlayers = playersData
      .filter((player) => player.years.includes("2024"))
      .sort(
        (a, b) =>
          (positionOrder[a.position as keyof typeof positionOrder] || 999) -
          (positionOrder[b.position as keyof typeof positionOrder] || 999)
      );

    setPlayers(filteredPlayers);
  }, []);

  return (
    <View className="flex-1 bg-[#C8D9F0] pt-4 px-2 justify-center">
      {players.length === 0 ? (
        <ActivityIndicator color={"#000"} size={"large"} />
      ) : (
        <FlatList
          data={players}
          keyExtractor={(player) => player.nickname}
          renderItem={({ item }) => (
            <Link href={`/${item.nickname}`} asChild>
              <Pressable // Navegación al detalle
                className="flex-row items-center bg-[#92a2c8] mb-4 p-2 rounded-lg shadow-lg"
              >
                <Image
                  source={currentRoster2024[item.img]}
                  className="w-48 h-48 rounded-full mr-4"
                  resizeMode="center"
                />
                <View className="flex-1">
                  <Text className="text-3xl font-bold mb-1">{item.nickname}</Text>
                  <Text className="text-xl text-slate-950">{item.name}</Text>
                  <Text className="text-xl text-slate-950">{item.country}</Text>
                  <Text className="text-xl text-slate-950">{item.position}</Text>
                  <Text className="text-xl text-slate-950">Age: {item.age}</Text>
                  <Text className="text-xl text-slate-950">
                    Years: {formatYears(item.years)}
                  </Text>
                </View>
              </Pressable>
            </Link>
          )}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export default PlayersList;
