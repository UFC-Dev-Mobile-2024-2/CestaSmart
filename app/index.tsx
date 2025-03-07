import { useEffect } from "react";
import { useRouter, useRootNavigationState } from "expo-router";
import { View, ActivityIndicator } from "react-native";

export default function Index() {
  const router = useRouter();
  const navigationState = useRootNavigationState(); // Verifica se o layout está pronto

  useEffect(() => {
    if (!navigationState?.key) return; // Aguarda o layout ser montado

    router.replace("/onboarding"); // Só redireciona após o layout estar pronto
  }, [navigationState?.key]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" color="#000" />
    </View>
  );
}
