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

interface Player {
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

const positionOrder: Record<string, number> = {
  Top: 1,
  Jungler: 2,
  Mid: 3,
  Adc: 4,
  Support: 5,
};

// Función para formatear los años en rangos consecutivos
const formatYears = (years: string) => {
  // Convertir a un array de números, eliminar duplicados y ordenar
  const yearsArray = Array.from(new Set(years.split(", ").map(Number))).sort((a, b) => a - b);
  const ranges = [];
  let start = yearsArray[0];
  let end = yearsArray[0];

  for (let i = 1; i < yearsArray.length; i++) {
    if (yearsArray[i] === end + 1) {
      end = yearsArray[i];
    } else {
      // Agregar el rango anterior al resultado
      ranges.push(start === end ? `${start}` : `${start}-${end}`);
      start = yearsArray[i];
      end = yearsArray[i];
    }
  }
  // Agregar el último rango al resultado
  ranges.push(start === end ? `${start}` : `${start}-${end}`);
  
  return ranges.join(" | ");
};

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
