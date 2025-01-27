import React, { useState } from "react";
import { View, Text, TextInput, Alert } from "react-native";
import { styles } from "./styles";
import { Button } from "../../components/Button";
import ProductService from '../../services/ProductService';
import { useNavigation, NavigationProp } from '@react-navigation/native';

export default function RegisterProducts() {
  const navigation = useNavigation<NavigationProp<any>>();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");

  async function handleRegisterProduct() {
    if (!name || !description || !price || !amount) {
      Alert.alert("Atenção", "Preencha todos os campos!");
      return;
    }

    try {
      await ProductService.createProduct({
        nome: name,
        descricao: description,
        valor: Number(price),
        quantidade_atual: Number(amount)
      });

      Alert.alert("Sucesso", "Produto registrado com sucesso!");
      navigation.goBack(); // Volta para a tela anterior após o registro
    } catch (error) {
      Alert.alert("Erro", "Não foi possível registrar o produto");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrar Produto</Text>
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
        placeholder="Quantidade atual"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
      />
      <View style={styles.boxButton}>
        <Button
          text="Registrar"
          onPress={handleRegisterProduct}
        />
      </View>
    </View>
  );
}