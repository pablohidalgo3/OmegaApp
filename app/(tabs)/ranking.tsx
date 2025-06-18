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
import { Player as YearPlayer } from "../../interfaces/Player";

// Endpoints
const YEAR_PLAYERS_API_ENDPOINT =
  "https://g2historyapi.fly.dev/players/year";
const RANKING_API_ENDPOINT =
  "https://g2historyapi.fly.dev/ranking";

// Tier icon assets
const tierIcons: Record<string, any> = {
  diamond: require("../../assets/images/diamond.png"),
  master: require("../../assets/images/master.png"),
  grandmaster: require("../../assets/images/grandmaster.png"),
  challenger: require("../../assets/images/challenger.png"),
};

// Combined Player type
interface RankingPlayer {
  nickname: string;
  tier: string;
  lp: number;
  rank: number;
}

type Player = YearPlayer & RankingPlayer;

export default function RankingTab() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const currentYear = new Date().getFullYear();
        const [yearRes, rankRes] = await Promise.all([
          fetch(`${YEAR_PLAYERS_API_ENDPOINT}/${currentYear}`),
          fetch(RANKING_API_ENDPOINT),
        ]);
        if (!yearRes.ok || !rankRes.ok) {
          throw new Error("Error al obtener datos");
        }
        const currentPlayers: YearPlayer[] = await yearRes.json();
        const rankingPlayers: RankingPlayer[] = await rankRes.json();

        const merged = rankingPlayers.map((rp) => {
          const norm = rp.nickname.replace(/\s+/g, "").toLowerCase();
          const match = currentPlayers.find(
            (cp) => cp.nickname.replace(/\s+/g, "").toLowerCase() === norm
          );
          return {
            ...match,
            ...rp,
            nickname: match?.nickname ?? "",
            img: match?.img ?? "",
          } as Player;
        });

        setPlayers(merged);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error desconocido");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center bg-[#111111]">
        <ActivityIndicator color="#ef4444" size="large" />
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
    <View className="flex-1 bg-[#111111] pt-8">
      <FlatList
        data={players}
        keyExtractor={(item) => item.nickname || item.nickname}
        contentContainerStyle={{ paddingBottom: 80, paddingHorizontal: 16 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => {
          // Backgrounds and borders
          const cardBg =
            index === 0
              ? "bg-yellow-100"
              : index === 1
              ? "bg-gray-400"
              : index === 2
              ? "bg-orange-400"
              : "bg-white";
          const cardBorder =
            index === 0
              ? "border-yellow-500"
              : index === 1
              ? "border-gray-500"
              : index === 2
              ? "border-orange-600"
              : "border-gray-200";

          return (
            <Link href={`/${item.nickname}`} asChild>
              <Pressable
                className={`mb-6 rounded-2xl border ${cardBg} ${cardBorder} h-40`}
                style={{ elevation: 5 }}
              >
                <View className="flex-row items-center px-2 py-4 h-full">
                  {/* Rank */}
                  <Text className="w-12 text-center text-2xl font-bold text-gray-900 mr-3">
                    #{item.rank}
                  </Text>

                  {/* Avatar container to center image */}
                  <View className="size-28 rounded-full overflow-hidden mr-2 items-center justify-start">
                    {item.img && (
                      <Image
                        source={{ uri: item.img }}
                        className="size-48 rounded-full"
                        resizeMode="contain"
                      />
                    )}
                  </View>

                  {/* Info */}
                  {/* Info aligned right */}
                  {/* Info column centered */}
                  <View className="flex-1 justify-center items-center">
                    {/* Info column with separate rows centered */}
                    <View className="flex-col items-center">
                      <Text className="text-3xl font-bold text-gray-900">
                        {item.nickname}
                      </Text>
                      <View className="items-center justify-center">
                        <View className="flex-row items-center justify-center">
                          {tierIcons[item.tier.toLowerCase()] && (
                            <Image
                              source={tierIcons[item.tier.toLowerCase()]}
                              className="size-16 mr-2"
                            />
                          )}
                          <Text className="text-3xl font-semibold text-gray-700">
                            {item.tier}
                          </Text>
                        </View>
                        <Text className="text-xl text-gray-600">{item.lp} LP</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </Pressable>
            </Link>
          );
        }}
      />
    </View>
  );
}
