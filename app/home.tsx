import { useState, useEffect } from 'react';
import { ScrollView, View, StyleSheet, ActivityIndicator } from 'react-native';
import { Text } from 'react-native-paper';
import Header from './components/Header';
import ParaVoce from './components/ParaVoce';
import ProdutoCard from './components/ProdutoCard';
import MenuInferior from './components/MenuInferior';
import PesquisaBar from './components/PesquisaBar';
import CategoriasHome from './components/CategoriasHome';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
    const router = useRouter();
    const [search, setSearch] = useState('');
    const [produtos, setProdutos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:3001/produtos")
            .then((res) => res.json())
            .then((data) => {
                setProdutos(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Erro ao buscar produtos:", error);
                setLoading(false);
            });
    }, []);

    const produtosFiltrados = produtos.filter((produto) =>
        produto.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollContainer}>
                <PesquisaBar search={search} setSearch={setSearch} />
                <ParaVoce />
                <CategoriasHome />

                <Text variant="headlineSmall" style={styles.sectionTitle}>Ofertas</Text>

                {loading ? (
                    <ActivityIndicator size="large" color="#0000ff" style={styles.loading} />
                ) : (
                    <ScrollView style={{ marginTop: 20, paddingHorizontal: 16 }}>
                        <View style={styles.produtoContainer}>
                            {produtosFiltrados.map((produto) => (
                                <ProdutoCard key={produto.id} produto={produto} />
                            ))}
                        </View>
                    </ScrollView>
                )}
            </ScrollView>

            <MenuInferior />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff8f6',
    },
    scrollContainer: {
        flex: 1,
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
    loading: {
        marginTop: 20,
    },
});