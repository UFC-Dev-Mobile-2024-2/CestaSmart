import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Chip } from 'react-native-paper';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

const Categoria = () => {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);

  const categorias = ['Alimentos', 'Bebidas', 'Limpeza', 'Higiene'];

  return (
    <View style={{ marginBottom: 16 }}>
      <Text style={{ fontFamily: 'Inter', fontSize: 18, marginBottom: 8 }}>Categorias</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categorias.map((categoria) => (
          <Chip
            key={categoria}
            mode="outlined"
            onPress={() => setCategoriaSelecionada(categoria)}
            style={{
              marginRight: 8,
              borderRadius: 20,
              backgroundColor: categoria === categoriaSelecionada ? '#3B82F6' : 'transparent',
            }}
            textStyle={{
              color: categoria === categoriaSelecionada ? '#FFFFFF' : '#000000',
            }}
          >
            {categoria}
            {categoria === categoriaSelecionada && (
              <MaterialCommunityIcons name="check" size={20} color="#FFFFFF" style={{ marginLeft: 8 }} />
            )}
          </Chip>
        ))}
      </ScrollView>
    </View>
  );
};

export default Categoria;
