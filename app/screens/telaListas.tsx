import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, List, IconButton, FAB, PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>
      <View style={styles.container}>
        {}
        <View style={styles.header}>
          <IconButton icon="arrow-left" size={24} iconColor="#000000" />
          <Text style={styles.headerTitle}>Listas</Text>
          <IconButton icon="bell-outline" size={24} iconColor="#8E4D2F" />
        </View>

        <View style={styles.listContainer}>
          <List.Item
            title="Lista protótipo"
            description="08 itens"
            titleStyle={styles.listItemTitle}
            descriptionStyle={styles.listItemDescription}
            right={() => <IconButton icon="dots-vertical" iconColor="#000000" />}
            style={styles.listItem}
          />
          <List.Item
            title="Compras da semana"
            description="12 itens"
            titleStyle={styles.listItemTitle}
            descriptionStyle={styles.listItemDescription}
            right={() => <IconButton icon="dots-vertical" iconColor="#000000" />}
            style={styles.listItem}
          />
          <List.Item
            title="Produtos de Limpeza"
            description="06 itens"
            titleStyle={styles.listItemTitle}
            descriptionStyle={styles.listItemDescription}
            right={() => <IconButton icon="dots-vertical" iconColor="#000000" />}
            style={styles.listItem}
          />
        </View>

        <FAB icon="pencil" style={styles.fab} color="#8E4D2F" />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF6F2',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2D1E15',
  },
  listContainer: {
    marginTop: 16,
  },
  listItem: {
    backgroundColor: '#FFF6F2',
    borderBottomWidth: 1,
    borderBottomColor: '#E5CFC3',
  },
  listItemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2D1E15',
  },
  listItemDescription: {
    fontSize: 14,
    color: '#8B5D33',
  },
  fab: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    backgroundColor: '#E5CFC3',
  },
});
