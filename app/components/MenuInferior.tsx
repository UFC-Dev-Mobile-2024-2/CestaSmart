import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const MenuInferior = () => (
  <View style={styles.container}>
    <View style={styles.menuItem}>
      <MaterialIcons name="home" size={28} color="#000" />
      <Text style={styles.menuText}>Início</Text>
    </View>

    <View style={styles.menuItem}>
      <MaterialIcons name="shopping-basket" size={28} color="#000" />
      <Text style={styles.menuText}>Carrinho</Text>
    </View>

    <View style={styles.menuItem}>
      <MaterialIcons name="qr-code-scanner" size={28} color="#000" />
      <Text style={styles.menuText}>QR Code</Text>
    </View>

    <View style={styles.menuItem}>
      <MaterialIcons name="list" size={28} color="#000" />
      <Text style={styles.menuText}>Lista</Text>
    </View>

    <View style={styles.menuItem}>
      <MaterialIcons name="person" size={28} color="#000" />
      <Text style={styles.menuText}>Perfil</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    // Essa propriedade garante que o menu permaneça fixo na parte inferior da tela, independentemente da rolagem.
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderColor: '#E0E0E0',
    backgroundColor: '#fceae4',
  },
  menuItem: {
    alignItems: 'center',
  },
  menuText: {
    fontSize: 12,
    color: '#000',
  },
});

export default MenuInferior;
