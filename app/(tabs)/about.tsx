import { Image } from "expo-image";
import {
  Platform,
  StyleSheet,
  View,
  Text,
  Button,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

export default function TabTwoScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          paddingVertical: 20,
          paddingHorizontal: 16,
        }}
        showsVerticalScrollIndicator={false} // biar lebih rapi
      >
        <Text
          style={{
            fontSize: 24,
            color: "cyan",
            textAlign: "center",
            marginBottom: 20,
          }}
        >
          About you
        </Text>

        <View style={{ marginTop: 20, alignItems: "center", marginBottom: 30 }}>
          <Image
            source={{
              uri: "https://media.tenor.com/0IRNivMANQ4AAAAM/hu-tao-hu-tao-biting-plate.gif",
            }}
            style={{ width: 200, height: 200, borderRadius: 70 }}
          />
        </View>

        <View style={{ gap: 15 }}>
          <Text style={styles.text}>Nama : Seyf Musthafa Affandy</Text>
          <Text style={styles.text}>Kelas : XI RPL 2</Text>
          <Text style={styles.text}>Umur : 17 tahun</Text>
          <Text style={styles.text}>
            Hobi : Masak, Bermain game, Bermain musik, Tidur.
          </Text>
          <Text style={styles.text}>
            Cita-cita : Pemilik perusahaan / Boss / CEO perusahaan
          </Text>
        </View>

        <View style={{ marginTop: 30, marginBottom: 50 }}>
          <Button title="Kembali ke Index" onPress={() => router.push("/")} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
});
