import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function CategoriasHome() {
    const navigation = useNavigation();
    
    const handlePress = () => {
        navigation.navigate('ProdutosScreen');
    };

  const categories = [
    { id: 1, name: 'Alimentos', icon: 'ios-fast-food' },
    { id: 2, name: 'Bebidas', icon: 'ios-wine' },
    { id: 3, name: 'Limpeza', icon: 'ios-brush' },
    { id: 4, name: 'Higiene', icon: 'ios-body' },
  ];

  return (
    <View style={styles.container}>
        <Text onPress={handlePress} style={styles.productsLinkText}>Produtos →</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scroll}>
        {categories.map((category) => (
          <View key={category.id} style={styles.categoryWrapper}>
            <View style={styles.categoryCard}>
            </View>
            <Text style={styles.categoryText}>{category.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontFamily: 'Inter',
    marginTop: 10,
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  productsLink: {
    marginBottom: 10,
  },
  productsLinkText: {
    fontSize: 18,
    color: '#333',
  },
  scroll: {
    flexDirection: 'row',
  },
  categoryWrapper: {
    marginRight: 12,
  },
  categoryCard: {
    width: 100,
    height: 100,
    backgroundColor: '#f6e5de',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  categoryText: {
    fontSize: 14,
    color: '#333',
    marginTop: 8,
    alignSelf: 'flex-end', // Alinha o texto à direita
    textAlign: 'left', // Mantém o alinhamento do texto à direita
    width: 100, // Mantém o mesmo tamanho da box
  },
});
