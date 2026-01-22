import { Button, Text, TextInput } from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function LocalStoragePage() {
    const[name, setName] = useState("");
    const[kelas, setKelas] = useState("");
    const[umur, setUmur] = useState("");
    const[jurusan, setJurusan] = useState("");

 //---------------------- Nama -----------------------------------------------   
    const StoreName = async () => {
        await AsyncStorage.setItem("name", name);
    };
    
    const getName = async () => {
        const storedName = await AsyncStorage.getItem("name");
        if (storedName) {
            setName(storedName);
        }
    };

    const removeName = async () => {
        const storedName = await AsyncStorage.removeItem("name");
        setName("")
    };

//------------------------------- kelas ---------------------------------------

const StoreKelas = async () => {
        await AsyncStorage.setItem("kelas", kelas);
    };
    
    const getKelas = async () => {
        const storedKelas = await AsyncStorage.getItem("kelas");
        if (storedKelas) {
            setKelas(storedKelas);
        }
    };

    const removeKelas = async () => {
        const storedKelas = await AsyncStorage.removeItem("kelas");
        setKelas("")
    };

//------------------------------ Umur -------------------------------------
    const StoreUmur = async () => {
    await AsyncStorage.setItem("Umur", umur);
    };

    const getUmur = async () => {
    const storedUmur = await AsyncStorage.getItem("Umur");
    if (storedUmur) {
        setUmur(storedUmur);
    }
    };

    const removeUmur = async () => {
    const storedUmur = await AsyncStorage.removeItem("Umur");
    setUmur("");
    };

// ------------------------ Jurusan -------------------------------

        const StoreJurusan = async () => {
    await AsyncStorage.setItem("Jurusan", jurusan);
    };

    const getJurusan = async () => {
    const storedJurusan = await AsyncStorage.getItem("Jurusan");
    if (storedJurusan) {
        setJurusan(storedJurusan);
    }
    };

    const removeJurusan = async () => {
    const storedJurusan = await AsyncStorage.removeItem("Jurusan");
    setJurusan("");
    };

    useEffect(() => {
        getName();
        getJurusan();
        getUmur();
        getKelas();
    }, []);

    return(
        <SafeAreaView>
            <Text>Nama : {name} </Text>
            <TextInput placeholder="Masukkan Nama" onChangeText={setName}/>
            
            <Text>Kelas : {kelas} </Text>
            <TextInput placeholder="Masukkan Kelas" onChangeText={setKelas}/>
            
            <Text>Umur : {umur} </Text>
            <TextInput placeholder="Masukkan Umur" onChangeText={setUmur}/>
            
            <Text>Jurusan : {jurusan} </Text>
            <TextInput placeholder="Masukkan Jurusan" onChangeText={setJurusan}/>


            <Button title="Simpan" onPress= {() => {
                StoreName();
                StoreKelas();
                StoreUmur();
                StoreJurusan()
            }}/>
            <Button title="Hapus" onPress= {() => {
                removeName();
                removeKelas();
                removeJurusan();
                removeUmur();
            }}/>
            <Button title="Ambil" onPress= {() => {}}/>
        </SafeAreaView> 
    );
}