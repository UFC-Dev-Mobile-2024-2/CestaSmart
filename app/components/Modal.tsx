import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, List, Avatar, Checkbox, PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Adicione à lista</Text>

          {/* Lista de Itens (Estática) */}
          <List.Section>
            {[...Array(5)].map((_, index) => (
              <List.Item
                key={index}
                title="List item"
                left={() => <Avatar.Text size={36} label="A" style={styles.avatar} />}
                right={() => <Checkbox status="checked" color="#8B5D33" />}
                titleStyle={styles.listItemText}
              />
            ))}
          </List.Section>

          {/* Botões (Estáticos) */}
          <View style={styles.buttonContainer}>
            <Button mode="outlined" textColor="#8E4D2F" style={styles.cancelButton}>
              Cancelar
            </Button>
            <Button mode="contained" textColor="#FFF" style={styles.addButton}>
              Adicionar à Lista
            </Button>
          </View>
        </View>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  modalContainer: {
    backgroundColor: '#FFEFE7',
    padding: 20,
    borderRadius: 12,
    width: '90%',
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#2D1E15',
  },
  listItemText: {
    fontSize: 16,
    color: '#2D1E15',
  },
  avatar: {
    backgroundColor: '#FAD4C0',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  cancelButton: {
    flex: 1,
    marginRight: 8,
    borderColor: '#8E4D2F',
  },
  addButton: {
    flex: 1,
    marginLeft: 8,
    backgroundColor: '#8B5D33',
  },
});
