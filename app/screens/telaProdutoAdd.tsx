import React, { useState } from "react";
import { View, Image, StyleSheet, ScrollView } from "react-native";
import { Appbar, Button, Card, Chip, IconButton, Text, useTheme, BottomNavigation } from "react-native-paper";

const ProdutoScreen = () => {
  const theme = useTheme();
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
        <Appbar.BackAction onPress={() => {}} />
        <Appbar.Content title="Produto" />
        <Appbar.Action icon="bell-outline" onPress={() => {}} />
      </Appbar.Header>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>Óleo de Cozinha</Text>
            <Text style={styles.subtitle}>Soya</Text>
          </View>
          <IconButton icon="plus-circle-outline" size={26} onPress={() => {}} />
        </View>

        <Image source={{ uri: "https://diafoodservice.agilecdn.com.br/9575_1.jpg" }} style={styles.image} />

        <Chip mode="outlined" style={styles.chip}>MENOR PREÇO</Chip>
        <Text style={styles.price}>R$ 9.99</Text>
        <Text style={styles.link}>🔍 Ver mais opções de preços</Text>

        <View style={styles.buttonsContainer}>
          <Button mode="outlined" style={styles.cancelButton} onPress={() => {}}>Cancelar</Button>
          <Button mode="contained" style={styles.addButton} onPress={() => {}}>Adicionar à Cesta</Button>
        </View>

        <Text style={styles.detailsTitle}>Detalhes</Text>
        <Text style={styles.detailsText}>
          Óleo de Soja Soya 900ml – puro, leve e ideal para frituras e receitas do dia a dia.
        </Text>
      </ScrollView>

      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        barStyle={styles.bottomNav}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F9F3EE" },
  appbar: { backgroundColor: "#F9F3EE", elevation: 0 },
  content: { padding: 20, alignItems: "center" },
  header: { flexDirection: "row", justifyContent: "space-between", width: "100%", marginBottom: 20 },
  title: { fontSize: 20, fontWeight: "bold", color: "#4E342E" },
  subtitle: { fontSize: 16, color: "#795548" },
  image: { width: 250, height: 250, resizeMode: "contain", marginVertical: 20 },
  chip: { backgroundColor: "#E0C3A9", color: "#4E342E", paddingHorizontal: 8 },
  price: { fontSize: 28, fontWeight: "bold", color: "#4E342E", marginTop: 10 },
  link: { color: "#9C6D3A", textDecorationLine: "underline", marginVertical: 10 },
  buttonsContainer: { flexDirection: "row", justifyContent: "space-between", width: "100%", marginTop: 10 },
  cancelButton: { flex: 1, marginRight: 10, borderColor: "#9C6D3A", borderWidth: 1 },
  addButton: { flex: 1, backgroundColor: "#9C6D3A" },
  detailsTitle: { fontSize: 18, fontWeight: "bold", color: "#4E342E", marginTop: 20, alignSelf: "flex-start" },
  detailsText: { fontSize: 16, color: "#6D4C41", marginTop: 5, alignSelf: "flex-start" },
  bottomNav: { backgroundColor: "#F9F3EE", elevation: 3 },
});

export default ProdutoScreen;
