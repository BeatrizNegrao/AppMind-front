import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Image,
} from "react-native";
import { styles } from "./styles";
import { Button } from "../../components/Button";
import { Input } from "../../components/input";
import { useNavigation, NavigationProp } from '@react-navigation/native';


export default function RegisterProducts() {

  const navigation = useNavigation<NavigationProp<any>>();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  function getRegisterProducts() {
    if (!name || !description || !price || !image) {
      Alert.alert("Atenção", "Preencha todos os campos!");
      return;
    }

    Alert.alert("Produto registrado com sucesso!");
    setName("");
    setDescription("");
    setPrice("");
    setImage("");
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
      <View style={styles.boxButton}>
        <Button
          text="Registrar"
          onPress={getRegisterProducts}
        />
      </View>
    </View>
  );
}


