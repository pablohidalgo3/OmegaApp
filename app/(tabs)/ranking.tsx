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
import { LinearGradient } from "expo-linear-gradient";
import Constants from 'expo-constants';

const { apiUrl, apiKey } = Constants.expoConfig?.extra ?? { apiUrl: "", apiKey: "" };

// Endpoints
const YEAR_PLAYERS_API_ENDPOINT = apiUrl + "/players/year";
const RANKING_API_ENDPOINT = apiUrl + "/ranking";
const API_KEY = apiKey;

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
          fetch(`${YEAR_PLAYERS_API_ENDPOINT}/${currentYear}`, {
            headers: {
              "Authorization": `Bearer ${API_KEY}`
            }
          }),
          fetch(RANKING_API_ENDPOINT, {
            headers: {
              "Authorization": `Bearer ${API_KEY}`
            }
          }),
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
        keyExtractor={(item) => item.nickname}
        contentContainerStyle={{ paddingBottom: 80, paddingHorizontal: 16 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => {
          // sombra dinámica según posición
          const shadowColor =
            index === 0
              ? "rgb(231,243,106)"
              : index === 1
              ? "rgba(172,186,187,0.8)"
              : index === 2
              ? "rgb(184,115,51)"
              : "rgba(255,255,255,1)";

          return (
            <Link href={`/player/${item.nickname}`} asChild>
              <Pressable
                className="mb-6 rounded-2xl overflow-hidden"
              >
                <LinearGradient
                  colors={["#f87171", "#0f172a"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  className="h-40 p-4 flex-row items-center"
                >
                  {/* Rank */}
                  <Text className="text-2xl font-bold text-[#FBFBFB] mr-4 drop-shadow-[0_6px_4px_rgba(0,0,0,0.6)]">
                    #{item.rank}
                  </Text>

                  {/* Avatar */}
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
                  <View className="flex-1 items-center">
                    <Text className="mb-1 text-2xl font-bold text-[#FBFBFB]">
                      {item.nickname}
                    </Text>
                    <View className="flex-row items-center gap-2">
                      <Image
                        source={tierIcons[item.tier.toLowerCase()]}
                        className="w-14 h-14"
                      />
                      <View>
                        <Text className="text-2xl text-[#FBFBFB]">
                          {item.tier}
                        </Text>
                        <Text className="text-xl text-[#FBFBFB]">
                          {item.lp} LP
                        </Text>
                      </View>
                    </View>
                  </View>
                </LinearGradient>
              </Pressable>
            </Link>
          );
        }}
      />
    </View>
  );
}
