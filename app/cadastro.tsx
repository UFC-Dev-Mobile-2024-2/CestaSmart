import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Appbar, Text, TextInput, Button, Snackbar } from "react-native-paper";
import { useRouter } from "expo-router";

const CadastroScreen = () => {
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    senha: "",
    confirmarSenha: "",
    rua: "",
    numero: "",
    bairro: "",
    complemento: "",
  });

  const handleCadastro = () => {
    setVisible(true); // Exibe o Snackbar
    setTimeout(() => {
      setVisible(false);
      router.push("/home"); // Redireciona após o tempo do pop-up
    }, 3000);
  };

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.appbar}>
        <Appbar.BackAction onPress={() => router.push("/login")} />
        <Appbar.Content title="Cadastro" titleStyle={styles.headerTitle} />
      </Appbar.Header>

      <View style={styles.formContainer}>
        <Text style={styles.sectionTitle}>Dados Pessoais</Text>
        <View style={styles.row}>
          <TextInput
            label="Nome"
            mode="outlined"
            style={styles.inputHalf}
            value={form.nome}
            onChangeText={(text) => setForm({ ...form, nome: text })}
          />
          <TextInput
            label="Sobrenome"
            mode="outlined"
            style={styles.inputHalf}
            value={form.sobrenome}
            onChangeText={(text) => setForm({ ...form, sobrenome: text })}
          />
        </View>
        <TextInput
          label="E-mail"
          mode="outlined"
          style={styles.input}
          value={form.email}
          onChangeText={(text) => setForm({ ...form, email: text })}
        />
        <TextInput
          label="Senha"
          mode="outlined"
          secureTextEntry
          style={styles.input}
          value={form.senha}
          onChangeText={(text) => setForm({ ...form, senha: text })}
        />
        <TextInput
          label="Confirmar Senha"
          mode="outlined"
          secureTextEntry
          style={styles.input}
          value={form.confirmarSenha}
          onChangeText={(text) => setForm({ ...form, confirmarSenha: text })}
        />

        <Text style={styles.sectionTitle}>Endereço</Text>
        <View style={styles.row}>
          <TextInput
            label="Rua"
            mode="outlined"
            style={styles.inputHalf}
            value={form.rua}
            onChangeText={(text) => setForm({ ...form, rua: text })}
          />
          <TextInput
            label="Nº"
            mode="outlined"
            style={styles.inputSmall}
            value={form.numero}
            onChangeText={(text) => setForm({ ...form, numero: text })}
          />
        </View>
        <TextInput
          label="Bairro"
          mode="outlined"
          style={styles.input}
          value={form.bairro}
          onChangeText={(text) => setForm({ ...form, bairro: text })}
        />
        <TextInput
          label="Complemento"
          mode="outlined"
          style={styles.input}
          value={form.complemento}
          onChangeText={(text) => setForm({ ...form, complemento: text })}
        />

        <Text style={styles.loginText}>
          Já tem uma conta?{" "}
          <Text style={styles.loginLink} onPress={() => router.push("/login")}>
            Entrar
          </Text>
        </Text>

        <Button mode="contained" style={styles.button} onPress={handleCadastro}>
          Cadastrar
        </Button>
      </View>

      <Snackbar
        visible={visible}
        onDismiss={() => setVisible(false)}
        duration={3000}
        style={styles.snackbar}
      >
        <Text style={styles.snackbarText}>
          <Text style={{ fontWeight: "bold" }}>Cadastro realizado com sucesso!</Text>{"\n"}
          Bem-vindo! Agora você pode aproveitar todas as funcionalidades do app.
        </Text>
      </Snackbar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDF6F1",
  },
  appbar: {
    backgroundColor: "#FDF6F1",
    elevation: 0,
    justifyContent: "space-between",
  },
  headerTitle: {
    textAlign: "center",
  },
  formContainer: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#5A382D",
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    backgroundColor: "#FAE7DE",
    marginBottom: 10,
  },
  inputHalf: {
    width: "48%",
    backgroundColor: "#FAE7DE",
    marginBottom: 10,
  },
  inputSmall: {
    width: "20%",
    backgroundColor: "#FAE7DE",
    marginBottom: 10,
  },
  loginText: {
    textAlign: "center",
    color: "#5A382D",
    marginTop: 10,
  },
  loginLink: {
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  button: {
    backgroundColor: "#5A382D",
    marginTop: 20,
    padding: 8,
  },
  snackbar: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "#F5E3DA",
  },
  snackbarText: {
    color: "#5A382D",
    textAlign: "center",
  },
});

export default CadastroScreen;
