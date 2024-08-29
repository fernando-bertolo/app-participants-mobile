import { View, Text } from "react-native";
import {styles} from "./styles"

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>

      <Text style={styles.eventDate}>
        Quarta, 28 de Agosto de 2024
      </Text>
    </View>
  )
}