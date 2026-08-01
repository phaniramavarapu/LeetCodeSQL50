import { Text, View, Button, TextInput, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { useState } from 'react';

export default function HomeScreen() {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addNote = async () => {
    try {
      await fetch("http://192.168.0.4:8000/add-note", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title,
          content
        })
      });

      alert("Note added!");
      setTitle("");
      setContent("");
    } catch (error) {
      alert("Error adding note");
    }
  };

  const getNotes = async () => {
    try {
      const response = await fetch("http://192.168.0.4:8000/notes");
      const data = await response.json();
      alert(JSON.stringify(data));
    } catch (error) {
      alert("Error fetching notes");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1, backgroundColor: "white" }}  // ✅ FORCE WHITE BACKGROUND
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', padding: 20 }}>

        <Text style={{ fontSize: 20, marginBottom: 20, color: "black" }}>
          AI Knowledge Brain
        </Text>

        <TextInput
          placeholder="Title"
          placeholderTextColor="gray"
          value={title}
          onChangeText={setTitle}
          style={{
            borderWidth: 1,
            marginBottom: 10,
            padding: 10,
            color: "black",             // ✅ TEXT COLOR
            backgroundColor: "white"    // ✅ INPUT BACKGROUND
          }}
        />

        <TextInput
          placeholder="Content"
          placeholderTextColor="gray"
          value={content}
          onChangeText={setContent}
          style={{
            borderWidth: 1,
            marginBottom: 10,
            padding: 10,
            color: "black",             // ✅ TEXT COLOR
            backgroundColor: "white"    // ✅ INPUT BACKGROUND
          }}
        />

        <Button title="Add Note" onPress={addNote} />
        <View style={{ height: 10 }} />
        <Button title="Get Notes" onPress={getNotes} />

      </ScrollView>
    </KeyboardAvoidingView>
  );
}