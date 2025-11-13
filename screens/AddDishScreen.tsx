// AddDishScreen.tsx
// ---------------------------------------------------------
// This screen allows the chef to add new dishes.
// Code adapted from original HomeScreen.tsx (Part 2).
// ---------------------------------------------------------

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Alert,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

type MenuItem = {
  id: string;
  name: string;
  description: string;
  course: string;
  price: string;
};

export default function AddDishScreen() {
  const [dishName, setDishName] = useState("");
  const [description, setDescription] = useState("");
  const [course, setCourse] = useState("Starter");
  const [price, setPrice] = useState("");

  // THIS is your original add dish logic — fixed & working
  const addDish = () => {
    if (!dishName || !description || !price) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }

    const newDish: MenuItem = {
      id: Date.now().toString(),
      name: dishName,
      description,
      course,
      price: "R" + price,
    };

    // TEMP: For Part 3 demo, we show the saved dish via alert
    // In Part 4 or if needed, we can send this back to HomeScreen using context/navigation params
    Alert.alert(
      "Dish Added",
      ${newDish.name} has been added to the ${newDish.course} menu.
    );

    // Clear fields after adding
    setDishName("");
    setDescription("");
    setPrice("");
    setCourse("Starter");
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Add New Dish</Text>

      <TextInput
        placeholder="Dish Name"
        value={dishName}
        onChangeText={setDishName}
        style={styles.input}
      />

      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        style={styles.input}
      />

      <TextInput
        placeholder="Price (numbers only)"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
        style={styles.input}
      />

      <Picker
        selectedValue={course}
        onValueChange={(value) => setCourse(value)}
        style={styles.picker}
      >
        <Picker.Item label="Starter" value="Starter" />
        <Picker.Item label="Main" value="Main" />
        <Picker.Item label="Dessert" value="Dessert" />
      </Picker>

      <TouchableOpacity style={styles.button} onPress={addDish}>
        <Text style={styles.buttonText}>Add Dish</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFA500", // your orange theme
    padding: 15,
  },
  heading: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    marginBottom: 15,
  },
  input: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  picker: {
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#FF8C00",
    padding: 14,
    borderRadius: 15,
    marginTop: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});