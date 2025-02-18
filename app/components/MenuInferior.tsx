import React from 'react';
import { View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const MenuInferior = () => (
  <View style={{
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderColor: '#E0E0E0',
    backgroundColor: '#fceae4',
  }}>
    <View style={{ alignItems: 'center' }}>
      <MaterialIcons name="home" size={28} color="#000" />
      <Text style={{ fontSize: 12, color: '#000' }}>Início</Text>
    </View>

    <View style={{ alignItems: 'center' }}>
      <MaterialIcons name="shopping-basket" size={28} color="#000" />
      <Text style={{ fontSize: 12, color: '#000' }}>Carrinho</Text>
    </View>

    <View style={{ alignItems: 'center' }}>
      <MaterialIcons name="qr-code-scanner" size={28} color="#000" />
      <Text style={{ fontSize: 12, color: '#000' }}>QR Code</Text>
    </View>

    <View style={{ alignItems: 'center' }}>
      <MaterialIcons name="list" size={28} color="#000" />
      <Text style={{ fontSize: 12, color: '#000' }}>Lista</Text>
    </View>

    <View style={{ alignItems: 'center' }}>
      <MaterialIcons name="person" size={28} color="#000" />
      <Text style={{ fontSize: 12, color: '#000' }}>Perfil</Text>
    </View>
  </View>
);

export default MenuInferior;
