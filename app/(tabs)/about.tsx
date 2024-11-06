import { ScrollView, Text, View } from "react-native";

export default function About() {
  return (
    <View className="flex-1 bg-[#C8D9F0] pt-4 pb-2 px-3">
      <ScrollView className="bg-[#92a2c8] rounded-xl" showsVerticalScrollIndicator={false}>
        <Text className="text-black font-bold px-3 mt-4 mb-8 text-3xl">
          About the Project
        </Text>

        <Text className="text-black px-3 mb-3 text-xl">
          G2 Esports is a European esports organization founded on February 24, 2014, by former professional player Carlos "Ocelote" Rodríguez Santiago and investor Jens Hilgers.
        </Text>
        <Text className="text-black px-3 mb-3 text-xl">
          Originally known as Gamers2, the organization changed its name to G2 Esports on October 15, 2015. Although it has its roots in Spain, G2 is headquartered in Berlin, Germany.
        </Text>
        <Text className="text-black px-3 mb-3 text-xl">
          G2 Esports competes in multiple video game titles, including League of Legends, Valorant, Counter-Strike 2, Hearthstone, Rocket League, Rainbow Six Siege, Fortnite, and iRacing.
        </Text>
        <Text className="text-black px-3 mb-3 text-xl">
          Its League of Legends team competes in the League of Legends EMEA Championship (LEC), the top European competition for the game.
        </Text>
        <Text className="text-black px-3 mb-3 text-xl">
          Throughout its history, G2 has won fifteen national titles in Europe, making it the most awarded organization in this field. In 2019, they became the only western team to win the Mid-Season Invitational.
        </Text>
        <Text className="text-black px-3 mb-3 text-xl">
          In Rainbow Six Siege, G2 competes in the European League (EUL), the main European league for the game.
        </Text>
        <Text className="text-black px-3 mb-3 text-xl">
          The team has won two world championships: the first in 2019 by defeating Team Empire in the Six Invitational final, and the second in 2023 after an impressive comeback in the elimination stage.
        </Text>
        <Text className="text-black px-3 mb-3 text-xl">
          In addition to its competitive achievements, G2 Esports is known for its innovative approach and ability to adapt to changing trends in the world of esports.
        </Text>
        <Text className="text-black px-3 mb-3 text-xl">
          The organization has established partnerships with well-known brands such as Logitech, Red Bull, AOC, Philips, Pringles, Mastercard, Lenovo, Ralph Lauren, Metaplex, Spotify, Herman Miller, and Next Level Racing, reflecting its influence and presence in the industry.
        </Text>
        <Text className="text-black px-3 mb-3 text-xl">
          Over the years, G2 has proven to be a dominant force in multiple esports disciplines, cementing itself as one of the most successful and respected organizations worldwide.
        </Text>
      </ScrollView>
    </View>
  );
}
