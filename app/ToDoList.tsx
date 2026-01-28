import { Button, Text, TextInput, View, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Todo = {
  id: number;
  title: string;
};

export default function ToDoList() {
  const [task, setTask] = useState<string>("");
  const [todoo, setTodoo] = useState<Todo[]>([]);

  // ---------------- Simpan To Do ------------------------
  const storeTodo = async (data: Todo[]) => {
    await AsyncStorage.setItem("todoo", JSON.stringify(data));
  };

  // ---------------- Ambil To do ----------------------------
  const getTodo = async () => {
    const storedTodo = await AsyncStorage.getItem("todoo");
    if (storedTodo) {
      setTodoo(JSON.parse(storedTodo));
    }
  };

  // ----------------- Tambah To Do -------------------------
  const addTodo = () => {
    if (task.trim() === "") return;

    const newTodo: Todo = {
      id: Date.now(),
      title: task,
    };

    const updatedTodoo = [...todoo, newTodo];
    setTodoo(updatedTodoo);
    storeTodo(updatedTodoo);
    setTask("");
  };

  // ----------------- HAPUS TODO --------------------------
  const removeTodo = async (id: number) => {
    const filtered = todoo.filter((item) => item.id !== id);
    setTodoo(filtered);
    storeTodo(filtered);
  };

  useEffect(() => {
    getTodo();
  }, []);

  return (
    <SafeAreaView style={{ padding: 20 }}>
      <TextInput
        placeholder="Masukkan Nama Kegiatan"
        value={task}
        onChangeText={setTask}
        style={{
          borderWidth: 1,
          padding: 10,
          marginBottom: 10,
          borderRadius: 5,
        }}
      />

      <Button title="Tambah" onPress={addTodo} />

      <FlatList
        data={todoo}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            <Text>{item.title}</Text>
            <Button title="Hapus" onPress={() => removeTodo(item.id)} />
          </View>
        )}
      />
    </SafeAreaView>
  );
}
