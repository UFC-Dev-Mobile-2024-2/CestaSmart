import React, { useState } from 'react';
import { View, StyleSheet, Modal, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { Text, List, IconButton, FAB, PaperProvider, Menu, Button, Checkbox } from 'react-native-paper';
import MenuInferior from './components/MenuInferior';
import { useRouter } from "expo-router";

interface Product {
  id: string;
  name: string;
  price: string;
  checked: boolean;
  quantity: number;
}

const ProdutoScreen: React.FC = () => {
  const router = useRouter();

  const [products, setProducts] = useState<Product[]>([]);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [editModalVisible, setEditModalVisible] = useState<boolean>(false);
  const [renameModalVisible, setRenameModalVisible] = useState<boolean>(false);
  const [productName, setProductName] = useState<string>('');
  const [productPrice, setProductPrice] = useState<string>('');
  const [editProductName, setEditProductName] = useState<string>('');
  const [editProductPrice, setEditProductPrice] = useState<string>('');
  const [newHeaderTitle, setNewHeaderTitle] = useState<string>('');
  const [menuVisible, setMenuVisible] = useState<boolean>(false);
  const [headerMenuVisible, setHeaderMenuVisible] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [headerTitle, setHeaderTitle] = useState<string>('Lista de produtos');

  const addProduct = () => {
    if (productName.trim() && productPrice.trim()) {
      setProducts([...products, { id: Date.now().toString(), name: productName, price: productPrice, checked: false, quantity: 1 }]);
      setProductName('');
      setProductPrice('');
      setModalVisible(false);
    }
  };

  const editProduct = () => {
    if (selectedProduct && editProductName.trim() && editProductPrice.trim()) {
      setProducts(products.map(product =>
        product.id === selectedProduct.id
          ? { ...product, name: editProductName, price: editProductPrice }
          : product
      ));
      setEditModalVisible(false);
      setEditProductName('');
      setEditProductPrice('');
    }
  };

  const deleteProduct = (id: string) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const toggleCheckbox = (id: string) => {
    setProducts(products.map(product =>
      product.id === id ? { ...product, checked: !product.checked } : product
    ));
  };

  const deleteCheckedItems = () => {
    setProducts(products.filter(product => !product.checked));
    setHeaderMenuVisible(false);
  };

  const updateQuantity = (id: string, change: number) => {
    setProducts(products.map(product =>
      product.id === id ? { ...product, quantity: Math.max(1, product.quantity + change) } : product
    ));
  };

  const handleRenameList = () => {
    setHeaderMenuVisible(false);
    setRenameModalVisible(true);
  };

  const saveNewHeaderTitle = () => {
    if (newHeaderTitle.trim()) {
      setHeaderTitle(newHeaderTitle);
      setNewHeaderTitle('');
      setRenameModalVisible(false);
    }
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
       
        <View style={styles.header}>
          <IconButton onPress={() => router.back()} icon="arrow-left" size={24} iconColor="#000000" />
          <Text style={styles.headerTitle}>{headerTitle}</Text>
          <Menu
            visible={headerMenuVisible}
            onDismiss={() => setHeaderMenuVisible(false)}
            anchor={
              <IconButton
                icon="dots-horizontal" 
                iconColor="#000000"
                onPress={() => setHeaderMenuVisible(true)}
              />
            }
            contentStyle={styles.menuContent}
          >
            <Menu.Item
              onPress={handleRenameList}
              title="Renomear lista"
              titleStyle={styles.menuItemText}
            />
            <Menu.Item
              onPress={deleteCheckedItems}
              title="Deletar itens"
              titleStyle={styles.menuItemDeleteText}
            />
          </Menu>
        </View>

       
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => toggleCheckbox(item.id)}>
              <List.Item
                title={item.name}
                description={`R$ ${item.price}`}
                titleStyle={[styles.listItemTitle, item.checked && styles.checkedItem]}
                descriptionStyle={[styles.listItemDescription, item.checked && styles.checkedItem]}
                left={() => (
                  <Checkbox
                    status={item.checked ? "checked" : "unchecked"}
                    onPress={() => toggleCheckbox(item.id)}
                    color="#8E4D2F"
                  />
                )}
                right={() => (
                  <View style={styles.quantityContainer}>
                    <IconButton
                      icon="minus"
                      size={20}
                      onPress={() => updateQuantity(item.id, -1)}
                      iconColor="#8E4D2F"
                    />
                    <Text style={styles.quantityText}>{item.quantity}</Text>
                    <IconButton
                      icon="plus"
                      size={20}
                      onPress={() => updateQuantity(item.id, 1)}
                      iconColor="#8E4D2F"
                    />
                  </View>
                )}
                style={styles.listItem}
              />
            </TouchableOpacity>
          )}
        />

      
        <FAB
          icon="plus"
          style={styles.fab}
          color="#8E4D2F"
          onPress={() => setModalVisible(true)}
        />

        <MenuInferior />

      
        <Modal visible={modalVisible} onRequestClose={() => setModalVisible(false)} transparent>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <TextInput
                placeholder="Nome do produto"
                value={productName}
                onChangeText={setProductName}
                style={styles.input}
              />
              <TextInput
                placeholder="Valor do produto"
                value={productPrice}
                onChangeText={setProductPrice}
                style={styles.input}
                keyboardType="numeric"
              />
              <Button
                mode="contained"
                onPress={addProduct}
                style={styles.modalButton}
                labelStyle={styles.modalButtonText}
              >
                Adicionar
              </Button>
            </View>
          </View>
        </Modal>

       
        <Modal visible={editModalVisible} onRequestClose={() => setEditModalVisible(false)} transparent>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <TextInput
                placeholder="Editar nome do produto"
                value={editProductName}
                onChangeText={setEditProductName}
                style={styles.input}
              />
              <TextInput
                placeholder="Editar valor do produto"
                value={editProductPrice}
                onChangeText={setEditProductPrice}
                style={styles.input}
                keyboardType="numeric"
              />
              <Button
                mode="contained"
                onPress={editProduct}
                style={styles.modalButton}
                labelStyle={styles.modalButtonText}
              >
                Salvar
              </Button>
            </View>
          </View>
        </Modal>

      
        <Modal visible={renameModalVisible} onRequestClose={() => setRenameModalVisible(false)} transparent>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <TextInput
                placeholder="Novo nome da lista"
                value={newHeaderTitle}
                onChangeText={setNewHeaderTitle}
                style={styles.input}
              />
              <Button
                mode="contained"
                onPress={saveNewHeaderTitle}
                style={styles.modalButton}
                labelStyle={styles.modalButtonText}
              >
                Salvar
              </Button>
            </View>
          </View>
        </Modal>
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF6F2',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2D1E15',
  },
  listItem: {
    backgroundColor: '#FFF6F2',
    borderBottomWidth: 1,
    borderBottomColor: '#E5CFC3',
  },
  listItemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2D1E15',
  },
  listItemDescription: {
    fontSize: 14,
    color: '#8B5D33',
  },
  checkedItem: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
  fab: {
    position: 'absolute',
    right: 16,
    bottom: 100,
    backgroundColor: '#E5CFC3',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  input: {
    marginBottom: 16,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  modalButton: {
    marginTop: 8,
    backgroundColor: '#8E4D2F',
  },
  modalButtonText: {
    color: '#FFFFFF',
  },
  menuContent: {
    backgroundColor: '#FCEAE4',
  },
  menuItemText: {
    color: '#000000',
  },
  menuItemDeleteText: {
    color: '#BC1500',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityText: {
    fontSize: 16,
    color: '#4E342E',
    marginHorizontal: 8,
  },
});

export default ProdutoScreen;