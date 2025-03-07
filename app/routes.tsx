import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TelaProdutoAdd from './screens/telaProdutoAdd';
import TelaHome from './screens/telaHome';
import ProdutosScreen from './screens/ProdutosScreen';
import telaComparar from './screens/telaComparar';

// Criando o Stack Navigator
const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator initialRouteName="telaHome">
      <Stack.Screen options={{ headerShown: false }} name="telaHome" component={TelaHome} />
      <Stack.Screen options={{ headerShown: false }} name="ProdutosScreen" component={ProdutosScreen} />
      <Stack.Screen options={{ headerShown: false }} name="telaProdutoAdd" component={TelaProdutoAdd} />
      <Stack.Screen options={{ headerShown: false }} name="telaComparar" component={telaComparar} />
      </Stack.Navigator>
  );
};

export default Routes;