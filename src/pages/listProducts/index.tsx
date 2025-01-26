import React from "react";
import { styles } from "./styles";
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from "react-native";

export default function ListProducts() {
  const products = [
    {
      id: "1",
      name: "Mouse da Razer",
      description: "Mouse de alta performance para jogos de fps",
      price: "R$ 600,00",
      stock: 7,
      image: null 
    },
    {
      id: "2",
      name: "Iphone 15",
      description: "Celular com excelente câmera fotográfica e excelente desempenho",
      price: "R$ 6500,00",
      stock: 7,
      image: null
    },
  ];

  const renderProduct = ({ item }: { item: typeof products[0] }) => (
    <View style={styles.card}>
      <View style={styles.imagePlaceholder}>
        <Text style={styles.imageText}>Imagem</Text>
      </View>
      <View style={styles.productDetails}>
        <View style={styles.row}>
          <Text style={styles.productName}>{item.name}</Text>
          <Text style={styles.productPrice}>{item.price}</Text>
        </View>
        <Text style={styles.productDescription}>{item.description}</Text>
        <View style={styles.row}>
          <Text style={styles.stockText}>Em estoque: {item.stock}</Text>
          <TouchableOpacity>
            <Text style={styles.editText}>Editar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Estoque de produtos</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={renderProduct}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}