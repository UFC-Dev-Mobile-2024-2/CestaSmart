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
    router.push("/produtos"); 
  };

  const acessarComparar = () => {
    router.push("/comparar");
  };

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const handleCheckboxToggle = (index) => {
    setCheckedItems({
      ...checkedItems,
      [index]: !checkedItems[index],
    });
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
            <IconButton icon="plus-circle-outline" size={26} onPress={showModal} />
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
              <Icon source="magnify" size={18} color="#8E4D2F" /> {/* Cor do ícone da lupa */}
              <Text onPress={acessarComparar} style={styles.link}>
                Ver mais opções de preços
              </Text>
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <Button
              mode="contained"
              onPress={handleAddToCart}
              style={styles.button}
              labelStyle={styles.buttonLabel}
            >
              Adicionar à Cesta
            </Button>
          </View>

          <View style={styles.detailsContainer}>
            <Text style={styles.detailsTitle}>Detalhes do Produto</Text>
            <Text style={styles.detailsText}>
              Óleo de soja Soya 900ml. Ideal para frituras, cozimentos e preparo de alimentos em geral.
            </Text>
          </View>
        </ScrollView>

        <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={styles.modalContainer}
          >
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Adicionar à Lista</Text>
              <List.Section>
                <List.Item
                  title="Lista de Compras"
                  left={() => (
                    <Checkbox
                      status={checkedItems[0] ? "checked" : "unchecked"}
                      onPress={() => handleCheckboxToggle(0)}
                      color="#8E4D2F" // Cor do checkbox
                    />
                  )}
                  titleStyle={styles.listItemTitle} // Estilo do texto da lista
                />
                <List.Item
                  title="Lista de Desejos"
                  left={() => (
                    <Checkbox
                      status={checkedItems[1] ? "checked" : "unchecked"}
                      onPress={() => handleCheckboxToggle(1)}
                      color="#8E4D2F" // Cor do checkbox
                    />
                  )}
                  titleStyle={styles.listItemTitle} // Estilo do texto da lista
                />
              </List.Section>
              <View style={styles.modalButtons}>
                <Button
                  onPress={hideModal}
                  style={[styles.modalButton, styles.modalButtonCancel]}
                  labelStyle={styles.modalButtonCancelLabel} // Cor do texto do botão Cancelar
                >
                  Cancelar
                </Button>
                <Button
                  onPress={handleAddToList}
                  style={[styles.modalButton, styles.modalButtonAdd]}
                  labelStyle={styles.modalButtonLabel}
                >
                  Adicionar
                </Button>
              </View>
            </View>
          </Modal>
        </Portal>

        <Dialog visible={dialogVisible} onDismiss={hideDialog}>
          <Dialog.Content>
            <Text>{dialogMessage}</Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog}>OK</Button>
          </Dialog.Actions>
        </Dialog>
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
    alignItems: "center",
    width: "100%",
    paddingVertical: 10,
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
  buttonContainer: {
    width: "100%",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#8E4D2F",
  },
  buttonLabel: {
    color: "#FFF", // Texto branco no botão
  },
  detailsContainer: {
    alignSelf: "flex-start",
    width: "100%",
    marginTop: 20,
  },
  detailsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4E342E",
  },
  detailsText: {
    fontSize: 14,
    color: "#795548",
    marginTop: 10,
  },
  modalContainer: {
    backgroundColor: "#F9F3EE",
    padding: 20,
    margin: 20,
    borderRadius: 10,
  },
  modalContent: {
    width: '100%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: "#4E342E",
  },
  listItemTitle: {
    color: "#4E342E", // Cor do texto da lista
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  modalButton: {
    flex: 1,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  modalButtonCancel: {
    backgroundColor: "transparent", // Fundo transparente para o botão Cancelar
    borderWidth: 1,
    borderColor: "#8E4D2F", // Borda marrom
  },
  modalButtonCancelLabel: {
    color: "#8E4D2F", // Texto marrom para o botão Cancelar
  },
  modalButtonAdd: {
    backgroundColor: "#8E4D2F", // Cor de fundo do botão Adicionar
  },
  modalButtonLabel: {
    color: "#FFF", // Texto branco nos botões do modal
  },
});

export default ProdutoScreen;