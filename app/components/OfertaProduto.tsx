import { View, Text, StyleSheet, Image } from 'react-native';

export default function OfertasProdutos() {
  return (
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
  );
}

const styles = StyleSheet.create({
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
