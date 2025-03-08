import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Modal, TextInput, FlatList, Alert } from 'react-native';
import { Text, List, IconButton, FAB, PaperProvider, Menu, Button } from 'react-native-paper';
import MenuInferior from './components/MenuInferior';

interface ListItem {
  id: string;
  name: string;
  items: number;
}

const API_URL = 'http://localhost:3000/lists';

const App: React.FC = () => {
  const [lists, setLists] = useState<ListItem[]>([]);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [listName, setListName] = useState<string>('');
  
  useEffect(() => {
    fetchLists();
  }, []);

  const fetchLists = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setLists(data);
    } catch (error) {
      console.error('Erro ao buscar listas:', error);
    }
  };

  const addList = async () => {
    if (listName.trim()) {
      const newList = { id: Date.now().toString(), name: listName, items: 0 };
      try {
        const response = await fetch(API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newList)
        });
        if (response.ok) {
          setLists([...lists, newList]);
          setListName('');
          setModalVisible(false);
        }
      } catch (error) {
        console.error('Erro ao adicionar lista:', error);
      }
    }
  };

  const deleteList = async (id: string) => {
    try {
      await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      setLists(lists.filter(list => list.id !== id));
    } catch (error) {
      console.error('Erro ao excluir lista:', error);
    }
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        <FlatList
          data={lists}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <List.Item
              title={item.name}
              left={() => <List.Icon icon='folder' />}
              right={() => (
                <IconButton
                  icon='delete'
                  onPress={() => deleteList(item.id)}
                />
              )}
            />
          )}
        />
        <FAB
          style={styles.fab}
          icon='plus'
          onPress={() => setModalVisible(true)}
        />
        <Modal visible={modalVisible} animationType='slide'>
          <View style={styles.modalContainer}>
            <TextInput
              placeholder='Nome da lista'
              value={listName}
              onChangeText={setListName}
              style={styles.input}
            />
            <Button mode='contained' onPress={addList}>Adicionar</Button>
            <Button onPress={() => setModalVisible(false)}>Cancelar</Button>
          </View>
        </Modal>
      </View>
      <MenuInferior />
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  fab: { position: 'absolute', right: 16, bottom: 16 },
  modalContainer: { flex: 1, justifyContent: 'center', padding: 20 },
  input: { borderBottomWidth: 1, marginBottom: 10, padding: 8 }
});

export default App;
