//References

//Title: Christoffels private restuarant app
//Author: Nikyle Mazeau
//Date: 20 October 2025

//Title: MAST5112 Student Manual
//Author: IIE Varsity College
//Date: 15 October 2025
//Avaliable: https://advtechonline.sharepoint.com/:w:/r/sites/TertiaryStudents/_layouts/15/Doc.aspx?sourcedoc=%7BC4AAF478-96AC-4469-8005-F7CDC4A15EBB%7D&file=MAST5112MM.docx&action=default&mobileredirect=true

import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../App";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
// Import navigation stacks

type MenuItem = {
  id: string;
  name: string;
  description: string;
  course: string;
  price: string;
};

type NavProp = NativeStackNavigationProp<RootStackParamList, "Home">;

export default function HomeScreen() {
  const navigation = useNavigation<NavProp>();

  // Menu stored in an array (Global)
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

  // Function to calculate the average using the for loop
  const calculateAverage = (course: string) => {
    let total = 0;
    let count = 0;

    for (let i = 0; i < menu.length; i++) {
      if (menu[i].course === course) {
        total += parseInt(menu[i].price.replace("R", ""));
        count++;
      }
    }

    return count > 0 ? (total / count).toFixed(2) : "0";
  };

  // functionality to remove items
  const removeItem = (id: string) => {
    const updatedMenu = menu.filter((item) => item.id !== id);
    setMenu(updatedMenu);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Chef's Full Menu</Text>

      {/* average prices displayed */}
      <View style={styles.averageContainer}>
        <Text style={styles.averageText}>Average price Starter: R{calculateAverage("Starter")}</Text>
        <Text style={styles.averageText}>Average price Main: R{calculateAverage("Main")}</Text>
        <Text style={styles.averageText}>Average price Dessert: R{calculateAverage("Dessert")}</Text>
      </View>
      
      <FlatList
        data={menu}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.course}>{item.course}</Text>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.desc}>{item.description}</Text>
            <Text style={styles.price}>{item.price}</Text>
            <TouchableOpacity onPress={() => removeItem(item.id)} style={styles.removeButton}>
              <Text style={styles.removeText}>Remove</Text> 
            </TouchableOpacity>
          </View>
        )}
      />

      <View style={styles.navButtons}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("AddDish")}>
          <Text style={styles.buttonText}>Add new Dish</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Filter")}>
          <Text style={styles.buttonText}>Filter Menu</Text> 
        </TouchableOpacity>
      </View>
    </SafeAreaView>  // navigation buttons to take the user to the AddDish screen and Filter screen
  );
}

//Stylesheet for design and color, consistent and mordern orange theme from pervious parts
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFA500", padding: 10 },
  heading: { fontSize: 26, fontWeight: "bold", textAlign: "center", color: "white" },
  card: { backgroundColor: "white", borderRadius: 12, padding: 10, marginVertical: 5 },
  course: { fontWeight: "bold", color: "#FF8C00" },
  name: { fontSize: 16, fontWeight: "bold" },
  desc: { color: "#555" },
  price: { color: "#000", fontWeight: "600" },
  removeButton: { marginTop: 5, backgroundColor: "#ff6347", padding: 5, borderRadius: 6 },
  removeText: { color: "white", textAlign: "center" },
  navButtons: { flexDirection: "row", justifyContent: "space-around", marginTop: 10 },
  button: { backgroundColor: "#FF8C00", padding: 12, borderRadius: 25 },
  buttonText: { color: "white", fontWeight: "bold" },
  averageContainer: { marginVertical: 10, backgroundColor: "white", padding: 10, borderRadius: 10 },
  averageText: { fontWeight: "bold", color: "#FF8C00", textAlign: "center" },
});