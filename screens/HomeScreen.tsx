import React, { useState } from "react";
import { View, Text, TextInput, Button, FlatList, Alert, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { Picker } from "@react-native-picker/picker";

type MenuItem = {
  id: string;
  name: string;
  description: string;
  course: string;
  price: string;
};
/* === Displays the menu prepared by the chef */
export default function HomeScreen() {
  const [menu, setMenu] = useState<MenuItem[]>([
    { id: "1", name: "Asparagus Wrapped in Bacon", description: "Crispy asparagus wrapped with smoked bacon.", course: "Starter", price: "R65" },
    { id: "2", name: "Stuffed Mushrooms", description: "Mushrooms filled with cream cheese and herbs.", course: "Starter", price: "R55" },
    { id: "3", name: "Garlic Prawns", description: "Juicy prawns sautéed in garlic butter sauce.", course: "Starter", price: "R70" },
    { id: "4", name: "Steak Tartare", description: "Finely chopped raw beef with egg yolk and seasoning.", course: "Main", price: "R120" },
    { id: "5", name: "Grilled Salmon", description: "Fresh salmon fillet with lemon butter sauce.", course: "Main", price: "R150" },
    { id: "6", name: "Chicken Alfredo", description: "Pasta with creamy Alfredo sauce and grilled chicken.", course: "Main", price: "R110" },
    { id: "7", name: "Crème Brûlée", description: "Classic custard dessert with caramelized sugar top.", course: "Dessert", price: "R65" },
    { id: "8", name: "Chocolate Mousse", description: "Rich and smooth dark chocolate mousse.", course: "Dessert", price: "R60" },
    { id: "9", name: "Cheesecake", description: "New York-style baked cheesecake with berry topping.", course: "Dessert", price: "R70" },
  ]);
  /* === State for input fields */
  const [dishName, setDishName] = useState("");
  const [description, setDescription] = useState("");
  const [course, setCourse] = useState("Starter");
  const [price, setPrice] = useState("");

  const addDish = () => {
    /* IF statement to validate if input was made in all the fields*/
    if (!dishName || !description || !price) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }

    const newDish: MenuItem = {
      id: (menu.length + 1).toString(),
      name: dishName,
      description,
      course,
      price: "R" + price,
    };

    setMenu([...menu, newDish]);
    setDishName("");
    setDescription("");
    setPrice("");
  };
  /* input section */
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Chef's Menu</Text>
      <Text style={styles.subHeading}>Total Menu Items: {menu.length}</Text>

      <FlatList
        data={menu}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.course}>{item.course}</Text>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.desc}>{item.description}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </View>
        )}
      />
      
      <ScrollView style={styles.form}>
        <Text style={styles.formHeading}>Add New Dish</Text>
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
        <Picker selectedValue={course} onValueChange={setCourse} style={styles.picker}>
          <Picker.Item label="Starter" value="Starter" />
          <Picker.Item label="Main" value="Main" />
          <Picker.Item label="Dessert" value="Dessert" />
        </Picker>

        <Button title="Add Dish" onPress={addDish} color="#FF8C00" />
      </ScrollView>
    </SafeAreaView>
  );
}
/* === Stylesheet for colours, font and design */
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFA500", padding: 10 },
  heading: { fontSize: 26, fontWeight: "bold", textAlign: "center", color: "white" },
  subHeading: { textAlign: "center", color: "white", marginBottom: 10 },
  card: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 10,
    marginVertical: 5,
  },
  course: { fontWeight: "bold", color: "#FF8C00" },
  name: { fontSize: 16, fontWeight: "bold" },
  desc: { color: "#555" },
  price: { color: "#000", fontWeight: "600" },
  form: { marginTop: 10 },
  formHeading: { fontSize: 18, fontWeight: "bold", marginVertical: 10, color: "white" },
  input: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 8,
    marginBottom: 10,
  },
  picker: { backgroundColor: "white", borderRadius: 10, marginBottom: 10 },
});