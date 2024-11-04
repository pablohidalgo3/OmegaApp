import { View, FlatList, ActivityIndicator } from "react-native";
import { useEffect, useState } from "react";
import { getLatestGames } from "../../lib/metacritic";
import { AnimatedGameCard } from "../../components/GameCard";

interface Game {
  slug: string;
  image: string;
  title: string;
  score: number;
  description: string;
}

export default function Index() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    getLatestGames().then((games) => {
      setGames(games);
    });
  }, []);

  return (
    <View className="flex-1 bg-[#C8D9F0] pt-4 px-2">
      {games.length === 0 ? (
        <ActivityIndicator color={"#fff"} size={"large"} />
      ) : (
        <FlatList
          data={games}
          keyExtractor={(game) => game.slug}
          renderItem={({ item, index }) => (
            <AnimatedGameCard game={item} index={index} />
          )}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
}
