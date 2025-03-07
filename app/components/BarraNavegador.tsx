import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FeatherIcon from "react-native-vector-icons/Feather"; // Correção na importação

import HomeScreen from "../home";
import CartScreen from "../cesta";
import ListScreen from "../listas";
import ProfileScreen from "../perfil";

const Tab = createBottomTabNavigator();

export default function NavigationBar() {
  return (
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
      <Tab.Screen name="Lista" component={ListScreen} />
      <Tab.Screen name="Perfil" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
