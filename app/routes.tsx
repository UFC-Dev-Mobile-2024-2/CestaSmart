import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TelaProdutoAdd from './screens/telaProdutoAdd';
import TelaHome from './screens/telaHome';
import ProdutosScreen from './screens/ProdutosScreen';
import TelaComparar from './screens/telaComparar';

// Criando o Stack Navigator
const Stack = createStackNavigator<StackParamList>();

export type StackParamList = {
  telaHome: undefined;
  ProdutosScreen: undefined;
  telaProdutoAdd: undefined;
  telaComparar: undefined;
};

const Routes = () => {
  return (
    <Stack.Navigator initialRouteName="telaHome">
      <Stack.Screen options={{ headerShown: false }} name="telaHome" component={TelaHome} />
      <Stack.Screen options={{ headerShown: false }} name="ProdutosScreen" component={ProdutosScreen} />
      <Stack.Screen options={{ headerShown: false }} name="telaProdutoAdd" component={TelaProdutoAdd} />
      <Stack.Screen options={{ headerShown: false }} name="telaComparar" component={TelaComparar} />
      </Stack.Navigator>
  );
};


export default Routes;