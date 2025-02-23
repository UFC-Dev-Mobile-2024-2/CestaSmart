import * as React from 'react';
import { Appbar } from 'react-native-paper';

const MyComponent = () => {
  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

  return (
    <Appbar.Header style={{ backgroundColor: '#fff8f6' }}>
      <Appbar.BackAction onPress={_goBack} />
      <Appbar.Content title="Produtos" />
      {/* Se necessário, adicione outros componentes de ações */}
      {/* <Appbar.Action icon="magnify" onPress={_handleSearch} /> */}
      {/* <Appbar.Action icon="dots-vertical" onPress={_handleMore} /> */}
    </Appbar.Header>
  );
};

export default MyComponent;
