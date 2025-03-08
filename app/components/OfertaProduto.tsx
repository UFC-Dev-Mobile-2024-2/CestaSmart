import { View, StyleSheet, Image } from 'react-native';
import { Text } from 'react-native-paper';

export default function OfertasProdutos() {
  return (
    <View style={styles.offersContainer}>
      <View style={styles.offerCard}>
        <View style={styles.offerBadge}>
          <Text variant="labelSmall" style={[styles.offerBadgeText, styles.interFont]}>Menor preço</Text>
        </View>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1620705867515-2cd08e50720c?w=200' }}
          style={styles.productImage}
        />
        <Text variant="titleMedium" style={[styles.productName, styles.interFont]}>Óleo de Soja</Text>
        <Text variant="titleLarge" style={[styles.productPrice, styles.interFont]}>R$ 9,99</Text>
        <Text variant="bodySmall" style={[styles.storeName, styles.interFont]}>Nosso Atacarejo</Text>
      </View>

      <View style={styles.offerCard}>
        <View style={styles.offerBadge}>
          <Text variant="labelSmall" style={[styles.offerBadgeText, styles.interFont]}>Menor preço</Text>
        </View>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1553530979-7ee52a2670c4?w=200' }}
          style={styles.productImage}
        />
        <Text variant="titleMedium" style={[styles.productName, styles.interFont]}>YoPRO</Text>
        <Text variant="titleLarge" style={[styles.productPrice, styles.interFont]}>R$ 13,99</Text>
        <Text variant="bodySmall" style={[styles.storeName, styles.interFont]}>Supermercado Pinheiro</Text>
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
    fontWeight: 'bold',
  },
  productImage: {
    width: '100%',
    height: 120,
    borderRadius: 8,
    marginBottom: 8,
  },
  productName: {
    marginBottom: 4,
    color: '#333',
  },
  productPrice: {
    color: '#FF4444',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  storeName: {
    color: '#666',
  },
  interFont: {
    fontFamily: 'Inter',
  },
});