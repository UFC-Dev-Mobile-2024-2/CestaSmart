import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Chip } from 'react-native-paper';

const Categoria = () => (
  <View style={{ marginBottom: 16 }}>
    <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 8, fontFamily: 'Inter' }}>Categorias</Text>

    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {['Alimentos', 'Bebidas', 'Limpeza', 'Higiene'].map((categoria, index) => (
        <Chip
          key={index}
          mode="outlined" // Usando o modo "outlined" para bordas
          style={{
            marginRight: 8,
            borderRadius: 20,
            backgroundColor: categoria === 'Alimentos' ? '#3B82F6' : 'transparent', // Fundo diferente para "Alimentos"
          }}
          textStyle={{ color: categoria === 'Alimentos' ? '#FFFFFF' : '#000000', fontWeight: '500' }}
        >
          {categoria}
        </Chip>
      ))}
    </ScrollView>
  </View>
);

export default Categoria;
