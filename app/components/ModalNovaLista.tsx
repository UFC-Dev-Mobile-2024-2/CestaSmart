import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, TextInput, Button, PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>
      <View style={styles.modalContainer}>
        {/* Linha superior simulando modal */}
        <View style={styles.topBar} />

        {/* Título */}
        <Text style={styles.title}>Criar lista de produtos</Text>

        {/* Campo de entrada */}
        <TextInput
          placeholder="Dê um nome a sua lista"
          mode="flat"
          style={styles.input}
          placeholderTextColor="#A48E80"
        />

        {/* Botão */}
        <Button mode="contained" style={styles.createButton} labelStyle={styles.createButtonText}>
          Criar lista
        </Button>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: '#F6E8E0',
    padding: 24,
    borderRadius: 24,
    width: '90%',
    alignSelf: 'center',
    elevation: 4,
    alignItems: 'center',
  },
  topBar: {
    width: 40,
    height: 4,
    backgroundColor: '#A48E80',
    borderRadius: 10,
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2D1E15',
    textAlign: 'center',
    marginBottom: 24,
  },
  input: {
    backgroundColor: '#EEDDD4',
    borderRadius: 8,
    height: 50,
    width: '100%',
    paddingHorizontal: 12,
    fontSize: 16,
    color: '#2D1E15',
    marginBottom: 24,
  },
  createButton: {
    backgroundColor: '#8E4D2F',
    borderRadius: 24,
    height: 50,
    width: '100%',
    justifyContent: 'center',
  },
  createButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
