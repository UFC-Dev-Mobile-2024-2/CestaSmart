import React, { useState } from "react";
import { View, Text, FlatList, Dimensions, Image } from "react-native";
import { Button } from "react-native-paper";
import { useRouter } from "expo-router";

const { width, height } = Dimensions.get("window");

// Definição dos slides
const slides = [
  { id: "1", title: "Facilite Suas Compras!", description: "Escaneie produtos, calcule o valor total e economize antes de chegar ao caixa!", image: require("../assets/images/img1.png") },
  { id: "2", title: "Escaneie e Adicione à Cesta", description: "Ao escanear um produto, ele entra na sua cesta e o total é atualizado automaticamente.", image: require("../assets/images/img2.png") },
  { id: "3", title: "Crie Sua Lista Antes de Sair de Casa", description: "Adicione produtos à sua lista e vá ao mercado com tudo planejado!", image: require("../assets/images/img3.png") },
  { id: "4", title: "Compare e Economize", description: "Descubra onde encontrar os melhores preços e aproveite promoções exclusivas!", image: require("../assets/images/img4.png") },
  { id: "5", title: "Pronto para Começar?", description: "Crie sua conta agora e aproveite uma nova forma de fazer compras!", image: require("../assets/images/img5.png") },
];

const Onboarding = () => {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      router.push("/cadastro"); // Substitui navigation.navigate("Cadastro")
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const renderItem = ({ item, index }) => (
    <View style={{ width, height, alignItems: "center", justifyContent: "center", padding: 20 }}>
      <Image source={item.image} style={{ width: 200, height: 200, marginBottom: 20 }} resizeMode="contain" />
      <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 20, color: "#5A382D" }}>{item.title}</Text>
      <Text style={{ textAlign: "center", marginTop: 10, color: "#5A382D" }}>{item.description}</Text>
      {index === slides.length - 1 && (
        <View style={{ marginTop: 30, width: "80%" }}>
          <Button
            mode="contained"
            onPress={() => router.push("/cadastro")}
            style={{ backgroundColor: "#5A382D", borderRadius: 10, paddingVertical: 5 }}
            labelStyle={{ color: "#FFF", fontWeight: "bold", fontSize: 16 }}
          >
            Crie uma conta
          </Button>
          <Button
            mode="text"
            onPress={() => router.push("/login")}
            labelStyle={{ color: "#5A382D", fontSize: 14, marginTop: 10 }}
          >
            Já tenho uma conta!
          </Button>
        </View>
      )}
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: "#FFF" }}>
      <View style={{ flex: 1 }}>
        {renderItem({ item: slides[currentIndex], index: currentIndex })}
      </View>
      {/* Indicador de progresso */}
      <View style={{ flexDirection: "row", justifyContent: "center", marginBottom: 20 }}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={{
              width: 8,
              height: 8,
              borderRadius: 4,
              backgroundColor: currentIndex === index ? "#5A382D" : "#D3B8A0",
              marginHorizontal: 5,
            }}
          />
        ))}
      </View>
      {/* Botões de navegação */}
      <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 20, marginBottom: 40 }}>
        <Button
          mode="text"
          onPress={handleBack}
          disabled={currentIndex === 0}
          labelStyle={{ color: currentIndex === 0 ? "#CCC" : "#5A382D", fontWeight: "bold" }}
        >
          Voltar
        </Button>
        {currentIndex < slides.length - 1 && (
          <Button
            mode="text"
            onPress={handleNext}
            labelStyle={{ color: "#5A382D", fontWeight: "bold" }}
          >
            Próximo
          </Button>
        )}
      </View>
    </View>
  );
};

export default Onboarding;
