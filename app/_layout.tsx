import { useRouter } from "expo-router";
import { useEffect } from "react";
import { View, Text } from "react-native";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/onboarding"); // Redireciona para a tela de onboarding
  }, []);

  return (
    <View>
      <Text>Carregando...</Text>
    </View>
  );
}
