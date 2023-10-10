
import React from "react";
import { View, Text, Button } from "react-native";

const Tela2 = ({ navigation }) => {
  return (
    <View>
      <Text>Esta é a Tela 2</Text>
      <Button
        title="Voltar para a Tela 1"
        onPress={() => navigation.navigate("Tela1")}
      />
    </View>
  );
};

export default Tela2;
