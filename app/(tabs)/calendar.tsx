import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  ActivityIndicator,
  Text,
  Image,
  Pressable,
  Linking,
} from "react-native";
import { Svg, Path } from "react-native-svg";
import { LinearGradient } from "expo-linear-gradient";
import Constants from "expo-constants";

const { apiUrl, apiKey } = Constants.expoConfig?.extra ?? {
  apiUrl: "",
  apiKey: "",
};

const CALENDAR_API_ENDPOINT = apiUrl + "/matches/upcoming";
const API_KEY = apiKey;

interface Match {
  id: string;
  tournament_name: string;
  tournament_url: string;
  tournament_logo?: string;
  bo: string;
  team1Logo?: string;
  team1: string;
  team2Logo?: string;
  team2: string;
  date: string; // “May 4, 2025 - 19:00 CEST”
  status?: "LIVE" | "FINALIZED" | null;
  streams_twitch?: string;
  streams_youtube?: string;
}

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function CalendarTab() {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(CALENDAR_API_ENDPOINT, {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
          },
        });
        if (!res.ok) throw new Error("Error al obtener calendario");
        const rawMatches: any[] = await res.json();

        const now = new Date();
        const dateFormatter = new Intl.DateTimeFormat("en-US", {
          timeZone: "Europe/Madrid",
          month: "long",
          day: "numeric",
          year: "numeric",
        });
        const timeFormatter = new Intl.DateTimeFormat("en-US", {
          timeZone: "Europe/Madrid",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
          timeZoneName: "short",
        });

        const localized = rawMatches
          .map((match) => {
            // Extraer partes de la fecha: “May 24, 2025 - 15:00 UTC+0”
            const m = String(match.date).match(
              /(\w+)\s+(\d+),\s+(\d+)\s*-\s*(\d{1,2}):(\d{2})\s*UTC([+-]\d+)/
            );
            if (!m) return null;
            const [, monthName, day, year, hour, minute] = m;
            const monthIndex = MONTHS.indexOf(monthName);
            if (monthIndex < 0) return null;

            // Construir ISO string en UTC
            const iso = `${year}-${String(monthIndex + 1).padStart(
              2,
              "0"
            )}-${day.padStart(2, "0")}T${hour.padStart(2, "0")}:${minute}:00Z`;
            const d = new Date(iso);
            if (isNaN(d.getTime())) return null;

            // Filtrar partidos pasados

            const today = new Date(
              now.getFullYear(),
              now.getMonth(),
              now.getDate()
            );
            const matchDay = new Date(
              d.getFullYear(),
              d.getMonth(),
              d.getDate()
            );

            if (matchDay < today) return null;

            // Formatear fecha y hora a CEST/CET
            const datePart = dateFormatter.format(d);
            let timePart = timeFormatter
              .format(d)
              .replace("GMT+2", "CEST")
              .replace("GMT+1", "CET");

            // Estado LIVE / FINALIZED
            const diffMinutes = (now.getTime() - d.getTime()) / 60000;
            let status: "LIVE" | "FINALIZED" | null = null;
            if (diffMinutes >= 0 && diffMinutes <= 50) status = "LIVE";
            else if (diffMinutes > 50) status = "FINALIZED";

            return {
              ...match,
              date: `${datePart} - ${timePart}`,
              status,
              team1Logo: match.team1Logo?.replace(/\d+px/, "100px"),
              team2Logo: match.team2Logo?.replace(/\d+px/, "100px"),
            } as Match;
          })
          .filter(Boolean) as Match[];

        setMatches(localized);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return (
      <View className="flex-1 bg-[#111111] justify-center items-center">
        <ActivityIndicator size="large" color="#ef4444" />
      </View>
    );
  }

  if (matches.length === 0) {
    return (
      <View className="flex-1 bg-[#111111] px-4 justify-center items-center">
        <Text className="text-xl text-gray-400 text-center">
          No upcoming matches scheduled at the moment.
        </Text>
        <Text className="mt-2 text-gray-400 text-center">
          Check back later for updates.
        </Text>
      </View>
    );
  }

  return (
    <FlatList
      data={matches}
      keyExtractor={(m) => m.id}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ padding: 16, paddingBottom: 80 }}
      className="bg-[#111111]"
      renderItem={({ item }) => {
        // Determinar color de la pill según torneo
        let tournamentFrom = "from-gray-100";
        if (item.tournament_name.includes("LEC"))
          tournamentFrom = "from-teal-600";
        else if (item.tournament_name.includes("MSI"))
          tournamentFrom = "from-yellow-200";
        else if (item.tournament_name.includes("Worlds"))
          tournamentFrom = "from-amber-50";

        return (
          <LinearGradient
            // Degradado igual a bg-gradient-to-bl from-gray-700 to-gray-950
            colors={["#374151", "#0f172a"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            className="mb-6 rounded-lg overflow-hidden shadow-lg"
          >
            <View className="p-4">
              {/* Header */}
              <View className="flex-row justify-between items-center mb-8">
                <LinearGradient
                  colors={[
                    item.tournament_name.includes("LEC")
                      ? "#14B8A6"
                      : item.tournament_name.includes("MSI")
                      ? "#fde047"
                      : item.tournament_name.includes("Worlds")
                      ? "#fef3c7"
                      : "#f3f4f6",
                    "transparent",
                  ]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 2 }}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    padding: 8, // equiv a p-2
                    borderRadius: 24, // equiv a rounded-3xl
                    // sombra:
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.25,
                    shadowRadius: 8,
                    elevation: 20,
                    gap: 12, // equiv a gap-3
                    marginBottom: 8, // equiv a mb-2
                  }}
                >
                  {item.tournament_logo && (
                    <Image
                      source={{ uri: item.tournament_logo }}
                      style={{ width: 28, height: 28, borderRadius: 14 }}
                    />
                  )}
                  <Text className="font-bold text-lg text-white">
                    {item.tournament_name}
                  </Text>
                </LinearGradient>

                <View className="bg-gray-700 rounded-full mb-2 px-3 py-1 shadow-2xl shadow-black">
                  <Text className="text-xl text-white font-semibold">
                    {item.bo.toUpperCase()}
                  </Text>
                </View>
              </View>

              {/* Teams */}
              <View className="flex-row justify-between items-center mb-6">
                <View className="flex-col items-center w-2/5">
                  <Image
                    source={{ uri: item.team1Logo || "" }}
                    className="w-20 h-20 mb-2 drop-shadow-[0_6px_4px_rgba(0,0,0,0.6)]"
                    resizeMode="contain"
                  />
                  <Text className="font-bold text-xl text-white">
                    {item.team1}
                  </Text>
                </View>
                <Text className="text-3xl font-black text-gray-400">VS</Text>
                <View className="flex-col items-center w-2/5">
                  <Image
                    source={{
                      uri:
                        item.team2Logo ||
                        "https://tvmatcheslive.com/league-of-legends/international/lol-champions-korea-summer/damwon-gaming.png",
                    }}
                    className="w-20 h-20 mb-2 drop-shadow-[0_6px_4px_rgba(0,0,0,0.6)]"
                    resizeMode="contain"
                  />
                  <Text className="font-bold text-xl text-white">
                    {item.team2 || "TBD"}
                  </Text>
                </View>
              </View>

              {/* Date & Status */}
              <View className="flex-row items-center">
                <Svg
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgb(112, 120, 132)"
                  style={{ marginRight: 4, marginBottom: 10 }}
                >
                  <Path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </Svg>
                <Text className="text-md text-gray-400 mb-3">{item.date}</Text>
              </View>

              {/* Status */}
              {item.status === "LIVE" && (
                <Text className="text-red-500 font-bold mb-2">LIVE!</Text>
              )}
              {item.status === "FINALIZED" && (
                <Text className="text-gray-400 font-semibold mb-2">
                  FINALIZED
                </Text>
              )}

              {/* Streams & Calendar */}
              <View className="flex-row flex-wrap justify-between items-center">
                <View className="flex-row flex-wrap gap-2 mb-2">
                  {item.streams_twitch && (
                    <Pressable
                      onPress={() => Linking.openURL(item.streams_twitch!)}
                      className="bg-purple-700 px-4 py-2 rounded-full flex-row items-center"
                    >
                      <Svg
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        fill="white"
                      >
                        <Path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z" />
                      </Svg>
                    </Pressable>
                  )}
                  {item.streams_youtube && (
                    <Pressable
                      onPress={() => Linking.openURL(item.streams_youtube!)}
                      className="bg-red-700 px-4 py-1 rounded-full flex-row items-center"
                    >
                      <Svg
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        fill="white"
                      >
                        <Path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </Svg>
                    </Pressable>
                  )}
                </View>
                <Pressable
                  onPress={() =>
                    Linking.openURL(`${apiUrl}/calendar/${item.id}`)
                  }
                  className="bg-gray-700 px-4 py-2 rounded-full"
                >
                  <Text className="text-xl text-white font-semibold">📅</Text>
                </Pressable>
              </View>

              {/* Tournament link */}
              {item.tournament_url && (
                <Pressable
                  onPress={() => Linking.openURL(item.tournament_url!)}
                  className="mt-3"
                >
                  <Text className="text-md text-gray-400">
                    View tournament details →
                  </Text>
                </Pressable>
              )}
            </View>
          </LinearGradient>
        );
      }}
    />
  );
}
