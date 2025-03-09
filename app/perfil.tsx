import React, { useState } from 'react';
import { ScrollView, View, StyleSheet, Pressable } from 'react-native';
import { Appbar, Text } from 'react-native-paper';
import MenuInferior from './components/MenuInferior';
import { useRouter } from 'expo-router';

export default function ProfileScreen() {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Appbar.Header style={{ backgroundColor: '#ffffff' }}>
        <Appbar.BackAction onPress={() => router.back()} color="#231A16" />
        <Appbar.Content title="Configurações" titleStyle={{ textAlign: 'center', color: '#231A16' }} />
        <Appbar.Action icon="bell-outline" color="#231A16" />
      </Appbar.Header>

      <ScrollView style={styles.scrollContainer}>
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
            <Text variant="bodyMedium" onPress={() => router.push('/historico')} style={styles.menuText}>Histórico de compras</Text>
          </View>
          <View style={styles.menuItem}>
            <Text variant="bodyMedium" style={styles.menuText}>Ajuda e suporte</Text>
          </View>
          <Pressable
            style={[styles.menuItem, styles.logout, isHovered && styles.logoutHover]}
            onPressIn={() => setIsHovered(true)}
            onPressOut={() => setIsHovered(false)}
          >
            <Text variant="bodyMedium" style={styles.logoutText}>Sair da conta</Text>
          </Pressable>
        </View>
      </ScrollView>

      <MenuInferior />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollContainer: {
    flex: 1,
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
    color: '#4F2E1D',
  },
  profileEmail: {
    fontSize: 14,
    color: '#885A44',
    textDecorationLine: 'underline',
    fontFamily: 'Arial',
  },
  economia: {
    marginBottom: 24,
    paddingHorizontal: 16,
  },
  economiaTitle: {
    fontWeight: 'bold',
    color: '#4F2E1D',
    marginBottom: 12,
  },
  economiaBox: {
    backgroundColor: '#FFF5F5',
    borderRadius: 12,
    padding: 16,
    borderWidth: 2,
    borderColor: '#FFD700',
  },
  economiaText: {
    fontSize: 14,
    color: '#4F2E1D',
  },
  menu: {
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    paddingHorizontal: 16,
  },
  menuItem: {
    backgroundColor: '#FFF5F5',
    borderRadius: 12,
    padding: 16,
  },
  menuText: {
    fontSize: 16,
    color: '#4F2E1D',
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