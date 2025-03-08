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

  const getProdutos = async () => {
    try {
      const response = await axios.get<Produto[]>(
        "http://localhost:3001/produtos"
      );

      setProdutos(response?.data ?? []);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  };

  console.log(produtos);

  const produtosFiltrados = produtos.filter((produto) =>
    produto.nome.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    getProdutos(); 
  }, []);

  return (
    <View style={styles.container}>
      {/* Conteúdo rolável */}
      <ScrollView style={styles.scrollContainer}>
        <PesquisaBar search={search} setSearch={setSearch} />
        <ParaVoce />
        <CategoriasHome />

        <Text variant="headlineSmall" style={styles.sectionTitle}>
          Ofertas
        </Text>
        <ScrollView style={{ marginTop: 20, paddingHorizontal: 16 }}>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
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
    flex: 1, // Ocupa todo o espaço disponível, exceto o espaço do MenuInferior
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