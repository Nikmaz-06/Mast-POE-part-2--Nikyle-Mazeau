//Title: Christoffels private restuarant app
//Author: Nikyle Mazeau
//Date: 20 October 2025

//Title: MAST5112 Student Manual
//Author: IIE Varsity College
//Date: 15 October 2025
//Avaliable: https://advtechonline.sharepoint.com/:w:/r/sites/TertiaryStudents/_layouts/15/Doc.aspx?sourcedoc=%7BC4AAF478-96AC-4469-8005-F7CDC4A15EBB%7D&file=MAST5112MM.docx&action=default&mobileredirect=true

import React from "react";
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { useNavigation } from "@react-navigation/native";

type NavProp = NativeStackNavigationProp<RootStackParamList, "Welcome">;

export default function WelcomeScreen() {
  const navigation = useNavigation<NavProp>();

  return (
    <ImageBackground
      source={{ uri: "https://images.unsplash.com/photo-1504674900247-0877df9cc836" }}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Welcome to{"\n"}Christoffel's Restaurant</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Home")}>
          <Text style={styles.buttonText}>Menu</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1, justifyContent: "center" },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  title: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 40,
  },
  button: {
    backgroundColor: "#FFA500",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
  buttonText: { color: "white", fontSize: 18, fontWeight: "bold" },
});