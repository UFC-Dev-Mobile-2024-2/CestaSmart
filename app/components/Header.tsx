import * as React from "react";
import { Appbar } from "react-native-paper";
import { useRouter, useSegments } from "expo-router";

const MyComponent = () => {
  const router = useRouter(); // Substitui useNavigation()
  const segments = useSegments(); // Obtém a rota atual

  const voltarHome = () => {
    router.push("/home"); // Agora usa a barra inicial
  };

  const _handleMore = () => console.log("Shown more");

  // Determinar dinamicamente o título baseado na rota
  const getTitle = () => {
    console.log(segments); // Verifique quais segmentos estão sendo retornados
    if (segments.includes("home")) return "Página Inicial";
    if (segments.includes("perfil")) return "Perfil";
    return "Título Padrão"; // Defina um título padrão para outras telas
  };

  return (
    <Appbar.Header mode="center-aligned">
      <Appbar.BackAction onPress={voltarHome} />
      <Appbar.Content title={getTitle()} /> {/* O título muda dinamicamente */}
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
    </Appbar.Header>
  );
};

export default MyComponent;
