import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { useNavigation, useRoute } from '@react-navigation/native'; // Importando useRoute para acessar a rota atual

const MyComponent = () => {
  const navigation = useNavigation();
  const route = useRoute();  // Obtendo a rota atual

  const _goBack = () => console.log('Went back');

  const voltarHome = () => {
    navigation.navigate('telaHome');
  };

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

  // Atualizando o título dinamicamente baseado na tela
  React.useEffect(() => {
    const title = route.name === 'telaHome' ? 'Página Inicial' : 
                  route.name === 'telaPerfil' ? 'Perfil' :
                  'Título Padrão'; // Coloque aqui o título para outras telas
    
    navigation.setOptions({
      title: title,  // Mudando o título da Appbar dinamicamente
    });
  }, [route.name, navigation]); // Atualiza o título sempre que a rota mudar

  return (
    <Appbar.Header mode="center-aligned">
      <Appbar.BackAction onPress={voltarHome} />
      <Appbar.Content title={route.name} /> {/* O título será atualizado automaticamente */}
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
    </Appbar.Header>
  );
};

export default MyComponent;
