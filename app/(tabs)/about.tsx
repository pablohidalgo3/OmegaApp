import { ScrollView, Text, View } from "react-native";

export default function About() {
  return (
    <View className="flex-1 bg-[#C8D9F0] pt-4 pb-2 px-3">
      <ScrollView className="bg-[#92a2c8] rounded-xl" showsVerticalScrollIndicator={false}>
        <Text className="text-black font-bold px-3 mt-4 mb-8 text-3xl">
          Sobre el proyecto
        </Text>

        <Text className="text-black px-3 mb-3 text-xl">
          G2 Esports es una organización europea de deportes electrónicos
          fundada el 24 de febrero de 2014 por el exjugador profesional Carlos
          "ocelote" Rodríguez Santiago y el inversor Jens Hilgers.
        </Text>
        <Text className="text-black px-3 mb-3 text-xl">
          Originalmente conocida como Gamers2, la organización cambió su nombre
          a G2 Esports el 15 de octubre de 2015. Aunque sus raíces están en
          España, G2 tiene su sede en Berlín, Alemania.
        </Text>
        <Text className="text-black px-3 mb-3 text-xl">
          G2 Esports compite en múltiples títulos de videojuegos, incluyendo
          League of Legends, Valorant, Counter-Strike 2, Hearthstone, Rocket
          League, Rainbow Six Siege, Fortnite e iRacing.
        </Text>
        <Text className="text-black px-3 mb-3 text-xl">
          Su equipo de League of Legends participa en la League of Legends EMEA
          Championship (LEC), la máxima competición europea del juego.
        </Text>
        <Text className="text-black px-3 mb-3 text-xl">
          A lo largo de su trayectoria, G2 ha obtenido quince títulos nacionales
          en Europa, siendo la organización más laureada en este ámbito. En
          2019, se convirtieron en el único equipo occidental en ganar el
          Mid-Season Invitational.
        </Text>
        <Text className="text-black px-3 mb-3 text-xl">
          En Rainbow Six Siege, G2 compite en la European League (EUL), la
          principal liga europea del juego.
        </Text>
        <Text className="text-black px-3 mb-3 text-xl">
          El equipo ha ganado dos campeonatos mundiales: el primero en 2019 al
          derrotar a Team Empire en la final del Six Invitational, y el segundo
          en 2023 tras una destacada remontada en la fase de eliminación.
        </Text>
        <Text className="text-black px-3 mb-3 text-xl">
          Además de sus logros competitivos, G2 Esports es conocida por su
          enfoque innovador y su capacidad para adaptarse a las tendencias
          cambiantes en el mundo de los deportes electrónicos.
        </Text>
        <Text className="text-black px-3 mb-3 text-xl">
          La organización ha establecido asociaciones con marcas reconocidas
          como Logitech, Red Bull, AOC, Philips, Pringles, Mastercard, Lenovo,
          Ralph Lauren, Metaplex, Spotify, Herman Miller y Next Level Racing, lo
          que refleja su influencia y presencia en la industria.
        </Text>
        <Text className="text-black px-3 mb-3 text-xl">
          A lo largo de los años, G2 ha demostrado ser una fuerza dominante en
          múltiples disciplinas de los deportes electrónicos, consolidándose
          como una de las organizaciones más exitosas y respetadas a nivel
          mundial.
        </Text>
      </ScrollView>
    </View>
  );
}
