import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WarningMessage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Confirmação da ação para o usuário!</Text>
      <Text style={styles.subtitle}>Instrução para o usuário</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FCEFE6',
    padding: 16,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#E07A5F',
    margin: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});

export default WarningMessage;
