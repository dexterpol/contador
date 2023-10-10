
import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Tela1 = () => {
  const [counter, setCounter] = useState(0);
  const navigation = useNavigation(); 
  return (
    <View>
      <Text>Resultado: {counter}</Text>
      <Button title="+" onPress={() => setCounter(counter + 1)} />
      <Button title="-" onPress={() => setCounter(counter - 1)} />
      <Button title="Resetar" onPress={() => setCounter(0)} />


      <Button  onPress={() => navigation.navigate("Tela2")} title="Navegar para a Tela 2" />
    </View>
  );
};

export default Tela1;
