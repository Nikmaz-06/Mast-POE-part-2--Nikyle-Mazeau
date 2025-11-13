//Title: MAST5112 Student Manual
//Author: IIE Varsity College
//Date: 15 October 2025
//Avaliable: https://advtechonline.sharepoint.com/:w:/r/sites/TertiaryStudents/_layouts/15/Doc.aspx?sourcedoc=%7BC4AAF478-96AC-4469-8005-F7CDC4A15EBB%7D&file=MAST5112MM.docx&action=default&mobileredirect=true


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
//Imports and navigation stacks

type MenuItem = {
  id: string;
  name: string;
  description: string;
  course: string;
  price: string;
};
//State variables for input
export default function AddDishScreen() {
  const [dishName, setDishName] = useState("");
  const [description, setDescription] = useState("");
  const [course, setCourse] = useState("Starter");
  const [price, setPrice] = useState("");

  // Validation logic for add dish fucntionality
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

    // Clear fields after adding
    setDishName("");
    setDescription("");
    setPrice("");
    setCourse("Starter");
  };

  //  Input stack for fields and picker
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

//Stylesheet for design and UI
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFA500", // Orange theme set from part 1 and 2
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