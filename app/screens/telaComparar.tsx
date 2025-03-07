import React, { useState } from "react";
import { View, StyleSheet, ScrollView, Image } from "react-native";
import { Appbar, Button, IconButton, List, Text, useTheme, BottomNavigation } from "react-native-paper";
import { useNavigation } from '@react-navigation/native';

const CompararPrecosScreen = () => {
    const navigation = useNavigation(); // Hook de navegação
  
    const voltarProduto = () => {
      navigation.navigate('telaProdutoAdd');
    };

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

  const precos = [
    { id: 1, preco: "R$ 9,99", loja: "Atacarejo" },
    { id: 2, preco: "R$ 12,99", loja: "Super São Geraldo" },
    { id: 3, preco: "R$ 13,99", loja: "Super Mercado Pinheiro" },
  ];

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.appbar}>
        <Appbar.BackAction onPress={voltarProduto} />
        <Appbar.Content title="Comparar Preços" />
        <Appbar.Action icon="bell-outline" onPress={() => {}} />
      </Appbar.Header>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.headerButtons}>
          <Button mode="outlined" icon="map-marker" style={styles.locationButton}>
            63900-129
          </Button>
          <Button mode="outlined" icon="bell-outline" style={styles.alertButton}>
            Criar um alerta de preço
          </Button>
        </View>

        {precos.map((item, index) => (
          <List.Item
            key={item.id}
            title={item.preco}
            description={item.loja}
            left={() => <Image source={{ uri: "https://diafoodservice.agilecdn.com.br/9575_1.jpg" }} style={styles.image} />}
            right={() => (
              <View style={styles.rightContainer}>
                <Text style={styles.rightText}>Ir para produto</Text>
                <IconButton icon="chevron-right" size={24} onPress={() => {}} />
              </View>
            )}
            style={styles.listItem}
          />
        ))}
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
  content: { padding: 20 },
  headerButtons: { flexDirection: "row", justifyContent: "space-between", marginBottom: 20 },
  locationButton: { borderColor: "#9C6D3A", borderWidth: 1 },
  alertButton: { borderColor: "#9C6D3A", borderWidth: 1 },
  listItem: { backgroundColor: "#FFFFFF", borderRadius: 10, marginBottom: 10, paddingVertical: 10 },
  image: { width: 50, height: 100, resizeMode: "contain" },
  rightContainer: { flexDirection: "row", alignItems: "center" },
  rightText: { color: "#9C6D3A", fontWeight: "bold", marginRight: 5 },
  bottomNav: { backgroundColor: "#F9F3EE", elevation: 3 },
});

export default CompararPrecosScreen;