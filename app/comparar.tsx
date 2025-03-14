import React, { useState } from "react";
import { View, StyleSheet, ScrollView, Image } from "react-native";
import { Appbar, Button, IconButton, List, Text, BottomNavigation } from "react-native-paper";
import { useRouter } from "expo-router";
import MenuInferior from "./components/MenuInferior";

const CompararPrecosScreen = () => {
  const router = useRouter();

  const voltarProduto = () => {
    router.push("/produtos/add");
  };

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "home", title: "Home", icon: "home" },
    { key: "cesta", title: "Cesta", icon: "cart" },
    { key: "scan", title: "Scan", icon: "barcode-scan" },
    { key: "lista", title: "Lista", icon: "format-list-bulleted" },
    { key: "perfil", title: "Perfil", icon: "account" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: () => <View />,
    cesta: () => <View />,
    scan: () => <View />,
    lista: () => <View />,
    perfil: () => <View />,
  });

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.appbar}>
        <Appbar.BackAction onPress={() => router.back()} />
        <Appbar.Content title="Comparar Preços" />
        <Appbar.Action icon="bell-outline" onPress={() => {}} />
      </Appbar.Header>

      <ScrollView contentContainerStyle={styles.content}>
        <Text>Comparação de preços</Text>
      </ScrollView>

      <MenuInferior/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F9F3EE" },
  appbar: { backgroundColor: "#F9F3EE", elevation: 0 },
  content: { padding: 20, alignItems: "center" },
  bottomNav: { backgroundColor: "#F9F3EE", elevation: 3 },
});

export default CompararPrecosScreen;
