import React, { useRef, useState } from 'react';
import { View, Text, FlatList, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Button } from 'react-native-paper';

const { width, height } = Dimensions.get('window');

// Definição do tipo dos slides
type Slide = {
  id: string;
  title: string;
  description: string;
};

const slides: Slide[] = [
  { id: '1', title: 'Facilite Suas Compras!', description: 'Escaneie produtos, calcule o valor total e economize antes de chegar ao caixa!' },
  { id: '2', title: 'Escaneie e Adicione à Cesta', description: 'Ao escanear um produto, ele entra na sua cesta e o total é atualizado automaticamente.' },
  { id: '3', title: 'Crie Sua Lista Antes de Sair de Casa', description: 'Adicione produtos à sua lista e vá ao mercado com tudo planejado!' },
  { id: '4', title: 'Compare e Economize', description: 'Descubra onde encontrar os melhores preços e aproveite promoções exclusivas!' },
  { id: '5', title: 'Pronto para Começar?', description: 'Crie sua conta agora e aproveite uma nova forma de fazer compras!' },
];

// Definição do tipo de navegação
type StackParamList = {
  Onboarding: undefined;
  Login: undefined;
  Cadastro: undefined;
};

type NavigationProps = StackNavigationProp<StackParamList, 'Onboarding'>;
const Onboarding = () => {
  const navigation = useNavigation<NavigationProps>();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      navigation.navigate('Cadastro');
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const renderItem = ({ item, index }: { item: Slide, index: number }) => (
    <View style={{ width, height, alignItems: 'center', justifyContent: 'center', padding: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 20, color: '#5A382D' }}>{item.title}</Text>
      <Text style={{ textAlign: 'center', marginTop: 10, color: '#5A382D' }}>{item.description}</Text>
      {index === slides.length - 1 && (
        <View style={{ marginTop: 30, width: '80%' }}>
          <Button
            mode="contained"
            onPress={() => navigation.navigate('Cadastro')}
            style={{ backgroundColor: '#5A382D', borderRadius: 10, paddingVertical: 5 }}
            labelStyle={{ color: '#FFF', fontWeight: 'bold', fontSize: 16 }}
          >
            Crie uma conta
          </Button>
          <Button
            mode="text"
            onPress={() => navigation.navigate('Login')}
            labelStyle={{ color: '#5A382D', fontSize: 14, marginTop: 10 }}
          >
            Já tenho uma conta!
          </Button>
        </View>
      )}
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: '#FFF' }}>
      <View style={{ flex: 1 }}>
        {renderItem({ item: slides[currentIndex], index: currentIndex })}
      </View>
      {/* Indicador de progresso */}
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 20 }}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={{
              width: 8,
              height: 8,
              borderRadius: 4,
              backgroundColor: currentIndex === index ? '#5A382D' : '#D3B8A0',
              marginHorizontal: 5,
            }}
          />
        ))}
      </View>
      {/* Botões de navegação */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, marginBottom: 40 }}>
        <Button
          mode="text"
          onPress={handleBack}
          disabled={currentIndex === 0}
          labelStyle={{ color: currentIndex === 0 ? '#CCC' : '#5A382D', fontWeight: 'bold' }}
        >
          Voltar
        </Button>
        {currentIndex < slides.length - 1 && (
          <Button
            mode="text"
            onPress={handleNext}
            labelStyle={{ color: '#5A382D', fontWeight: 'bold' }}
          >
            Próximo
          </Button>
        )}
      </View>
    </View>
  );
};

export default Onboarding;