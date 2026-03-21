import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
export default function Home() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.foto}>
        <Text style={styles.alt}>L</Text>
      </View>

      <Text style={styles.nome}>Luiz Claro Lima</Text>
      <TouchableOpacity
        style={styles.botao}
        onPress={() => router.push("/perfil")}
      >
        <Text style={styles.botaoTexto}>Ver meu perfil</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  alt: { fontSize: 70, color: "white" },
  foto: {
    height: 150,
    width: 150,
    margin: 50,
    backgroundColor: "#44f",
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
  },
  nome: { fontSize: 35, fontWeight: "bold", marginBottom: 24 },
  botao: { backgroundColor: "#222", padding: 16, borderRadius: 12 },
  botaoTexto: { color: "#fff", fontSize: 16, fontWeight: "600" },
});
