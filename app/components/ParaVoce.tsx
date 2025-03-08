import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';

export default function ParaVoce() {
  // Array de 5 imagens locais
  const imagens = [
    require('../../assets/images/Item-1.png'),
    require('../../assets/images/Item-2.jpg'),
    require('../../assets/images/Item-3.jpg'),
    require('../../assets/images/Item-4.jpg'), // Substitua pelos seus arquivos reais
    require('../../assets/images/Item-5.jpg'),
  ];

  return (
    <>
      <Text style={styles.sectionTitle}>Para você!</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container}>
        {imagens.map((imagem, index) => (
          <View key={index} style={styles.card}>
            <Image 
              source={imagem}  // Usando cada imagem do array
              style={styles.image}
            />
          </View>
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
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // Garante que a imagem preenche o card sem distorcer
  },
});
