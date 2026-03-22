import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
export default function Home() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.GroupSession}>
        <View style={styles.GroupLeft}>
          <View>
            <Text style={styles.GroupTitle}>Front-end</Text>
            <Text style={styles.GroupDesc}>HTML e CSS</Text>
          </View>
          <View>
            <Text style={styles.GroupDesc}>30 de Março</Text>
            <Text style={styles.GroupDesc}>Laboratório 707</Text>
            <TouchableOpacity style={styles.Button}>
              <Text style={styles.ButtonText}>Entrar</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.GroupRight}>
          <Text style={styles.GroupTitle}>FOTO</Text>
        </View>
      </View>

      <View style={styles.GroupSession}>
        <View style={styles.GroupLeft}>
          <View>
            <Text style={styles.GroupTitle}>Front-end</Text>
            <Text style={styles.GroupDesc}>HTML e CSS</Text>
          </View>
          <View>
            <Text style={styles.GroupDesc}>30 de Março</Text>
            <Text style={styles.GroupDesc}>Laboratório 707</Text>
            <TouchableOpacity style={styles.Button}>
              <Text style={styles.ButtonText}>Entrar</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.GroupRight}>
          <Text style={styles.GroupTitle}>FOTO</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#333",
  },
  Button: {
    backgroundColor: "#fff",
    width: 100,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    borderRadius: 20,
  },
  ButtonText: {
    fontSize: 17,
    fontWeight: "bold",
  },
  GroupSession: {
    padding: 5,
    flexDirection: "row",
    height: 280,
    width: 350,
    backgroundColor: "#E1306C",
    borderRadius: 30,
    marginTop: 25,
  },
  GroupTitle: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
  },
  GroupDesc: {
    color: "#fff",
    fontSize: 15,
    opacity: 0.7,
  },
  GroupLeft: {
    flex: 1,
    padding: 15,
    justifyContent: "space-between",
  },
  GroupRight: {
    flex: 1,
    padding: 15,
  },
});
