import React, { useState } from 'react';
import { View, StyleSheet, Modal, TextInput, FlatList } from 'react-native';
import { Text, List, IconButton, FAB, PaperProvider, Menu, Button } from 'react-native-paper';
import MenuInferior from './components/MenuInferior';

interface ListItem {
  id: string;
  name: string;
  items: number;
}

const App: React.FC = () => {
  const [lists, setLists] = useState<ListItem[]>([]);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [editModalVisible, setEditModalVisible] = useState<boolean>(false);
  const [listName, setListName] = useState<string>('');
  const [editListName, setEditListName] = useState<string>('');
  const [menuVisible, setMenuVisible] = useState<boolean>(false);
  const [selectedList, setSelectedList] = useState<ListItem | null>(null);

  const addList = () => {
    if (listName.trim()) {
      setLists([...lists, { id: Date.now().toString(), name: listName, items: 0 }]);
      setListName('');
      setModalVisible(false);
    }
  };

  const editList = () => {
    if (selectedList && editListName.trim()) {
      setLists(lists.map(list => (list.id === selectedList.id ? { ...list, name: editListName } : list)));
      setEditModalVisible(false);
      setEditListName('');
    }
  };

  const deleteList = (id: string) => {
    setLists(lists.filter(list => list.id !== id));
  };

  const openMenu = (list: ListItem) => {
    setSelectedList(list);
    setMenuVisible(true);
  };

  const closeMenu = () => setMenuVisible(false);

  const openEditModal = (list: ListItem) => {
    setSelectedList(list);
    setEditListName(list.name);
    setEditModalVisible(true);
    closeMenu();
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <IconButton icon="arrow-left" size={24} iconColor="#000000" />
          <Text style={styles.headerTitle}>Listas</Text>
          <IconButton icon="bell-outline" size={24} iconColor="#8E4D2F" />
        </View>

        {/* Lista de Itens */}
        <FlatList
          data={lists}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <List.Item
              title={item.name}
              description={`${item.items} itens`}
              titleStyle={styles.listItemTitle}
              descriptionStyle={styles.listItemDescription}
              right={() => (
                <Menu
                  visible={menuVisible && selectedList?.id === item.id}
                  onDismiss={closeMenu}
                  anchor={
                    <IconButton
                      icon="dots-vertical"
                      iconColor="#000000"
                      onPress={() => openMenu(item)}
                    />
                  }
                  contentStyle={styles.menuContent} 
                >
                  <Menu.Item
                    onPress={() => openEditModal(item)}
                    title="Editar"
                    titleStyle={styles.menuItemText}
                  />
                  <Menu.Item
                    onPress={() => {}}
                    title="Compartilhar"
                    titleStyle={styles.menuItemText}
                  />
                  <Menu.Item
                    onPress={() => {
                      deleteList(item.id);
                      closeMenu();
                    }}
                    title="Deletar"
                    titleStyle={styles.menuItemDeleteText}
                  />
                </Menu>
              )}
              style={styles.listItem}
            />
          )}
        />

        {/* Botão FAB para Criar Lista */}
        <FAB
          icon="pencil"
          style={styles.fab}
          color="#8E4D2F"
          onPress={() => setModalVisible(true)}
        />

        <MenuInferior/>

        {/* Modal de Criação de Lista */}
        <Modal visible={modalVisible} onRequestClose={() => setModalVisible(false)} transparent>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <TextInput
                placeholder="Dê um nome à sua lista"
                value={listName}
                onChangeText={setListName}
                style={styles.input}
              />
              <Button
                mode="contained"
                onPress={addList}
                style={styles.modalButton}
                labelStyle={styles.modalButtonText} 
              >
                Criar lista
              </Button>
            </View>
          </View>
        </Modal>

        {/* Modal de Edição de Lista */}
        <Modal visible={editModalVisible} onRequestClose={() => setEditModalVisible(false)} transparent>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <TextInput
                placeholder="Editar nome da lista"
                value={editListName}
                onChangeText={setEditListName}
                style={styles.input}
              />
              <Button
                mode="contained"
                onPress={editList}
                style={styles.modalButton}
                labelStyle={styles.modalButtonText} 
              >
                Salvar
              </Button>
            </View>
          </View>
        </Modal>
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF6F2',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2D1E15',
  },
  listItem: {
    backgroundColor: '#FFF6F2',
    borderBottomWidth: 1,
    borderBottomColor: '#E5CFC3',
  },
  listItemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2D1E15',
  },
  listItemDescription: {
    fontSize: 14,
    color: '#8B5D33',
  },
  fab: {
    position: 'absolute',
    right: 16,
    bottom: 100,
    backgroundColor: '#E5CFC3',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  input: {
    marginBottom: 16,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  modalButton: {
    marginTop: 8,
    backgroundColor: '#8E4D2F',
  },
  modalButtonText: {
    color: '#FFFFFF', 
  },
  menuContent: {
    backgroundColor: '#FCEAE4', 
  },
  menuItemText: {
    color: '#000000', 
  },
  menuItemDeleteText: {
    color: '#BC1500', 
  },
});

export default App;