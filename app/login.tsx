import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Appbar, Text, TextInput, Button } from "react-native-paper";
import { useRouter } from "expo-router";

const LoginScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.appbar}>
        <Appbar.BackAction onPress={() => router.push("/onboarding")} />
        <Appbar.Content title="Login" titleStyle={styles.headerTitle} />
      </Appbar.Header>

      <Image source={require("../assets/images/img6.png")} style={styles.image} />

      <Text style={styles.title}>Acesse sua conta</Text>
      <Text style={styles.subtitle}>Entre com seu e-mail e senha para continuar!</Text>

      <TextInput label="E-mail" mode="outlined" style={styles.input} />
      <TextInput label="Senha" mode="outlined" secureTextEntry style={styles.input} />

      <Text style={styles.forgotPassword} onPress={() => console.log("Esqueceu a senha?")}>
        Esqueceu a senha?
      </Text>

      <Button mode="contained" style={styles.button} onPress={() => router.push("/home")}>
        Entrar
      </Button>

      <Text style={styles.registerText}>
        Não tem uma conta?{" "}
        <Text style={styles.registerLink} onPress={() => router.push("/cadastro")}>
          Criar
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FDF6F1",
    padding: 20,
  },
  appbar: {
    backgroundColor: "#FDF6F1",
    elevation: 0,
    height: 56, // Mesmo tamanho do header de Cadastro
    justifyContent: "space-between",
  },
  headerTitle: {
    textAlign: "center",
  },
  image: {
    width: 180,
    height: 180,
    marginBottom: 20,
    resizeMode: "contain",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#6B3E2E",
  },
  subtitle: {
    fontSize: 14,
    color: "#6B3E2E",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    marginBottom: 10,
    backgroundColor: "#FAE7DE",
  },
  forgotPassword: {
    alignSelf: "flex-end",
    color: "#6B3E2E",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#6B3E2E",
    width: "100%",
    padding: 8,
  },
  registerText: {
    marginTop: 20,
    color: "#6B3E2E",
  },
  registerLink: {
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});

export default LoginScreen;
