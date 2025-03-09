import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Divider, Chip } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useRouter } from 'expo-router';

const ProdutoCard = ({ produto }: { produto: { id: number, imagem: any, nome: string, preco: string, mercado: string } }) => {
  const router = useRouter();

  return (
    <View key={produto.id} style={{
      width: '48%',
      marginBottom: 16,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: '#8E4D2F',
      backgroundColor: '#FFFFFF',
      padding: 12,
    }}>
      <Image source={produto.imagem} style={{ width: '100%', height: 100, resizeMode: 'contain' }} />
      <Divider style={{ marginTop: 10, marginBottom: 25 }} />
      <Chip
        style={{
          marginRight: 8,
          marginBottom: 5,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: '#8E4D2F',
          width: 120,
          backgroundColor: '#FFFFFF',
        }}
        textStyle={{ color: '#685b55', fontWeight: '500', fontFamily: 'Inter' }}
      >
        Menor preço
      </Chip>

      {/* Envolvendo o Text com TouchableOpacity */}
      <TouchableOpacity onPress={() => router.push('/add')}>
    <Text style={{ fontSize: 16, fontWeight: 'bold', fontFamily: 'Inter' }}>
      {produto.nome}
    </Text>
  </TouchableOpacity>

      <Text style={{ fontSize: 16, color: '#231a16', fontWeight: 'bold', fontFamily: 'Inter' }}>{produto.preco}</Text>
      <Text style={{ fontSize: 12, color: '#555', fontFamily: 'Inter' }}>{produto.mercado}</Text>
    </View>
  );
};

export default ProdutoCard;