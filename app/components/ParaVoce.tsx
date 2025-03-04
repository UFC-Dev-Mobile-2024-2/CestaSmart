import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function ParaVoce() {
  const forYouItems = Array(5).fill(null);

  return (
    <>
      <Text style={styles.sectionTitle}>Para você!</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container}>
        {forYouItems.map((_, index) => (
          <View key={index} style={styles.card} />
        ))}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontFamily: 'Inter',
    fontSize: 20,
    marginBottom: 16,
    marginLeft: 16,
    color: '#333',
  },
  container: {
    paddingHorizontal: 16,
  },
  card: {
    width: 280,
    height: 160,
    backgroundColor: '#f6e5de',
    borderRadius: 12,
    marginRight: 16,
  },
});
