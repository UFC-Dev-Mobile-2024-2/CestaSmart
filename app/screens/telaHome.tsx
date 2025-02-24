import { useState, useEffect } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';
import ParaVoce from '../components/ParaVoce';
import Categoria from '../components/Categoria';
import OfertaProduto from '../components/OfertaProduto';
import ProdutoCard from '../components/ProdutoCard';
import MenuInferior from '../components/MenuInferior';

export default function TelaHome() {
  // 📌 Adicionando estado dos produtos corretamente
  const [produtos, setProdutos] = useState([
    { id: 1, imagem: { uri: '' }, nome: 'Produto 1', preco: 'R$ 10,00', mercado: 'Mercado A' },
    { id: 2, imagem: { uri: '' }, nome: 'Produto 2', preco: 'R$ 15,00', mercado: 'Mercado B' },
  ]);

  // Verifica se os produtos estão sendo carregados corretamente
  useEffect(() => {
    console.log("Produtos carregados:", produtos);
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Header />
      <ParaVoce />
      <Categoria />

      {/* Seção de Produtos */}
      <View style={styles.produtoContainer}>
        {produtos.length > 0 ? (
          produtos.map((produto) => <ProdutoCard key={produto.id} produto={produto} />)
        ) : (
          <Text style={styles.carregandoTexto}>Carregando produtos...</Text>
        )}
      </View>

      <OfertaProduto />
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
