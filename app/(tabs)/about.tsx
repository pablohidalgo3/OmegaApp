import { ScrollView, Text, View } from "react-native";

export default function About() {
  return (
    <View className="flex-1 bg-[#111111] px-4 pt-6">
      {/* Contenedor externo con el color de fondo general */}
      <ScrollView
        contentContainerStyle={{ alignItems: "center", paddingBottom: 80 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Fondo blanco ajustado al contenido */}
        <View className="p-4 w-full" style={{ alignSelf: "flex-start" }}>
          {/* Título principal */}
          <Text className="text-white font-extrabold text-4xl mb-6 text-center">
            About G2 Esports
          </Text>

          {/* Bloque destacado */}
          <View className="bg-[#262424] p-4 rounded-xl mb-6">
            <Text className="text-white font-bold text-2xl mb-3">
              Founded in 2014
            </Text>
            <Text className="text-[#c9c9c9] text-lg leading-6">
              G2 Esports is a European esports organization founded by Carlos
              "Ocelote" Rodríguez Santiago and Jens Hilgers. Known for
              innovation and excellence, G2 has become a global force in esports.
            </Text>
          </View>

          {/* Secciones informativas */}
          <View>
            <View className="mb-4">
              <Text className="text-white font-bold text-2xl mb-2">
                Origins and Growth
              </Text>
              <Text className="text-[#c9c9c9] text-lg leading-7">
                Originally named Gamers2, the organization rebranded to G2
                Esports in 2015. Headquartered in Berlin, Germany, G2 has its
                roots in Spain but operates globally, competing in multiple game
                titles.
              </Text>
            </View>

            <View className="mb-4">
              <Text className="text-white font-bold text-2xl mb-2">
                Achievements
              </Text>
              <Text className="text-[#c9c9c9] text-lg leading-7">
                G2 is the most awarded organization in Europe, with 15 national
                League of Legends titles. In 2019, G2 won the Mid-Season
                Invitational, becoming the only western team to do so.
              </Text>
              <Text className="text-[#c9c9c9] text-lg leading-7">
                In Rainbow Six Siege, G2 has won two world championships (2019
                and 2023) and competes in the European League (EUL).
              </Text>
            </View>

            <View>
              <Text className="text-white font-bold text-2xl mb-2">
                Strategic Partnerships
              </Text>
              <Text className="text-[#c9c9c9] text-lg leading-7">
                G2 collaborates with iconic brands like Logitech, Red Bull,
                Mastercard, Spotify, and Ralph Lauren, cementing its position as
                a market leader in esports innovation.
              </Text>
            </View>
          </View>

          {/* Mensaje final */}
          <View className="mt-8 p-4 bg-[#262424] rounded-xl">
            <Text className="text-[#c9c9c9] text-lg text-center font-semibold leading-7">
              G2 Esports continues to dominate the esports world, setting trends
              and achieving excellence across multiple disciplines. It remains
              one of the most respected organizations in the global esports
              arena.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
