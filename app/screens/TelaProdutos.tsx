import React from 'react';
import { SafeAreaView } from 'react-native';
import ProdutosScreen from './screens/ProdutosScreen';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ProdutosScreen />
    </SafeAreaView>
  );
}
