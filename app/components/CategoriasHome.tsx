import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function CategoriasHome() {
  const router = useRouter(); // Substitui useNavigation()

  const handlePress = () => {
    router.push('/produtos'); // Agora usa o expo-router corretamente
  };

  // Definição das categorias com tipagem correta
  const categories: { id: number; name: string; icon: keyof typeof Ionicons.glyphMap }[] = [
    { id: 1, name: 'Alimentos', icon: 'fast-food' },
    { id: 2, name: 'Bebidas', icon: 'wine' },
    { id: 3, name: 'Limpeza', icon: 'brush' },
    { id: 4, name: 'Higiene', icon: 'body' },
  ];

  return (
    <View style={styles.container}>
      <Text onPress={handlePress} style={styles.productsLinkText}>Produtos →</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scroll}>
        {categories.map((category) => (
          <View key={category.id} style={styles.categoryWrapper}>
            <View style={styles.categoryCard}>
              <Ionicons name={category.icon} size={40} color="#333" />
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
    textAlign: 'center',
    width: 100,
  },
});
