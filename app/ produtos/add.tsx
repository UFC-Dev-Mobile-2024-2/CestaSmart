import React, { useState } from "react";
import { View, Image, StyleSheet, ScrollView } from "react-native";
import { Appbar, Button, Chip, IconButton, Text, BottomNavigation, Icon, Modal, Portal, List, Avatar, Checkbox, PaperProvider, Dialog } from "react-native-paper";
import { useRouter } from "expo-router";

const ProdutoScreen = () => {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [checkedItems, setCheckedItems] = useState({});
  const [dialogVisible, setDialogVisible] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("");

  const [routes] = useState([
    { key: "home", title: "Home", icon: "home" },
    { key: "cesta", title: "Cesta", icon: "cart" },
    { key: "scan", title: "Scan", icon: "barcode-scan" },
    { key: "lista", title: "Lista", icon: "format-list-bulleted" },
    { key: "perfil", title: "Perfil", icon: "account" },
  ]);

  const handlePress = () => {
  feature/login
    router.push("/produtos"); 
  };

  const acessarComparar = () => {
    router.push("/comparar"); 

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const handleCheckboxToggle = (index) => {
    setCheckedItems({
      ...checkedItems,
      [index]: !checkedItems[index],
    });
  main
  };

  const handleAddToList = () => {
    const selectedLists = Object.values(checkedItems).filter((item) => item).length;

    if (selectedLists === 0) {
      setDialogMessage("Nenhuma lista foi selecionada");
    } else if (selectedLists === 1) {
      setDialogMessage("O produto foi adicionado à lista");
      hideModal();
    } else {
      setDialogMessage("O produto foi adicionado às listas");
      hideModal();
    }
    setDialogVisible(true);
  };

  const handleAddToCart = () => {
    setDialogMessage("O produto foi adicionado à cesta");
    setDialogVisible(true);
  };

  const hideDialog = () => setDialogVisible(false);

  const renderScene = BottomNavigation.SceneMap({
    home: () => <View />,
    cesta: () => <View />,
    scan: () => <View />,
    lista: () => <View />,
    perfil: () => <View />,
  });

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Appbar.Header style={styles.appbar}>
          <Appbar.BackAction onPress={handlePress} color="#000" />
          <Appbar.Content title="Produto" titleStyle={styles.appbarTitle} />
          <Appbar.Action icon="bell-outline" onPress={() => {}} color="#000" />
        </Appbar.Header>

        <ScrollView contentContainerStyle={styles.content}>
          <View style={styles.header}>
            <View>
              <Text style={styles.title}>Óleo de Cozinha</Text>
              <Text style={styles.subtitle}>Soya</Text>
            </View>
            <IconButton icon="plus-circle-outline" size={26} onPress={showModal} color="#000" />
          </View>

          <Image
            source={{ uri: "https://superprix.vteximg.com.br/arquivos/ids/176449-600-600/Oleo-de-Soja-Soya-900ml.png?v=636470371263970000" }}
            style={styles.image}
          />

          <View style={styles.leftAlignedContainer}>
            <Chip mode="outlined" style={styles.chip} textStyle={styles.chipText}>
              MENOR PREÇO
            </Chip>
            <Text style={styles.price}>R$ 9.99</Text>
            <View style={styles.linkContainer}>
              <Icon source="magnify" size={18} color="#8E4D2F" />
              <Text onPress={acessarComparar} style={styles.link}>
                Ver mais opções de preços
              </Text>
            </View>
          </View>

          <View style={styles.buttonsContainer}>
            <Button mode="outlined" style={styles.cancelButton} labelStyle={styles.cancelButtonText} onPress={() => {}}>
              Cancelar
            </Button>
            <Button mode="contained" style={styles.addButton} labelStyle={styles.addButtonText} onPress={handleAddToCart}>
              Adicionar à Cesta
            </Button>
          </View>

          <Text style={styles.detailsTitle}>Detalhes</Text>
          <Text style={styles.detailsText}>
            Óleo de Soja Soya 900ml – puro, leve e ideal para frituras e receitas do dia a dia.
          </Text>
        </ScrollView>

        <Portal>
          <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.modalContainer}>
            <Text style={styles.modalTitle}>Adicionar</Text>
            <List.Section>
              {[...Array(3)].map((_, index) => (
                <List.Item
                  key={index}
                  title="List item"
                  left={() => <Avatar.Text size={36} label="A" style={styles.avatar} />}
                  right={() => (
                    <Checkbox
                      status={checkedItems[index] ? "checked" : "unchecked"}
                      onPress={() => handleCheckboxToggle(index)}
                      color="#8B5D33" 
                    />
                  )}
                  titleStyle={styles.listItemText}
                />
              ))}
            </List.Section>
            <View style={styles.buttonContainer}>
              <Button mode="outlined" textColor="#8E4D2F" style={styles.cancelButton} onPress={hideModal}>
                Cancelar
              </Button>
              <Button mode="contained" textColor="#FFF" style={styles.addButton} onPress={handleAddToList}>
                Adicionar à Lista
              </Button>
            </View>
          </Modal>
        </Portal>

        <Portal>
          <Dialog visible={dialogVisible} onDismiss={hideDialog}>
            <Dialog.Content>
              <Text variant="bodyMedium">{dialogMessage}</Text>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDialog}>OK</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>

        <BottomNavigation
          navigationState={{ index, routes }}
          onIndexChange={setIndex}
          renderScene={renderScene}
          barStyle={styles.bottomNav}
        />
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F3EE",
  },
  appbar: {
    backgroundColor: "#F9F3EE",
    elevation: 0,
  },
  appbarTitle: {
    textAlign: 'center',
    color: '#000',
  },
  content: {
    padding: 20,
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4E342E",
  },
  subtitle: {
    fontSize: 16,
    color: "#795548",
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: "contain",
    marginVertical: 20,
  },
  leftAlignedContainer: {
    alignSelf: "flex-start",
    width: "100%",
    marginBottom: 10,
  },
  chip: {
    backgroundColor: "transparent",
    borderColor: "#8E4D2F",
    paddingHorizontal: 8,
    paddingVertical: 4,
    alignSelf: "flex-start",
  },
  chipText: {
    color: "#000", 
  },
  price: {
    fontSize: 28,
    color: "#4E342E",
    marginTop: 10,
  },
  linkContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  link: {
    color: "#8E4D2F",
    marginLeft: 5,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 15,
  },
  cancelButton: {
    flex: 1,
    marginRight: 15,
    borderColor: "#8E4D2F",
    borderWidth: 1,
  },
  cancelButtonText: {
    color: "#8E4D2F",
  },
  addButton: {
    flex: 1,
    backgroundColor: "#8E4D2F",
    paddingHorizontal: -20,
  },
  addButtonText: {
    fontSize: 10,
    color: "#FFFFFF",
  },
  detailsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4E342E",
    marginTop: 20,
    alignSelf: "flex-start",
  },
  detailsText: {
    fontSize: 16,
    color: "#6D4C41",
    marginTop: 5,
    alignSelf: "flex-start",
  },
  bottomNav: {
    backgroundColor: "#F9F3EE",
    elevation: 3,
  },
  modalContainer: {
    backgroundColor: "#FFEFE7",
    padding: 20,
    borderRadius: 12,
    width: "90%",
    alignSelf: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
    color: "#2D1E15",
  },
  listItemText: {
    fontSize: 16,
    color: "#2D1E15",
  },
  avatar: {
    backgroundColor: "#FAD4C0",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
});

export default ProdutoScreen;