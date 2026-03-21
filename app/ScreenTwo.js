import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
export default function Sobre() {
  const router = useRouter();
  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Curso:</Text>
      <Text style={styles.descricao}>Ciência da computação</Text>

      <Text style={styles.titulo}>Turma:</Text>
      <Text style={styles.descricao}>2CCPO</Text>

      <Text style={styles.titulo}>Tecnologias:</Text>
      <View style={styles.tecnologias}>
        <Text style={styles.descricaoTecno}>Python</Text>
        <Text style={styles.descricaoTecno}>JavaScript</Text>
        <Text style={styles.descricaoTecno}>HTML & CSS</Text>
      </View>

      <TouchableOpacity style={styles.botao} onPress={() => router.back()}>
        <Text style={styles.botaoTexto}>← Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  tecnologias: { marginBottom: 20, flexDirection: 'row', width:360},
  botao:     { backgroundColor: '#222', padding: 16, borderRadius: 12 },
  botaoTexto:{ color: '#fff', fontSize: 16, fontWeight: '600' },
  container:  { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' },
  titulo:     { fontSize: 28, fontWeight: 'bold', marginBottom: 12 },
  descricao:  { fontSize: 20, color: '#333', marginBottom: 24 },
  descricaoTecno:  { flex: 1,fontSize: 20, color: '#333', marginBottom: 24, },
});