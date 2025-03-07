import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Button, Appbar, Text } from 'react-native-paper';

const ScannerScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Appbar */}
      <Appbar.Header style={styles.appbar}>
        <Appbar.BackAction onPress={() => {}} />
        <Appbar.Content title="Scanner" titleStyle={styles.appbarTitle} />
        <Appbar.Action icon="bell-outline" onPress={() => {}} />
      </Appbar.Header>
      
      {/* Texto explicativo */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>Escaneie o Produto</Text>
        <Text style={styles.subtitle}>
          Aproxime o código de barras do produto à câmera para escanear e adicionar à sua cesta!
        </Text>
      </View>
      
      {/* Simulação do scanner */}
      <View style={styles.scannerContainer}>
        <Image source={require('/workspaces/CestaSmart/assets/images/icon.png')} style={styles.scannerImage} />
      </View>
      
      {/* Botões */}
      <View style={styles.buttonContainer}>
        <Button mode="outlined" onPress={() => {}} style={styles.cancelButton} textColor="#7A4E32">
          Cancelar
        </Button>
        <Button mode="contained" onPress={() => {}} style={styles.nextButton}>
          Avançar
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF5EF',
    paddingBottom: 20,
  },
  appbar: {
    backgroundColor: '#FAF5EF',
    elevation: 0,
  },
  appbarTitle: {
    textAlign: 'center',
  },
  textContainer: {
    paddingHorizontal: 16,
    marginBottom: -5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#3D2C1D',
    marginTop: 30,
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'left',
    color: '#7A4E32',
    marginTop: 2,
  },
  scannerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -90,
  },
  scannerImage: {
    width: '90%',
    height: '60%',
    resizeMode: 'contain',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginTop: 5,
  },
  cancelButton: {
    borderColor: '#7A4E32',
    marginRight: 10,
  },
  nextButton: {
    backgroundColor: '#7A4E32',
  },
});

export default ScannerScreen;