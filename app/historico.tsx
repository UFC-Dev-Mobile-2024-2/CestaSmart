import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Button, Divider } from 'react-native';
import { Appbar, IconButton, FAB, List } from 'react-native-paper';
import { useRouter } from "expo-router";

const HistoricoComprasScreen: React.FC = () => {
  const [historico, setHistorico] = useState<any[]>([]);
  const router = useRouter();

  // Simulando a API que traria os dados do histórico de compras
  const fetchHistorico = async () => {
    try {
      // Aqui você substituiria pela sua API real
      const response = [
        {
          local: "Nosso Atarejo",
          data: "18/02/2025",
          itens: [
            { nome: "Óleo", qtd: "900ml", valor: "7,43" },
            { nome: "Tomate", qtd: "500g", valor: "9,95" },
            { nome: "Alho", qtd: "1kg", valor: "11,99" },
            // Adicione mais itens conforme necessário
          ],
          valorTotal: "109,70"
        },
        // Adicione mais compras se necessário
      ];

      setHistorico(response);
    } catch (error) {
      console.error("Erro ao buscar histórico de compras:", error);
    }
  };

  useEffect(() => {
    fetchHistorico();
  }, []);

  const handleComprarNovamente = () => {
    // Implementar o redirecionamento para a tela de compra
    console.log("Navegar para a tela de produtos");
  };

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.appbar}>
        <Appbar.BackAction onPress={() => router.back()} />
        <Appbar.Content title="Histórico de Compras" />
      </Appbar.Header>

      <FlatList
        data={historico}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.localText}>Local: {item.local}</Text>
            <Text style={styles.dateText}>Data: {item.data}</Text>

            {/* Lista de itens */}
            <View style={styles.itemsContainer}>
              <View style={styles.headerRow}>
                <Text style={styles.columnHeader}>Itens</Text>
                <Text style={styles.columnHeader}>Qtd</Text>
                <Text style={styles.columnHeader}>Valor</Text>
              </View>
              <FlatList
                data={item.itens}
                keyExtractor={(subItem, index) => index.toString()}
                renderItem={({ item }) => (
                  <View style={styles.row}>
                    <Text style={styles.itemText}>{item.nome}</Text>
                    <Text style={styles.itemText}>{item.qtd}</Text>
                    <Text style={styles.itemText}>R$ {item.valor}</Text>
                  </View>
                )}
              />
            </View>

            <View style={styles.totalContainer}>
            <Text style={styles.totalText}>Valor Total:</Text>
            <Text style={styles.totalValue}>R$ {item.valorTotal}</Text>
          </View>


            {/* Botão para comprar novamente */}

          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F3EE',
  },
  appbar: {
    backgroundColor: '#F9F3EE',
    elevation: 0,
  },
  card: {
    backgroundColor: '#FFFFFF',
    marginBottom: 15,
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 16,
    elevation: 3,
  },
  localText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3D2C1D',
  },
  dateText: {
    fontSize: 14,
    color: '#7A4E32',
    marginBottom: 10,
  },
  itemsContainer: {
    marginBottom: 10,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 5,
  },
  columnHeader: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#3D2C1D',
    width: '30%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 5,
  },
  itemText: {
    fontSize: 14,
    color: '#7A4E32',
    width: '30%',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3D2C1D',
    marginTop: 10,
  },
  totalValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3D2C1D',
    marginTop: 10,
    textAlign: 'right', // Alinha à direita
  },
  buyAgainButton: {
    backgroundColor: '#8E4D2F', // Cor de fundo marrom
    width: '100%',
    paddingVertical: 10,
    marginTop: 10,
  },
  buttonLabel: {
    color: '#FFF', // Cor do texto branco
  },
});

export default HistoricoComprasScreen;
