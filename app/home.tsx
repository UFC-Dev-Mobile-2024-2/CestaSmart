import { useState, useEffect } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import Header from './components/Header';
import ParaVoce from './components/ParaVoce';
import OfertaProduto from './components/OfertaProduto';
import ProdutoCard from './components/ProdutoCard';
import MenuInferior from './components/MenuInferior';
import PesquisaBar from './components/PesquisaBar';
import CategoriasHome from './components/CategoriasHome';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
    const router = useRouter();
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
            <Header title="Página Inicial" />
            <PesquisaBar search={search} setSearch={setSearch} />
            <ParaVoce />
            <CategoriasHome />

            <Text variant="headlineSmall" style={styles.sectionTitle}>Ofertas</Text>
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
    sectionTitle: {
        marginTop: 20,
        marginLeft: 16,
        fontWeight: 'bold',
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