import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const MenuInferior = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.menuItem} 
        onPress={() => router.push('/home')}  // Substitua '/inicial' pelo caminho da tela de Início
      >
        <MaterialIcons name="home" size={28} color="#000" />
        <Text style={styles.menuText}>Início</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.menuItem} 
        onPress={() => router.push('/cesta')}  // Substitua '/carrinho' pelo caminho da tela do Carrinho
      >
        <MaterialIcons name="shopping-basket" size={28} color="#000" />
        <Text style={styles.menuText}>Carrinho</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.menuItem} 
        onPress={() => router.push('/scan')}  // Substitua '/qrcode' pelo caminho da tela de QR Code
      >
        <MaterialIcons name="qr-code-scanner" size={28} color="#000" />
        <Text style={styles.menuText}>QR Code</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.menuItem} 
        onPress={() => router.push('/listas')}  // Substitua '/lista' pelo caminho da tela da Lista
      >
        <MaterialIcons name="list" size={28} color="#000" />
        <Text style={styles.menuText}>Lista</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.menuItem} 
        onPress={() => router.push('/perfil')}  // Substitua '/perfil' pelo caminho da tela do Perfil
      >
        <MaterialIcons name="person" size={28} color="#000" />
        <Text style={styles.menuText}>Perfil</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
