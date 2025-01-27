import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Alert,
  TouchableOpacity
} from "react-native";
import { styles } from "./styles";
import { Button } from "../../components/Button";
import { useNavigation, NavigationProp } from '@react-navigation/native';


export default function EditProducts() {

  const navigation = useNavigation<NavigationProp<any>>();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");

  function getRegisterProducts() {
    if (!name || !description || !price || !amount) {
      Alert.alert("Atenção", "Preencha todos os campos!");
      return;
    }

    Alert.alert("Produto registrado com sucesso!");
    setName("");
    setDescription("");
    setPrice("");
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar Produtos</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do Produto"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Descrição"
        value={description}
        onChangeText={setDescription}
        multiline
      />
      <TextInput
        style={styles.input}
        placeholder="Valor (R$)"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Quantidade de atual"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
      />

      <View style={styles.boxButton}>
        <Button
          text="Editar"
          onPress={getRegisterProducts}
        />
      </View>
      <TouchableOpacity>
        <Text style={styles.TextBotton}>Remover produto</Text>
      </TouchableOpacity>
    </View>
  );
}


