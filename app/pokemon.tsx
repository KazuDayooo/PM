import {SafeAreaView} from "react-native-safe-area-context";
import {Text, TouchableOpacity, Image, ActivityIndicator, View} from "react-native";
import { useState } from "react";
import { useEffect } from "react";
import { FlatList } from "react-native";

export default function Pokemon() {

    const[loading, setLoading] = useState(false);
    const[items, setItems] = useState<any[]>([]);
    const [error, setError] = useState<string | null>(null);

    async function loadPokemon() {
        try{

            setError(null);
            setLoading(true);
            const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
            if(!res.ok) throw new Error("gagal di load, coba refrech page nya dah")
            const json = await res.json();
            const results = json.results;
            const mapped = results.map((r: any) => {
                const id = r.url.match(/\/pokemon\/(\d+)\/?$/)[1];
                return {
                    id,
                    name: r.name,
                    image: `https://raw.githubusercontent.com/PokeAPI/spirites/master/spirites/pokemon${id}.png` 
                }
            })
            setItems(mapped);

        } catch (err: any) {
            setError(err.message);

        } finally {
            setLoading(false);

        }
    }

    useEffect(() => {
        loadPokemon()
    }, []);
    
    function renderItem({item}:any) {
        return (
          <TouchableOpacity className="flex-1 m-2 bg-gray-200 rounded-xl items-center p-3 min-w-[140px]">
            <Image source={{ uri: item.name }} className="w-24 h-24 mb-2" />
            <Text className="text-xl font-bold mb-2">{item.name}</Text>
            <Text className="text-sm mb-2">ID: {item.id}</Text>
          </TouchableOpacity>
        );
    }

    return (
        <SafeAreaView>

            {loading ? (
                <View className={"flex-1 items-center justify-center"}>
                    <ActivityIndicator size="large"/>
                </View>                
            ): error ? (
                <View className={"flex-1 items-center justify-center"}>
                    <Text className="text-red-500">{error}</Text>
                </View>
            ): (
                <FlatList
                data={items}
                keyExtractor={i => i.id}
                renderItem={renderItem}
                numColumns={2}
                contentContainerStyle={{paddingBottom: 24}}
                ListEmptyComponent={<Text className="text-center">Yahh, Pokemon nya ga ada</Text>}
                />
            )}
        </SafeAreaView>
    )
}