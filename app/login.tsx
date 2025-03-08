import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import {
  Appbar,
  Text,
  TextInput,
  Button,
  Dialog,
  Portal,
  Provider,
  DefaultTheme,
} from "react-native-paper";
import { useRouter } from "expo-router";
import { login } from "../services/auth";

// 🔥 Tema personalizado para remover cores roxas padrão do Paper
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#6B3E2E", 
    accent: "#8A5A44", 
    background: "#FDF6F1", 
    surface: "#FAE7DE", 
    text: "#6B3E2E", 
    error: "#B00020", 
  },
};

const LoginScreen: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [visible, setVisible] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("");

  const showDialog = (message: string) => {
    setDialogMessage(message);
    setVisible(true);
  };

  const hideDialog = () => {
    setVisible(false);
  };

  const handleLogin = async () => {
    if (!email || !password) {
      showDialog("Preencha todos os campos antes de continuar.");
      return;
    }

    try {
      const data = await login({ email, password });

      if (data.token) {
        showDialog("Login realizado com sucesso! 🎉");

        setTimeout(() => {
          hideDialog();
          router.push("/home"); 
        }, 2000);
      } else {
        showDialog("Credenciais inválidas. Tente novamente.");
      }
    } catch (error: any) {
      showDialog(error.response?.data?.error || "Credenciais incorretas. Verifique os dados.");
    }
  };

  return (
    <Provider theme={theme}>
      <View style={styles.container}>
        <Appbar.Header style={styles.appbar}>
          <Appbar.BackAction onPress={() => router.push("/onboarding")} />
          <Appbar.Content title="Login" titleStyle={styles.headerTitle} />
        </Appbar.Header>

        <Image source={require("../assets/images/img6.png")} style={styles.image} />

        <Text style={styles.title}>Acesse sua conta</Text>
        <Text style={styles.subtitle}>Entre com seu e-mail e senha para continuar!</Text>

        <TextInput
          label="E-mail"
          mode="outlined"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
          outlineColor="#8A5A44"
          activeOutlineColor="#6B3E2E"
        />
        <TextInput
          label="Senha"
          mode="outlined"
          secureTextEntry
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          outlineColor="#8A5A44"
          activeOutlineColor="#6B3E2E"
        />

        <Text style={styles.forgotPassword} onPress={() => console.log("Esqueceu a senha?")}>
          Esqueceu a senha?
        </Text>

        <Button mode="contained" style={styles.button} onPress={handleLogin}>
          Entrar
        </Button>

        <Text style={styles.registerText}>
          Não tem uma conta?{" "}
          <Text style={styles.registerLink} onPress={() => router.push("/cadastro")}>
            Criar
          </Text>
        </Text>

        
        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog} style={styles.dialog}>
            <Dialog.Title style={styles.dialogTitle}>Aviso</Dialog.Title>
            <Dialog.Content>
              <Text style={styles.dialogText}>{dialogMessage}</Text>
            </Dialog.Content>
            <Dialog.Actions>
              <Button textColor="#6B3E2E" onPress={hideDialog}>OK</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    </Provider>
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
    height: 56,
    justifyContent: "space-between",
  },
  headerTitle: {
    textAlign: "center",
    color: "#6B3E2E",
  },
  image: {
    width: 180,
    height: 180,
    marginBottom: 20,
    resizeMode: "contain",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#6B3E2E",
  },
  subtitle: {
    fontSize: 14,
    color: "#8A5A44",
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
    color: "#8A5A44",
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
    color: "#8A5A44", 
  },
  
  dialog: {
    backgroundColor: "#FAE7DE", 
  },
  dialogTitle: {
    color: "#6B3E2E", 
    fontWeight: "bold",
  },
  dialogText: {
    color: "#6B3E2E",
    fontSize: 16,
  },
});

export default LoginScreen;
