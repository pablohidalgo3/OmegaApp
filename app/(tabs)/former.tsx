import React, { useEffect, useState, useLayoutEffect } from "react";
import {
  View,
  FlatList,
  ActivityIndicator,
  Text,
  Image,
  Pressable,
  Modal,
  TouchableOpacity,
  Platform,
} from "react-native";
import { Link, useNavigation } from "expo-router";
import { Player } from "../../interfaces/Player";
import { formatYears } from "../../lib/formatYears";
import { positionOrder } from "../../lib/positionOrder";
import { Picker } from "@react-native-picker/picker";

const PLAYERS_API_URL = "https://g2historyapi-production.up.railway.app/players"; // URL para jugadores
const YEARS_API_URL = "https://g2historyapi-production.up.railway.app/years"; // URL para años

const PlayersList: React.FC = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [years, setYears] = useState<
    { year_identifier: string; label: string }[]
  >([]);
  const [selectedYear, setSelectedYear] = useState<string>("");
  const [isModalVisible, setModalVisible] = useState(false);
  const [loadingPlayers, setLoadingPlayers] = useState<boolean>(true);
  const [loadingYears, setLoadingYears] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigation = useNavigation();

  useEffect(() => {
    // Obtener años desde la API
    const fetchYears = async () => {
      setLoadingYears(true);
      try {
        const response = await fetch(YEARS_API_URL);
        if (!response.ok) {
          throw new Error("Error al obtener los años");
        }
        const data = await response.json();
        setYears(data);
        if (data.length > 0) {
          setSelectedYear(data[0].year_identifier); // Selecciona el primer año como predeterminado
        }
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoadingYears(false);
      }
    };

    fetchYears();
  }, []);

  useEffect(() => {
    // Obtener jugadores desde la API según el año seleccionado
    if (!selectedYear) return;

    const fetchPlayers = async () => {
      setLoadingPlayers(true);
      setError(null);

      try {
        const response = await fetch(PLAYERS_API_URL);
        if (!response.ok) {
          throw new Error("Error al obtener los jugadores");
        }

        const data: Player[] = await response.json();

        // Filtrar jugadores por año
        const filteredPlayers = data.filter((player) =>
          player.years.includes(selectedYear)
        );

        // Ordenar jugadores por posición
        const sortedPlayers = filteredPlayers.sort((a, b) => {
          const orderA =
            positionOrder[a.position as keyof typeof positionOrder] || 999;
          const orderB =
            positionOrder[b.position as keyof typeof positionOrder] || 999;
          return orderA - orderB;
        });

        setPlayers(sortedPlayers);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoadingPlayers(false);
      }
    };

    fetchPlayers();
  }, [selectedYear]);

  useLayoutEffect(() => {
    // Cambiar el headerRight con el año seleccionado
    navigation.setOptions({
      headerRight: () => (
        <Text
          className={`text-slate-950 font-bold ${
            selectedYear === "2016.2" || selectedYear === "2016.3"
              ? "text-xl"
              : "text-2xl"
          } me-3`}
        >
          {years.find((y) => y.year_identifier === selectedYear)?.label || ""}{" "}
          Roster
        </Text>
      ),
    });
  }, [navigation, selectedYear, years]);

  return (
    <View className="flex-1 bg-[#C8D9F0] pt-8 px-2">
      {/* Selector de año */}
      {loadingYears ? (
        <ActivityIndicator color={"#000"} size={"large"} />
      ) : (
        <View className="mb-6 mx-5 bg-[#92a2c8] rounded-lg">
          {Platform.OS === "ios" ? (
            <>
              <TouchableOpacity
                onPress={() => setModalVisible(true)}
                className="px-4 py-2 text-center bg-[#92a2c8] rounded-lg"
              >
                <Text className="text-center text-white">
                  {years.find((y) => y.year_identifier === selectedYear)
                    ?.label || ""}
                </Text>
              </TouchableOpacity>
              <Modal
                transparent={true}
                visible={isModalVisible}
                animationType="slide"
              >
                <View className="flex-1 justify-center items-center bg-black/50">
                  <View className="bg-white w-4/5 rounded-lg p-4">
                    <FlatList
                      data={years}
                      keyExtractor={(item) => item.year_identifier}
                      renderItem={({ item }) => (
                        <TouchableOpacity
                          onPress={() => {
                            setSelectedYear(item.year_identifier);
                            setModalVisible(false);
                          }}
                          className="py-2"
                        >
                          <Text
                            className={`text-center text-lg ${
                              selectedYear === item.year_identifier
                                ? "font-bold text-blue-600"
                                : "text-black"
                            }`}
                          >
                            {item.label}
                          </Text>
                        </TouchableOpacity>
                      )}
                    />
                    <TouchableOpacity
                      onPress={() => setModalVisible(false)}
                      className="mt-4 p-2 bg-blue-600 rounded-lg"
                    >
                      <Text className="text-center text-white">Close</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>
            </>
          ) : (
            <Picker
              selectedValue={selectedYear}
              onValueChange={(year) => setSelectedYear(year)}
              className="px-4 py-2 text-center rounded-lg"
            >
              {years.map((year) => (
                <Picker.Item
                  key={year.year_identifier}
                  label={year.label}
                  value={year.year_identifier}
                />
              ))}
            </Picker>
          )}
        </View>
      )}

      {loadingPlayers ? (
        <ActivityIndicator color={"#000"} size={"large"} />
      ) : error ? (
        <View className="flex-1 justify-center items-center">
          <Text className="text-xl text-red-500">{error}</Text>
        </View>
      ) : players.length === 0 ? (
        <View className="flex-1 justify-center items-center">
          <Text className="text-xl text-slate-950">No players found</Text>
        </View>
      ) : (
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
                      shadowOpacity: 0.1, // Reduce la opacidad de la sombra para iOS
                      shadowRadius: 3,
                    },
                    android: {
                      elevation: 4, // Mantén o ajusta la elevación para Android
                    },
                  }),
                }}
              >
                <Image
                  source={{ uri: item.img }} // Imagen desde la API
                  className="w-48 h-48 rounded-full mr-4"
                  resizeMode={
                    [
                      "brokenblade",
                      "yike",
                      "caps",
                      "hans sama",
                      "mikyx",
                    ].includes(item.nickname.toLowerCase())
                      ? "center"
                      : "cover"
                  }
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
