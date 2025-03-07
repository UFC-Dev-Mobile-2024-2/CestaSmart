import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TelaProdutoAdd from './screens/telaProdutoAdd';
import TelaHome from './screens/telaHome';
import ProdutosScreen from './screens/ProdutosScreen';
import TelaComparar from './screens/telaComparar';
import Onboarding from './screens/Onboarding'; 
import Login from './screens/Login';
import Cadastro from './screens/Cadastro';

const Stack = createStackNavigator<StackParamList>();

export type StackParamList = {
  Onboarding: undefined;
  Login: undefined;
  Cadastro: undefined;
  telaHome: undefined;
  ProdutosScreen: undefined;
  telaProdutoAdd: undefined;
  telaComparar: undefined;
};

const Routes = () => {
  return (
    <Stack.Navigator initialRouteName="Onboarding"> {}
      <Stack.Screen options={{ headerShown: false }} name="Onboarding" component={Onboarding} />
      <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
      <Stack.Screen options={{ headerShown: false }} name="Cadastro" component={Cadastro} />
      <Stack.Screen options={{ headerShown: false }} name="telaHome" component={TelaHome} />
      <Stack.Screen options={{ headerShown: false }} name="ProdutosScreen" component={ProdutosScreen} />
      <Stack.Screen options={{ headerShown: false }} name="telaProdutoAdd" component={TelaProdutoAdd} />
      <Stack.Screen options={{ headerShown: false }} name="telaComparar" component={TelaComparar} />
    </Stack.Navigator>
  );
};

export default Routes;
