import * as React from "react";
import { Appbar } from "react-native-paper";
import { useRouter, useSegments } from "expo-router";

const MyComponent = () => {
  const router = useRouter();
  const segments = useSegments();

  const voltarHome = () => {
    router.push("/home"); // Certifique-se de que app/home.tsx existe
  };

  const _handleMore = () => console.log("Shown more");

  // Verificar segmentos corretamente
  const getTitle = () => {
    const currentRoute = segments.join("/");
    console.log("Rota atual:", currentRoute);

    if (currentRoute === "home") return "Página Inicial";
    if (currentRoute === "perfil") return "Perfil";
    return "Título Padrão";
  };

  return (
    <Appbar.Header mode="center-aligned">
      <Appbar.BackAction onPress={voltarHome} />
      <Appbar.Content title={getTitle()} />
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
    </Appbar.Header>
  );
};

export default MyComponent;
