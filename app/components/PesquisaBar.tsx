import * as React from 'react';
import { View } from 'react-native';
import { Searchbar } from 'react-native-paper';

const MyComponent = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <View style={{ padding: 16 }}>
      <Searchbar
        placeholder="Papel Higiênico"
        onChangeText={setSearchQuery}
        value={searchQuery} 
        style={{ backgroundColor: '#f6e5de' }} 
      />
    </View>
  );
};

export default MyComponent;
