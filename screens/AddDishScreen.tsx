// AddDishScreen.tsx
// References:
//  - W3Schools React Native Forms: https://www.w3schools.com/react/react_forms.asp
//  - Varsity College Student Manual (WIL Project Development Guide, 2025)
//  - React Native Docs: https://reactnative.dev/docs/textinput

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../App";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type NavProp = NativeStackNavigationProp<RootStackParamList, "AddDish">;

export default function AddDishScreen() {
  const navigation = useNavigation<NavProp>();

  // Local states for form inputs
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [course, setCourse] = useState("Starter");

  // Function to handle adding a new dish
  const handleAddDish = () => {
    if (!name || !description || !price) {
      Alert.alert("Missing Information", "Please fill in all fields.");
      return;
    }

    // Simulated save – in a real app, this would update global state or API
    console.log("New Dish Added:", { name, description, price, course });
    Alert.alert("Dish Added", ${name} has been added to the ${course} menu.);
    navigation.goBack(); // Return to Home Screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chef's Add Dish</Text>

      {/* Dish Name Input */}
      <TextInput
        style={styles.input}
        placeholder="Dish Name"
        value={name}
        onChangeText={setName}
      />

      {/* Dish Description Input */}
      <TextInput
        style={[styles.input, { height: 80 }]}
        placeholder="Dish Description"
        value={description}
        onChangeText={setDescription}
        multiline
      />

      {/* Price Input */}
      <TextInput
        style={styles.input}
        placeholder="Price (e.g. R75)"
        keyboardType="default"
        value={price}
        onChangeText={setPrice}
      />

      {/* Course Picker */}
      <Text style={styles.label}>Select Course:</Text>
      <Picker
        selectedValue={course}
        onValueChange={(itemValue) => setCourse(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Starter" value="Starter" />
        <Picker.Item label="Main" value="Main" />
        <Picker.Item label="Dessert" value="Dessert" />
      </Picker>

      {/* Add Dish Button */}
      <TouchableOpacity style={styles.button} onPress={handleAddDish}>
        <Text style={styles.buttonText}>Add Dish</Text>
      </TouchableOpacity>
    </View>
  );
}

// ✅ Modern, simple, consistent design
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFE4B5",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FF8C00",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  label: {
    fontWeight: "bold",
    color: "#FF8C00",
  },
  picker: {
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#FF8C00",
    padding: 15,
    borderRadius: 25,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});