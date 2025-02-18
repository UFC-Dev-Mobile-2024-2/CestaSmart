import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import Header from '../components/Header';
import Categoria from '../components/Categoria';
import PesquisaBar from '../components/PesquisaBar';
import ProdutoCard from '../components/ProdutoCard';
import MenuInferior from '../components/MenuInferior';

const ProdutosScreen = () => {
  const [search, setSearch] = useState('');

  const produtos = [
    { id: 1, nome: 'Óleo de Soja', preco: 'R$ 9,99', mercado: 'Nosso Atacarejo', imagem: require('../../assets/images/oleo.webp') },
    { id: 2, nome: 'YoPRO', preco: 'R$ 13,99', mercado: 'Supermercado Pinheiro', imagem: require('../../assets/images/yopro.png') },
    { id: 3, nome: 'Molho de tomate', preco: 'R$ 4,99', mercado: 'Super São Geraldo', imagem: require('../../assets/images/molho.png') },
  ];

  const produtosFiltrados = produtos.filter((produto) =>
    produto.nome.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: '#fff8f6' }}>
      <Header />
      <Categoria />
      <PesquisaBar search={search} setSearch={setSearch} />
      <ScrollView>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          {produtosFiltrados.map((produto) => (
            <ProdutoCard key={produto.id} produto={produto} />
          ))}
        </View>
      </ScrollView>
      <MenuInferior />
    </View>
  );
};

export default ProdutosScreen;
