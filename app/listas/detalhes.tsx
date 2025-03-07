import React, { useState } from 'react';
import { View, SafeAreaView, FlatList, Image } from 'react-native';
import { Appbar, Checkbox, IconButton, Text, FAB, Divider } from 'react-native-paper';

const data = [
  { id: '1', name: 'Óleo de Soja', price: 'R$ 07,47', quantity: 1, checked: false, image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS-lXjk9WYvE3xEU74i_9bctV_NChmNIJ3lURiVXSUuFK4upAzpzUlGTDgdyA&usqp=CAE' },
  { id: '2', name: 'Macarrão', price: 'R$ 2,98', quantity: 1, checked: false, image: 'https://mercantilnovaera.vtexassets.com/arquivos/ids/218485/Macarrao-Espaguete-MONDO-Pasta-Embalagem-400g.jpg?v=638605525349870000' },
  { id: '3', name: 'Alho frito', price: 'R$ 5,98', quantity: 1, checked: false, image: 'https://akioroxo.com.br/wp-content/uploads/2023/05/alho-frito-crocante-500g-pote.png' },
];

export default function DentrodaLista() {
  const [items, setItems] = useState(data);

  const toggleCheck = (id: string) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const updateQuantity = (id: string, change: number) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: Math.max(0, item.quantity + change) } : item
      )
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
      {/* Cabeçalho */}
      <Appbar.Header style={{ backgroundColor: '#ffffff' }}>
        <Appbar.BackAction color="#231A16" />
        <Appbar.Content title="Listas" titleStyle={{ textAlign: 'center', color: '#231A16' }} />
        <Appbar.Action icon="bell-outline" color="#231A16" />
      </Appbar.Header>

      {/* Lista de Itens */}
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <>
            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 16 }}>
              <Checkbox
                status={item.checked ? 'checked' : 'unchecked'}
                onPress={() => toggleCheck(item.id)}
                color="#885A44"
              />
              <Image source={{ uri: item.image }} style={{ width: 50, height: 50, marginLeft: 8 }} />
              <View style={{ flex: 1, marginLeft: 8 }}>
                <Text style={{ fontWeight: 'bold', color: '#4F2E1D' }}>{item.price}</Text>
                <Text style={{ color: '#885A44' }}>{item.name}</Text>
              </View>
              <IconButton icon="minus" size={20} onPress={() => updateQuantity(item.id, -1)} iconColor="#885A44" />
              <Text style={{ color: '#4F2E1D', fontSize: 16 }}>{item.quantity.toString().padStart(2, '0')}</Text>
              <IconButton icon="plus" size={20} onPress={() => updateQuantity(item.id, 1)} iconColor="#885A44" />
            </View>
            <Divider style={{ backgroundColor: '#D8C2BA' }} />
          </>
        )}
      />

      {/* Botão Flutuante */}
      <FAB
        icon="plus"
        style={{
          position: 'absolute',
          right: 16,
          bottom: 80,
          backgroundColor: '#E2B497',
        }}
        onPress={() => {}}
      />
    </SafeAreaView>
  );
}
