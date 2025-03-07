import * as React from 'react';
import { View } from 'react-native';
import { Searchbar } from 'react-native-paper';

type PesquisaBarProps = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

const PesquisaBar: React.FC<PesquisaBarProps> = ({ search, setSearch }) => {
  return (
    <View style={{ marginTop: 10, marginBottom: 27, paddingHorizontal: 16 }}>
      <Searchbar
        placeholder="Pesquisar produto..."
        onChangeText={setSearch} 
        value={search}  
        style={{ backgroundColor: '#f6e5de' }} 
      />
    </View>
  );
};

export default PesquisaBar;

