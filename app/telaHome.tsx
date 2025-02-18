import { View, Text, StyleSheet, ScrollView, TextInput, Image } from 'react-native';
import { useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';

export default function HomeScreen() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('pt-BR', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: false 
      }));
    };
    
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const categories = [
    { id: 1, name: 'Alimentos' },
    { id: 2, name: 'Bebidas' },
    { id: 3, name: 'Limpeza' },
    { id: 4, name: 'Higiene' },
  ];

  const forYouItems = Array(5).fill(null);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.time}>{currentTime}</Text>
        <View style={styles.searchContainer}>
          <Ionicons name="search-outline" size={20} color="#666" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Verduras"
            placeholderTextColor="#666"
          />
        </View>
      </View>

      <Text style={styles.sectionTitle}>Para você!</Text>
      
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.ParaVoceContainer}>
        {forYouItems.map((_, index) => (
          <View key={index} style={styles.ParaVoceCard} />
        ))}
      </ScrollView>

      <Link href="/TelaProdutos" style={styles.productsLink}>
        <Text style={styles.productsLinkText}>Produtos →</Text>
      </Link>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesContainer}>
        {categories.map((category) => (
          <View key={category.id} style={styles.categoryItem}>
            <Text style={styles.categoryText}>{category.name}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.offersContainer}>
        <View style={styles.offerCard}>
          <View style={styles.offerBadge}>
            <Text style={styles.offerBadgeText}>Menor preço</Text>
          </View>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1620705867515-2cd08e50720c?w=200' }}
            style={styles.productImage}
          />
          <Text style={styles.productName}>Óleo de Soja</Text>
          <Text style={styles.productPrice}>R$ 9,99</Text>
          <Text style={styles.storeName}>Nosso Atacarejo</Text>
        </View>

        <View style={styles.offerCard}>
          <View style={styles.offerBadge}>
            <Text style={styles.offerBadgeText}>Menor preço</Text>
          </View>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1553530979-7ee52a2670c4?w=200' }}
            style={styles.productImage}
          />
          <Text style={styles.productName}>YoPRO</Text>
          <Text style={styles.productPrice}>R$ 13,99</Text>
          <Text style={styles.storeName}>Supermercado Pinheiro</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff8f6',
    },
    header: {
      padding: 16,
      paddingTop: 48,
      backgroundColor: '#FFF5F5',
    },
    time: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
      color: '#333',
    },
    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#f6e5de',
      borderRadius: 8,
      padding: 12,
    },
    searchIcon: {
      marginRight: 8,
    },
    searchInput: {
      flex: 1,
      fontSize: 16,
      color: '#333',
    },
    sectionTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      margin: 16,
      color: '#333',
    },
    ParaVoceContainer: {
      paddingHorizontal: 16,
    },
    ParaVoceCard: {
      width: 280,
      height: 160,
      backgroundColor: '#f6e5de',
      borderRadius: 12,
      marginRight: 16,
    },
    productsLink: {
      margin: 16,
    },
    productsLinkText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333',
    },
    categoriesContainer: {
      paddingHorizontal: 16,
      marginBottom: 16,
    },
    categoryItem: {
      paddingHorizontal: 16,
      paddingVertical: 8,
      marginRight: 12,
      backgroundColor: '#fff',
      borderRadius: 20,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
    categoryText: {
      fontSize: 14,
      color: '#333',
    },
    offersContainer: {
      padding: 16,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    offerCard: {
      width: '48%',
      backgroundColor: '#fff',
      borderRadius: 12,
      padding: 12,
      borderWidth: 1,
      borderColor: '#f5e4de',
    },
    offerBadge: {
      position: 'absolute',
      top: 8,
      left: 8,
      backgroundColor: '#FF4444',
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 4,
      zIndex: 1,
    },
    offerBadgeText: {
      color: '#fff',
      fontSize: 12,
      fontWeight: 'bold',
    },
    productImage: {
      width: '100%',
      height: 120,
      borderRadius: 8,
      marginBottom: 8,
    },
    productName: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 4,
      color: '#333',
    },
    productPrice: {
      fontSize: 18,
      color: '#FF4444',
      fontWeight: 'bold',
      marginBottom: 4,
    },
    storeName: {
      fontSize: 12,
      color: '#666',
    },
  });