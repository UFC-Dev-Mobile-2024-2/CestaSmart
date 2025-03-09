import { useState, useEffect } from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import Header from "./components/Header";
import ParaVoce from "./components/ParaVoce";
import OfertaProduto from "./components/OfertaProduto";
import ProdutoCard, { Produto } from "./components/ProdutoCard";
import MenuInferior from "./components/MenuInferior";
import PesquisaBar from "./components/PesquisaBar";
import CategoriasHome from "./components/CategoriasHome";
import { useRouter } from "expo-router";
import axios from "axios";

export default function HomeScreen() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [produtos, setProdutos] = useState<Produto[]>([]);

  const produtosPadrao = [
    { id: 1, nome: 'Óleo de Soja', preco: 'R$ 9,99', mercado: 'Nosso Atacarejo', imagem: require('../assets/images/oleo.webp') },
        { id: 2, nome: 'YoPRO', preco: 'R$ 13,99', mercado: 'Supermercado Pinheiro', imagem: require('../assets/images/yopro.png') },
        { id: 3, nome: 'Molho de tomate', preco: 'R$ 4,99', mercado: 'Super São Geraldo', imagem: require('../assets/images/molho.png') },

  ];

  const getProdutos = async () => {
    try {
      const response = await axios.get<Produto[]>("http://localhost:3001/produtos");
      setProdutos(response?.data.length ? response.data : produtosPadrao);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
      setProdutos(produtosPadrao); // Usa os produtos padrão caso a API falhe
    }
  };

  useEffect(() => {
    getProdutos();
  }, []);

  const produtosFiltrados = produtos.filter((produto) =>
    produto.nome.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <PesquisaBar search={search} setSearch={setSearch} />
        <ParaVoce />
        <CategoriasHome />
        
        <Text variant="headlineSmall" style={styles.sectionTitle}>Ofertas</Text>
        <ScrollView style={{ marginTop: 20, paddingHorizontal: 16 }}>
          <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
            {produtosFiltrados.map((produto) => (
              <ProdutoCard key={produto.id} produto={produto} />
            ))}
          </View>
        </ScrollView>
      </ScrollView>
      
      <MenuInferior />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff8f6",
  },
  scrollContainer: {
    flex: 1,
  },
  sectionTitle: {
    marginTop: 20,
    marginLeft: 16,
    fontWeight: "bold",
  },
  produtoContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 16,
  },
  carregandoTexto: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
    color: "#555",
  },
});
