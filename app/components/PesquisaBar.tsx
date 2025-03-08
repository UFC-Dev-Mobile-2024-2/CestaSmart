import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type PesquisaBarProps = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

const PesquisaBar: React.FC<PesquisaBarProps> = ({ search, setSearch }) => {
  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Verduras"
        onChangeText={setSearch}
        value={search}
        style={styles.searchbar}
        
        // Ícone da esquerda (engrenagem)
        icon={() => (
          <MaterialCommunityIcons name="cog" size={24} color="#7A4E32" />
        )}
        onIconPress={() => console.log("Engrenagem pressionada")}

        // Ícone da direita (lupa) - só aparece quando há texto, por padrão
        clearIcon={() => (
          <MaterialCommunityIcons name="magnify" size={24} color="#7A4E32" />
        )}
        onClearIconPress={() => console.log("Lupa pressionada")}
      />
    </View>
  );
};

export default PesquisaBar;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 27,
    paddingHorizontal: 16,
  },
  searchbar: {
    backgroundColor: '#f6e5de',
    borderRadius: 20,
    elevation: 0, // remove sombra para ficar mais "flat"
  },
});
