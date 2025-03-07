import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Appbar } from 'react-native-paper';
import DescontoNotificacao from './components/DescontoNotificacao';
import AlertaNotificacao from './components/AlertaNotificacao';
import BarraNavegador from './components/BarraNavegador';

const NotificationsScreen = () => {
  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Notificações" />
      </Appbar.Header>
      <ScrollView style={styles.content}>
        <DescontoNotificacao />
        <AlertaNotificacao />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9F3EE' },
  content: { padding: 20 },
});

export default NotificationsScreen;
