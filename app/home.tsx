import { useState, useEffect } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import Header from './components/Header';
import ParaVoce from './components/ParaVoce';
import OfertaProduto from './components/OfertaProduto';
import ProdutoCard from './components/ProdutoCard';
import MenuInferior from './components/MenuInferior';
import { useNavigation } from '@react-navigation/native';
import PesquisaBar from './components/PesquisaBar';
import CategoriasHome from './components/CategoriasHome';


export default function TelaHome() {
    const navigation = useNavigation();

      const [search, setSearch] = useState('');
    
  
    const produtos = [
        { id: 1, nome: 'Óleo de Soja', preco: 'R$ 9,99', mercado: 'Nosso Atacarejo', imagem: require('../assets/images/oleo.webp') },
        { id: 2, nome: 'YoPRO', preco: 'R$ 13,99', mercado: 'Supermercado Pinheiro', imagem: require('../assets/images/yopro.png') },
        { id: 3, nome: 'Molho de tomate', preco: 'R$ 4,99', mercado: 'Super São Geraldo', imagem: require('../assets/images/molho.png') },
    ];

    const produtosFiltrados = produtos.filter((produto) =>
      produto.nome.toLowerCase().includes(search.toLowerCase())
    );
    
  useEffect(() => {
    console.log("Produtos carregados:", produtos);
  }, []);

  return (
    <ScrollView style={styles.container}>
      <PesquisaBar search={search} setSearch={setSearch} />
      <ParaVoce />
      <CategoriasHome />

      <ScrollView style={{ marginTop: 20, paddingHorizontal: 16 }}>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          {produtosFiltrados.map((produto) => (
            <ProdutoCard key={produto.id} produto={produto} />
          ))}
        </View>
      </ScrollView>

      <MenuInferior />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff8f6',
  },
  produtoContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 16,
  },
  carregandoTexto: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
    color: '#555',
  },
});
