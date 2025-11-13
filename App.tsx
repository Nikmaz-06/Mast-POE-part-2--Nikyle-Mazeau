//References

//Title: Christoffels private restuarant app
//Author: Nikyle Mazeau
//Date: 20 October 2025

//Title: MAST5112 Student Manual
//Author: IIE Varsity College
//Date: 15 October 2025
//Avaliable: https://advtechonline.sharepoint.com/:w:/r/sites/TertiaryStudents/_layouts/15/Doc.aspx?sourcedoc=%7BC4AAF478-96AC-4469-8005-F7CDC4A15EBB%7D&file=MAST5112MM.docx&action=default&mobileredirect=true

//Title: Using a scrollview
//Author: React Native
//Date: 8 October 2025
//Avaliable: https://reactnative.dev/docs/using-a-scrollview

//Title: Navigation between screens
//Author: React Native
//Date: 15 September 2025
//Avaliable: https://reactnative.dev/docs/navigation 

// Import navigation stacks //
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./screens/WelcomeScreen";
import HomeScreen from "./screens/HomeScreen";
import AddDishScreen from "./screens/AddDishScreen";
import FilterScreen from "./screens/FilterScreen";

export type RootStackParamList = {
  Welcome: undefined;
  Home: undefined;
  AddDish: undefined;
  Filter: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Christoffel's Restaurant" }} />
        <Stack.Screen name="AddDish" component={AddDishScreen} options={{ title: "Chef's Add new dish Menu" }} />
        <Stack.Screen name="Filter" component={FilterScreen} options={{ title: "Filter Menu" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
