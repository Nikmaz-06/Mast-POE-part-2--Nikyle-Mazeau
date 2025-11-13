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