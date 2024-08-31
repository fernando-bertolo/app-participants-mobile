import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList
} from "react-native";
import { styles } from "./styles"
import { Participant } from "../../components/Participant";

export default function Home() {

  const participants = [
    'Fernando',
    'Ana Julia',
    'Jully',
    'Sueli',
    'Fernando Bertolo',
    'Valentina',
    'Rafa',
    'Jeca',
    'Maike',
    'Leninha',
    'Nina',
    'Bebel',
    'Caramelo',
    'Chuck',
  ];

  function handleParticipantAdd() {
    console.log('Clique')
  }

  function handleParticipantRemove(nomeParticipant: string) {
    console.log(`Remove o ${nomeParticipant}`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>

      <Text style={styles.eventDate}>
        Quarta, 28 de Agosto de 2024
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
        // keyboardType="number-pad"
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleParticipantAdd}
        >
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList 
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant 
            key={item} 
            name={item} 
            onRemove={() => handleParticipantRemove(item)} 
          />
        )}
        showsVerticalScrollIndicator={false} // Esconde barra de rolagem
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Nenhum participante
          </Text>
        )}
      />


    </View>
  )
}