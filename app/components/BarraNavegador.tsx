import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import FeatherIcon from "react-native-vector-icons/Feather"; // Correção na importação

import HomeScreen from "../screens/telaHome";
import CartScreen from "../screens/telaCesta";
import ScanScreen from "../screens/telaScan"; //n tem
import ListScreen from "../screens/telaListas";
import ProfileScreen from "../screens/telaPerfil";

const Tab = createBottomTabNavigator();

export default function NavigationBar() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            const iconName: string =
              route.name === "Home"
                ? "home"
                : route.name === "Cesta"
                ? "shopping-cart"
                : route.name === "Scan"
                ? "camera"
                : route.name === "Lista"
                ? "list"
                : "user"; // Ícone para "Perfil"

            return <FeatherIcon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "gray",
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Cesta" component={CartScreen} />
        <Tab.Screen name="Scan" component={ScanScreen} />
        <Tab.Screen name="Lista" component={ListScreen} />
        <Tab.Screen name="Perfil" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
