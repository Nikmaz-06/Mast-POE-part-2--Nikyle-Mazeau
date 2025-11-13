//Title: MAST5112 Student Manual
//Author: IIE Varsity College
//Date: 15 October 2025
//Avaliable: https://advtechonline.sharepoint.com/:w:/r/sites/TertiaryStudents/_layouts/15/Doc.aspx?sourcedoc=%7BC4AAF478-96AC-4469-8005-F7CDC4A15EBB%7D&file=MAST5112MM.docx&action=default&mobileredirect=true


import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Picker } from "@react-native-picker/picker";

type MenuItem = {
  id: string;
  name: string;
  description: string;
  course: string;
  price: string;
};

export default function FilterScreen() {
  const [selectedCourse, setSelectedCourse] = useState("Starter");

  // Menu from the home screen
  const menu: MenuItem[] = [
    { id: "1", name: "Asparagus Wrapped in Bacon", description: "Crispy asparagus wrapped with smoked bacon.", course: "Starter", price: "R65" },
    { id: "2", name: "Grilled Salmon", description: "Fresh salmon fillet with lemon butter sauce.", course: "Main", price: "R150" },
    { id: "3", name: "Chocolate Mousse", description: "Rich and smooth dark chocolate mousse.", course: "Dessert", price: "R60" },
    { id: "4", name: "Steak Tartare", description: "Finely chopped raw beef with egg yolk and seasoning.", course: "Main", price: "R120" },
    { id: "5", name: "Stuffed Mushrooms", description: "Mushrooms filled with cream cheese and herbs.", course: "Starter", price: "R55" },
    { id: "6", name: "Garlic Prawns", description: "Juicy prawns sautéed in garlic butter sauce.", course: "Starter", price: "R70" },
    { id: "7", name: "Chicken Alfredo", description: "Pasta with creamy Alfredo sauce and grilled chicken.", course: "Main", price: "R110" },
    { id: "8", name: "Crème Brûlée", description: "Classic custard dessert with caramelized sugar top.", course: "Dessert", price: "R65" },
    { id: "9", name: "Cheesecake", description: "New York-style baked cheesecake with berry topping.", course: "Dessert", price: "R70" },
  ];

  const filtered = menu.filter((item) => item.course === selectedCourse);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filter Menu by Course</Text>

      <Picker
        selectedValue={selectedCourse}
        onValueChange={(value) => setSelectedCourse(value)}
        style={styles.picker}
      >
        <Picker.Item label="Starter" value="Starter" />
        <Picker.Item label="Main" value="Main" />
        <Picker.Item label="Dessert" value="Dessert" />
      </Picker>

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text>{item.description}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF8DC",
    padding: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FF8C00",
    textAlign: "center",
    marginBottom: 10,
  },
  picker: {
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 15,
  },
  card: {
    backgroundColor: "white",
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
  },
  name: {
    fontWeight: "bold",
    color: "#FF8C00",
  },
  price: {
    fontWeight: "bold",
    color: "#333",
  },
});