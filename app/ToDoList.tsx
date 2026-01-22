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
  const [todos, setTodos] = useState<Todo[]>([]);

  // ================= SIMPAN TODO =================
  const storeTodo = async (data: Todo[]) => {
    await AsyncStorage.setItem("todos", JSON.stringify(data));
  };

  // ================= AMBIL TODO =================
  const getTodo = async () => {
    const storedTodo = await AsyncStorage.getItem("todos");
    if (storedTodo) {
      setTodos(JSON.parse(storedTodo));
    }
  };

  // ================= TAMBAH TODO =================
  const addTodo = () => {
    if (task.trim() === "") return;

    const newTodo: Todo = {
      id: Date.now(),
      title: task,
    };

    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    storeTodo(updatedTodos);
    setTask("");
  };

  // ================= HAPUS TODO =================
  const removeTodo = async (id: number) => {
    const filtered = todos.filter((item) => item.id !== id);
    setTodos(filtered);
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
        data={todos}
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
