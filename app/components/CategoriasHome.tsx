import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function CategoriasHome() {
  const router = useRouter(); // Substitui useNavigation()

  const handlePress = () => {
    router.push('/produtos'); // Agora usa o expo-router corretamente
  };

  // Definição das categorias com tipagem correta
  const categories: { id: number; name: string; image: any }[] = [
    { 
      id: 1, 
      name: 'Alimentos', 
      image: require('../../assets/images/Alimentos.png')  // Imagem local
    },
    { 
      id: 2, 
      name: 'Bebidas', 
      image: require('../../assets/images/Bebidas.png')  // Imagem local
    },
    { 
      id: 3, 
      name: 'Limpeza', 
      image: require('../../assets/images/Limpeza.png')  // Imagem local
    },
    { 
      id: 4, 
      name: 'Higiene', 
      image: require('../../assets/images/Higiene.png')  // Imagem local
    },
  ];

  return (
    <View style={styles.container}>
      <Text onPress={handlePress} style={styles.productsLinkText}>Produtos →</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scroll}>
        {categories.map((category) => (
          <View key={category.id} style={styles.categoryWrapper}>
            <View style={styles.categoryCard}>
              {/* Exibindo a imagem dentro da box */}
              <Image source={category.image} style={styles.categoryImage} />
              {/* Ícone */}
              <Ionicons name={category.icon} size={40} color="#333" style={styles.icon} />
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
    position: 'relative', // Permite o ícone ser posicionado sobre a imagem
    overflow: 'hidden',  // Garante que o conteúdo não ultrapasse a borda arredondada
  },
  categoryImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',  // A imagem preenche a caixa sem distorcer
    position: 'absolute', // A imagem ficará por baixo do ícone
  },
  icon: {
    zIndex: 1,  // Garante que o ícone ficará sobre a imagem
  },
  categoryText: {
    fontSize: 14,
    color: '#333',
    marginTop: 8,
    textAlign: 'center',
    width: 100,
  },
});
