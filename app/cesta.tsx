import React, { useState } from 'react';
import { View, SafeAreaView, FlatList, Image } from 'react-native';
import { Appbar, Checkbox, IconButton, Text, Button, Divider } from 'react-native-paper';
import MenuInferior from './components/MenuInferior';

const data = [
  {
    id: '1',
    store: 'Nosso Atacarejo',
    checked: false,
    products: [
      { id: '1-1', name: 'Nosso Atacarejo', price: 'R$ 05,98', quantity: 1, checked: false, image: 'https://docemalu.vtexassets.com/arquivos/ids/5342215-800-auto?v=638421777270530000&width=800&height=auto&aspect=true' }
    ]
  },
  {
    id: '2',
    store: 'Super São Geraldo',
    checked: true,
    products: [
      { id: '2-1', name: 'Super São Geraldo', price: 'R$ 04,99', quantity: 1, checked: true, image: 'https://ibassets.com.br/ib.item.image.large/l-c1bdb35d5b73451f9fa96362bcea5707.jpeg' },
      { id: '2-2', name: 'Super São Geraldo', price: 'R$ 08,98', quantity: 1, checked: true, image: 'https://images.tcdn.com.br/img/img_prod/638868/chocolate_lacta_ao_leite_lacta_barra_80g_1797_1_567c96bfd525bfd8403b916aa6d9cf4d.jpg' }
    ]
  }
];

export default function CestaScreen() {
  const [items, setItems] = useState(data);

  const toggleStoreCheck = (id: string) => {
    setItems(prevItems =>
      prevItems.map(store =>
        store.id === id ? { ...store, checked: !store.checked } : store
      )
    );
  };

  const toggleProductCheck = (storeId: string, productId: string) => {
    setItems(prevItems =>
      prevItems.map(store =>
        store.id === storeId ? {
          ...store,
          products: store.products.map(product =>
            product.id === productId ? { ...product, checked: !product.checked } : product
          )
        } : store
      )
    );
  };

  const updateQuantity = (storeId: string, productId: string, change: number) => {
    setItems(prevItems =>
      prevItems.map(store =>
        store.id === storeId ? {
          ...store,
          products: store.products.map(product =>
            product.id === productId ? { ...product, quantity: Math.max(0, product.quantity + change) } : product
          )
        } : store
      )
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
      {/* Cabeçalho */}
      <Appbar.Header style={{ backgroundColor: '#ffffff'}}>
        <Appbar.BackAction color="#231A16" />
        <Appbar.Content title="Cesta" titleStyle={{ textAlign: 'center', color: '#231A16' }} />
        <Appbar.Action icon="bell-outline" color="#231A16" />
      </Appbar.Header>

      {/* Lista de Itens */}
      <FlatList
        data={items}
        keyExtractor={(store) => store.id}
        renderItem={({ item: store }) => (
          <>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 8 }}>
              <Checkbox status={store.checked ? 'checked' : 'unchecked'} onPress={() => toggleStoreCheck(store.id)} color="#885A44" />
              <Text style={{ fontWeight: 'bold', color: '#4F2E1D', marginLeft: 8 }}>{store.store}</Text>
            </View>
            {store.products.map(product => (
              <View key={product.id} style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 8, paddingLeft: 32 }}>
                <Checkbox status={product.checked ? 'checked' : 'unchecked'} onPress={() => toggleProductCheck(store.id, product.id)} color="#885A44" />
                <Image source={{ uri: product.image }} style={{ width: 50, height: 50, marginLeft: 8 }} />
                <View style={{ flex: 1, marginLeft: 8 }}>
                  <Text style={{ fontWeight: 'bold', color: '#4F2E1D' }}>{product.price}</Text>
                  <Text style={{ color: '#885A44' }}>{product.name}</Text>
                </View>
                <IconButton icon="minus" size={20} onPress={() => updateQuantity(store.id, product.id, -1)} iconColor="#885A44" />
                <Text style={{ color: '#4F2E1D', fontSize: 16 }}>{product.quantity.toString().padStart(2, '0')}</Text>
                <IconButton icon="plus" size={20} onPress={() => updateQuantity(store.id, product.id, 1)} iconColor="#885A44" />
              </View>
            ))}
            <Divider style={{ backgroundColor: '#885A44' }} />
          </>
        )}
      />
      
      {/* Botões */}
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 16, marginBottom: 100 }}>
        <Button mode="outlined" style={{ borderColor: '#885A44', marginRight: 8 }} textColor="#885A44">Voltar</Button>
        <Button mode="contained" style={{ backgroundColor: '#885A44' }} textColor="#FFFFFF">Registrar Compra</Button>
      </View>
                  <MenuInferior />
      
    </SafeAreaView>
  );
}
