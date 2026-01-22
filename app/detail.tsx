import { useLocalSearchParams, useRouter } from "expo-router";
import { IconButton, Text, Card, Chip } from 'react-native-paper';
import {ScrollView, Image, View} from 'react-native';
import data from '../data.json';
import { Item } from "react-native-paper/lib/typescript/components/Drawer/Drawer";

export default function Detail(){
    const router = useRouter();
    const params = useLocalSearchParams();
    const foodID = params.idl
    const food = data.foods.find((item) => item.id ===foodID)
return (
    <ScrollView style={{flex: 1, backgroundColor: "#f5f5f5"}}>
        <View style={{height: 250, position: 'relative'}}>
        <Image
        source={{uri: food?.image}}
        style={{
            width: '100%',
            height: '100%',
            resizeMode: 'cover',}}/>

            <IconButton 
            icon="arrow-left"
            size={24}
            iconColor= '#fff'
            onPress={() =>  router.back()}
            style={{
                position:'absolute',
                top: 50,
                left: 16,
                backgroundColor: 'rgba(0,0,0,0.5)'
            }}
            />
        </View>

        <View style={{padding: 16, marginTop: -40}}>
            <Card style={{marginBottom: 16, borderRadius: 16}}>
            <Card.Content>
            <Text variant="headlineMedium" style={{
                fontSize: 28, fontWeight: 'bold',
                marginBottom: 8, textAlign: 'center'
            }}>{food?.name}</Text>
            <View style={{ flexDirection: 'row', gap: 8,
                marginBottom: 16}}>
            <Chip icon="map-marker" style={{alignSelf: 'flex-start'}}>
                {food?.origin}
            </Chip>
            </View>

            <View style={{ 
                flexDirection:'row',
                justifyContent: 'space-around'
            }}>
                <Text style={{ fontSize: 12, color: '#666', marginBottom: 4}}>
                    Waktu Memasak
                </Text>
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                    {food?.cookingTime}
                </Text>
            </View>



            <View style={{ alignItems:'center'}}>
                <Text>
                    Porsi
                </Text>
                <Text>
                    {food?.servings}
                </Text>
            </View>



            </Card.Content>
            </Card>

        </View>
    </ScrollView>
)
}