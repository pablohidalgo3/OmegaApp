import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  ActivityIndicator,
  Text,
  Image,
  Pressable,
} from "react-native";
import { Link, useNavigation } from "expo-router"; // o import { useNavigation } from "@react-navigation/native";
import playersData from "../../assets/players_data.json";
import imageMap from "../../lib/imageMap";

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

const PlayersList: React.FC = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const navigation = useNavigation();

  useEffect(() => {
    setPlayers(playersData);
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
                className="flex-row items-center bg-[#92a2c8] mb-4 p-4 rounded-lg shadow-lg"
              >
                <Image
                  source={imageMap[item.img]}
                  className="w-48 h-48 rounded-full mr-4"
                  resizeMode="center"
                />
                <View className="flex-1">
                  <Text className="text-3xl font-bold mb-1">{item.name}</Text>
                  <Text className="text-xl text-gray-600">{item.nickname}</Text>
                  <Text className="text-xl text-gray-600">{item.team}</Text>
                  <Text className="text-xl text-gray-600">{item.position}</Text>
                  <Text className="text-xl text-gray-600">Age: {item.age}</Text>
                  <Text className="text-xl text-gray-600">
                    Years: {item.years}
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
