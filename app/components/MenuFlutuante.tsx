import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>
      <View style={styles.menuContainer}>
        {/* Opções do menu */}
        <Text style={styles.menuItem}>Editar</Text>
        <Text style={styles.menuItem}>Compartilhar</Text>
        <Text style={styles.deleteItem}>Deletar</Text>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  menuContainer: {
    backgroundColor: '#F6E8E0',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    width: 160,
    elevation: 4,
  },
  menuItem: {
    fontSize: 16,
    color: '#2D1E15',
    paddingVertical: 8,
  },
  deleteItem: {
    fontSize: 16,
    color: '#D32F2F',
    paddingVertical: 8,
  },
});
