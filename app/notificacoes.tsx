import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Appbar } from 'react-native-paper';
import DescontoNotificacao from './components/DescontoNotificacao';
import AlertaNotificacao from './components/AlertaNotificacao';
import MenuInferior from './components/MenuInferior';

const NotificationsScreen = () => {
  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction />
        <Appbar.Content style={{ alignItems: 'center' }} title="Notificações" />
      </Appbar.Header>
      <ScrollView style={styles.content}>
        <DescontoNotificacao />
        <AlertaNotificacao />
      </ScrollView>
      <MenuInferior/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9F3EE' },
  content: { padding: 20 },
});

export default NotificationsScreen;
