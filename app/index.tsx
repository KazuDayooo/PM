import { View, Image, FlatList, } from "react-native";
import { Text, Card } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import {useState, useEffect} from "react";
import foodJSON from "../data.json";
import { Link } from "expo-router";

export default function Home() {
    const [foodData, setFoodData] = useState<any>([]);
    useEffect (() => {
        try {
            setFoodData(foodJSON.foods);
        } catch (error) {
            console.error("Error loading food data:", error)
        }
    },[])

    const renderFood = ({ item }: { item: any }) => (
      <View style={{ flex: 1, margin: 8 }}>
        <Link 
        asChild
        href={{
            pathname: "/detail",
            params: {id: item.id}
        }}
        >

        <Card style={{ height: "auto", backgroundColor: "#fff" }}>
          <View style={{ margin: 8 }}>
            <Image
              source={{
                uri: item.image
              }}
              style={{
                width: "auto",
                height: 120,
                resizeMode: "cover",
                borderRadius: 8,
            }}
            />
          </View>

          <Card.Content style={{ paddingTop: 8 }}>
            <Text
              variant="titleMedium"
              style={{
                fontWeight: "bold",
                textAlign: "center",
                marginBottom: 4,
              }}
              >
              {item.name}
            </Text>
            <Text
            variant="bodySmall"
            style={{textAlign: "center", color: "gray"}}>
                {item.description}
            </Text>
          </Card.Content>
        </Card>
        </Link>
      </View>
    );
    return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ padding: 16 }}>
        <Text
          variant="headlineMedium"
          style={{
            textAlign: "center",
            marginBottom: 16,
            fontWeight: "bold",
          }}
          >
            Makanan Daerah
        </Text>
      </View>

     <FlatList 
     data={foodData}
     renderItem={renderFood}
     keyExtractor={(item) => item.id}
     numColumns={2}
     contentContainerStyle={{ padding: 10}}
     showsVerticalScrollIndicator={false}
     />

    </SafeAreaView>
  );
}