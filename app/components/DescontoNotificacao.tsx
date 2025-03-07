import React from "react";
import { StyleSheet, View } from 'react-native';
import { Card, Text } from 'react-native-paper';

const DescontoNotificacao = () => {
  return (
    <Card style={styles.listItem}>
      <Card.Content style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>30% OFF perto de você! 💰</Text>
          <Text style={styles.descriptionText}>Produtos com descontos de até 30% no Atacarejo. Corra antes que acabe!</Text>
        </View>
        <Card.Cover source={{ uri: 'your-image-url-here' }} style={styles.image} />
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  listItem: { 
    backgroundColor: '#FFFFFF', 
    borderRadius: 12, 
    marginBottom: 15,  
    paddingVertical: 15, 
    marginHorizontal: 15, 
    elevation: 3, 
    flexDirection: 'row',
    alignItems: 'center', 
  },
  content: { 
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  titleText: { 
    fontSize: 16, 
    fontWeight: 'bold',
    color: '#333', 
    marginBottom: 5,
  },
  descriptionText: { 
    fontSize: 14, 
    color: '#666',
  },
  image: { 
    width: 70,
    height: 70,
    resizeMode: 'contain', 
    borderRadius: 10,
  },
});

export default DescontoNotificacao;
