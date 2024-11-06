import React, { useEffect, useState, useLayoutEffect } from "react";
import {
  View,
  FlatList,
  ActivityIndicator,
  Text,
  Image,
  Pressable,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Link, useNavigation } from "expo-router";
import playersData from "../../assets/players_data.json";
import { imageMap } from "../../lib/imageMap";
import { Player } from "../../interfaces/Player";
import { formatYears } from "../../lib/formatYears";
import { positionOrder } from "../../lib/positionOrder";
import { years } from "../../lib/years";
import { yearLabels } from "../../lib/yearLabels";

const PlayersList: React.FC = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [selectedYear, setSelectedYear] = useState<string>("2016.1");
  const navigation = useNavigation();

  useEffect(() => {
    // Filtrar jugadores por año y ordenar por posición
    const filteredPlayers = playersData
      .filter((player) => player.years.includes(selectedYear))
      .sort(
        (a, b) =>
          (positionOrder[a.position as keyof typeof positionOrder] || 999) -
          (positionOrder[b.position as keyof typeof positionOrder] || 999)
      );

    setPlayers(filteredPlayers);
  }, [selectedYear]);

  useLayoutEffect(() => {
    // Cambiar el headerRight con el año seleccionado
    navigation.setOptions({
      headerRight: () => (
        <Text
          className={`text-slate-950 font-bold ${
            selectedYear === "2016.2" || selectedYear === "2016.3" ? "text-xl" : "text-2xl"
          } me-3`}
        >
          {yearLabels[selectedYear] || selectedYear} Roster
        </Text>
      ),
    });
  }, [navigation, selectedYear]);
  

  return (
    <View className="flex-1 bg-[#C8D9F0] pt-8 px-2">
      {/* Selector de año */}
      <View className="mb-6 mx-5 bg-[#92a2c8] rounded-lg">
        <Picker
          selectedValue={selectedYear}
          onValueChange={(year) => setSelectedYear(year)}
          className="px-4 py-2 text-center rounded-lg"
        >
          {years.map((year) => (
            <Picker.Item
              key={year}
              label={yearLabels[year] || year}
              value={year}
            />
          ))}
        </Picker>
      </View>

      {players.length === 0 ? (
        <ActivityIndicator color={"#000"} size={"large"} />
      ) : (
        <FlatList
          data={players}
          keyExtractor={(player) => player.nickname}
          renderItem={({ item }) => (
            <Link href={`/${item.nickname}`} asChild>
              <Pressable className="flex-row items-center bg-[#92a2c8] mb-4 p-2 rounded-lg shadow-lg">
                <Image
                  source={imageMap[item.img]}
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
      )}
    </View>
  );
};

export default PlayersList;
