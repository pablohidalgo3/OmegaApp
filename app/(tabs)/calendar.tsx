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

const CALENDAR_API_ENDPOINT =
  "https://g2historyapi-production.up.railway.app/matches/upcoming";

interface Match {
  id: string;
  tournament: { name: string; url?: string };
  bo: string;
  team1Logo?: string;
  team1: string;
  team2Logo?: string;
  team2: string;
  date: string; // “May 4, 2025 - 19:00 CEST”
  status?: "LIVE" | "FINALIZED" | null;
  streams: { twitch?: string; youtube?: string };
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
        const res = await fetch(CALENDAR_API_ENDPOINT);
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
            if (d.getTime() < now.getTime()) return null;

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
      contentContainerStyle={{ paddingBottom: 80 }}
      className="bg-[#111111] pt-8 px-4"
      renderItem={({ item }) => (
        <View className="mb-6 bg-gray-800 rounded-lg overflow-hidden shadow-lg">
          <View className="p-4">
            {/* Header */}
            <View className="flex-row justify-between items-center mb-2">
              <Text className="text-sm font-semibold text-gray-400">
                {item.tournament.name}
              </Text>
              <View className="bg-gray-700 rounded-full px-3 py-1">
                <Text className="text-xs text-white font-semibold">
                  {item.bo.toUpperCase()}
                </Text>
              </View>
            </View>

            {/* Teams */}
            <View className="flex-row justify-between items-center mb-4">
              <View className="flex-col items-center w-2/5">
                <Image
                  source={{ uri: item.team1Logo || "" }}
                  className="w-16 h-16 mb-2"
                  resizeMode="contain"
                />
                <Text className="font-bold text-xl text-white">
                  {item.team1}
                </Text>
              </View>
              <Text className="text-xl font-bold text-gray-400">VS</Text>
              <View className="flex-col items-center w-2/5">
                <Image
                  source={{ uri: item.team2Logo || "" }}
                  className="w-16 h-16 mb-2"
                  resizeMode="contain"
                />
                <Text className="font-bold text-xl text-white">
                  {item.team2}
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
                style={{ marginRight: 4, marginBottom: 12 }}
              >
                <Path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </Svg>
              <Text className="text-sm text-gray-400 mb-3">{item.date}</Text>
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
                {item.streams.twitch && (
                  <Pressable
                    onPress={() => Linking.openURL(item.streams.twitch!)}
                    className="bg-purple-700 px-3 py-1 rounded-full flex-row items-center"
                  >
                    <Svg
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                      fill="white"
                      style={{ marginRight: 4 }}
                    >
                      <Path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z" />
                    </Svg>
                    <Text className="text-xs text-white font-semibold">
                      Twitch
                    </Text>
                  </Pressable>
                )}
                {item.streams.youtube && (
                  <Pressable
                    onPress={() => Linking.openURL(item.streams.youtube!)}
                    className="bg-red-700 px-3 py-1 rounded-full flex-row items-center"
                  >
                    <Svg
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                      fill="white"
                      style={{ marginRight: 4 }}
                    >
                      <Path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </Svg>
                    <Text className="text-xs text-white font-semibold">
                      YouTube
                    </Text>
                  </Pressable>
                )}
              </View>
              <Pressable
                onPress={() =>
                  Linking.openURL(
                    `https://g2historyapi-production.up.railway.app/calendar/${item.id}`
                  )
                }
                className="bg-gray-700 px-4 py-2 rounded-full"
              >
                <Text className="text-xs text-white font-semibold">
                  📅 Add to calendar
                </Text>
              </Pressable>
            </View>

            {/* Tournament link */}
            {item.tournament.url && (
              <Pressable
                onPress={() => Linking.openURL(item.tournament.url!)}
                className="mt-3"
              >
                <Text className="text-xs text-gray-400">
                  View tournament details →
                </Text>
              </Pressable>
            )}
          </View>
        </View>
      )}
    />
  );
}
