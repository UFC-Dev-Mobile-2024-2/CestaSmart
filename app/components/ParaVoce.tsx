import { View, Text, StyleSheet } from 'react-native';

export default function ParaVoce() {
  const forYouItems = Array(5).fill(null);

  return (
    <View style={styles.ParaVoceContainer}>
      {forYouItems.map((_, index) => (
        <View key={index} style={styles.ParaVoceCard} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
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
});