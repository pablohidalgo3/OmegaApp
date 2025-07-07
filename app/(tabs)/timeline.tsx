import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
} from "react-native";

const timeline = [
  {
    year: "2016",
    title: "Debut and Domination in Europe",
    description:
      "G2 debuted in the EU LCS, winning both Spring and Summer Splits. However, at both MSI and Worlds, the team failed to make it past the group stage.",
    image: require("../../assets/images/2016.jpg"),
  },
  {
    year: "2017",
    title: "Kings of Europe",
    description:
      "Champions once again in Spring and Summer, establishing themselves as the dominant European force. It was their first big international year, finishing as runner-up to SKT T1 at MSI and reaching quarterfinals at Worlds.",
    image: require("../../assets/images/2017.jpg"),
  },
  {
    year: "2018",
    title: "Dangerous Underdogs",
    description:
      "A renewed roster struggled domestically, but managed a historic run at Worlds, eliminating RNG in a legendary series. Unfortunately, they fell to Invictus Gaming, who would go on to be world champions.",
    image: require("../../assets/images/2018.jpg"),
  },
  {
    year: "2019",
    title: "The Golden Year",
    description:
      "LEC champions in both Spring and Summer with unprecedented dominance, which translated internationally by winning MSI, becoming the first and only European team to do so. After this milestone, G2 entered Worlds as clear favorites, defeating SKT T1 in one of the best series ever and reaching the final. However, the dream ended with a 0-3 loss to FunPlus Phoenix.",
    image: require("../../assets/images/2019.jpg"),
  },
  {
    year: "2020",
    title: "Perkz's Last Year",
    description:
      "G2 won both LEC splits again in a year marked by the pandemic and remote competition. There was no MSI this year, but the team made a strong run at Worlds, reaching the semifinals where they fell to eventual champions DAMWON. The club legend and icon Perkz said goodbye and signed with Cloud9.",
    image: require("../../assets/images/2020.jpg"),
  },
  {
    year: "2021",
    title: "End of the Golden Era",
    description:
      "After the promising signing of Rekkles, G2 failed to win a domestic title all year, culminating in a huge disappointment as they missed out on Worlds for the first time in their history.",
    image: require("../../assets/images/2021.jpg"),
  },
  {
    year: "2022",
    title: "Renewal and New Titles",
    description:
      "After the previous year's disappointment, big changes arrived. G2 won the Spring Split and qualified for MSI, where they lost in the semifinals to T1. They also qualified for Worlds but were eliminated in the group stage with a forgettable result.",
    image: require("../../assets/images/2022.jpg"),
  },
  {
    year: "2023",
    title: "Back to National Dominance",
    description:
      "After an up-and-down 2022, G2 won the LEC in Winter and Summer, though their MSI run was forgettable. They became the first ever LEC Grand Finals champions. At Worlds, the team started strong but couldn't turn that into results, being eliminated in the Swiss Stage.",
    image: require("../../assets/images/2023.jpg"),
  },
  {
    year: "2024",
    title: "Absolute Dominance in EMEA",
    description:
      "G2 dominated the LEC from the start, winning every split and the LEC Grand Finals. After a great showing at MSI, going toe-to-toe with the world's best, G2 entered Worlds with some doubts about their performance, which were confirmed after falling again in the Swiss Stage.",
    image: require("../../assets/images/2024.jpg"),
  },
];

export default function TimelineScreen() {
  return (
    <View className="flex-1 bg-[#111111] px-4 pt-6">
      <ScrollView
        contentContainerStyle={{ alignItems: "center", paddingVertical: 36 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="w-full items-center relative">
          {/* Línea central, ajustada automáticamente */}
          <View
            className="absolute left-1/2 top-0 w-1 bg-gray-700 z-0"
            style={{
              height: "100%", // Ajusta el valor si alguna tarjeta es mucho más larga
              marginLeft: -2, // Centra perfectamente la línea (w-1 => 4px, /2 = -2px)
            }}
          />
          {timeline.map((event, idx) => (
            <View
              key={event.year}
              className="w-full items-center mb-14 relative"
              style={{ minHeight: 340 }}
            >
              {/* Imagen */}
              <Image
                source={event.image}
                className="w-80 h-44 rounded-2xl shadow-lg border border-neutral-50 bg-gray-700 mb-2"
                resizeMode="cover"
              />

              {/* Punto central, perfectamente centrado */}
              <View
                className="absolute left-1/2 -translate-x-1/2 z-10"
                style={{
                  top: 176 + 16 - 31, // 176px image + 16px (la mitad de mt-8=32px gap) - 12px (radio del punto)
                  width: 22,
                  height: 22,
                  borderRadius: 12,
                  backgroundColor: "#EF4444",
                  borderWidth: 4,
                  borderColor: "#000",
                }}
              />

              {/* Tarjeta de año */}
              <View className="bg-gray-800 rounded-lg border border-gray-700 p-5 max-w-xl w-11/12 mt-8">
                <Text className="text-lg font-bold text-red-400 mb-2 text-center">
                  {event.year} · {event.title}
                </Text>
                <Text className="text-gray-300 text-base text-center">
                  {event.description}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
