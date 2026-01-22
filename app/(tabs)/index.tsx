import { router } from "expo-router";
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  View,
  Image,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          paddingVertical: 20,
        }}
      >
        <Text
          style={{
            fontSize: 24,
            color: "cyan",
            marginVertical: 10,
          }}
        >
          Kaiiiaiai
        </Text>

        <Button
          title="Press me"
          onPress={() => alert("Berhasil!")}
          color={"red"}
        />

        <View
          style={{
            marginTop: 50,
            width: 100,
            height: 100,
            backgroundColor: "blue",
          }}
        />

        <View style={{ marginTop: 20, alignItems: "center" }}>
          <Image
            source={{
              uri: "https://media.tenor.com/0IRNivMANQ4AAAAM/hu-tao-hu-tao-biting-plate.gif",
            }}
            style={{ width: 200, height: 200, borderRadius: 70 }}
          />
        </View>

        <Image
          source={require("../../assets/images/icon.png")}
          style={{
            width: 100,
            height: 100,
            marginVertical: 20,
          }}
        />

        <View style={styles.bulat} />

        <Button
          title="Pindah Halaman ke about"
          onPress={() => router.push("/about")}
          color={"purple"}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bulat: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: "red",
    marginVertical: 20,
  },
});
