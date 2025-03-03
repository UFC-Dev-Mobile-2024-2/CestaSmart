import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProdutosScreen from './screens/ProdutosScreen';
import telaProdutoAdd from './screens/telaProdutoAdd';

// Criando o Stack Navigator
const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator initialRouteName="ProdutosScreen">
      <Stack.Screen options={{
    headerShown: false,
  }} name="ProdutosScreen" component={ProdutosScreen} />

      <Stack.Screen options={{
    headerShown: false,
  }} name="telaProdutoAdd" component={telaProdutoAdd} />
    </Stack.Navigator>
  );
};

export default Routes;
