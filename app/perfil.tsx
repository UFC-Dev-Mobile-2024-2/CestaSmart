import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import MenuInferior from './components/MenuInferior';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.header}>
          <Text variant="headlineSmall" style={styles.title}>Configurações</Text>
        </View>

        <View style={styles.profile}>
          <img
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&h=200&auto=format&fit=crop"
            alt="Profile"
            style={styles.profileImg}
          />
          <Text variant="titleMedium" style={styles.profileName}>Evelyn Cardoso</Text>
          <a href="mailto:evecardoso@gmail.com" style={styles.profileEmail}>
            evecardoso@gmail.com
          </a>
        </View>

        <View style={styles.economia}>
          <Text variant="titleMedium" style={styles.economiaTitle}>Economia</Text>
          <View style={styles.economiaBox}>
            <Text variant="bodyMedium" style={styles.economiaText}>👏 Parabéns você economizou R$ 13,53! 🎉</Text>
          </View>
        </View>

        <View style={styles.menu}>
          <View style={styles.menuItem}>
            <Text variant="bodyMedium" style={styles.menuText}>Dados da conta</Text>
          </View>
          <View style={styles.menuItem}>
            <Text variant="bodyMedium" style={styles.menuText}>Histórico de compras</Text>
          </View>
          <View style={styles.menuItem}>
            <Text variant="bodyMedium" style={styles.menuText}>Ajuda e suporte</Text>
          </View>
          <View style={[styles.menuItem, styles.logout]}>
            <Text variant="bodyMedium" style={styles.logoutText}>Sair da conta</Text>
          </View>
        </View>
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
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 32,
    paddingHorizontal: 16,
  },
  title: {
    fontWeight: 'bold',
  },
  profile: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 32,
  },
  profileImg: {
    width: 96,
    height: 96,
    borderRadius: 48,
    marginBottom: 12,
  },
  profileName: {
    fontWeight: 'bold',
  },
  profileEmail: {
    fontSize: 14,
    color: 'gray',
    textDecorationLine: 'underline',
  },
  economia: {
    marginBottom: 24,
    paddingHorizontal: 16,
  },
  economiaTitle: {
    fontWeight: 'bold',
    marginBottom: 12,
  },
  economiaBox: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    borderWidth: 2,
    borderColor: '#FFD700',
  },
  economiaText: {
    fontSize: 14,
  },
  menu: {
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    paddingHorizontal: 16,
  },
  menuItem: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
  },
  menuText: {
    fontSize: 16,
  },
  logout: {
    borderColor: 'red',
    borderWidth: 1,
  },
  logoutText: {
    color: 'red',
  },
  logoutHover: {
    backgroundColor: '#ffe6e6',
  },
});
