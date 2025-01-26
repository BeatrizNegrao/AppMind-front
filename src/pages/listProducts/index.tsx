import React from "react";
import { styles } from "./styles";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { useNavigation, NavigationProp } from '@react-navigation/native';

export default function ListProducts() {
    const navigation = useNavigation<NavigationProp<any>>();

    const products = [
        {
            id: "1",
            name: "Mouse da Razer",
            description: "Mouse de alta performance para jogos de fps",
            price: "R$ 600,00",
            stock: 7,
            image:  require('../../img/mouse.png')
        },
        {
            id: "2",
            name: "Iphone 15",
            description: "Celular com excelente câmera fotográfica e excelente desempenho",
            price: "R$ 6500,00",
            stock: 7,
            image: require('../../img/iphone15.png')
        },
    ];

    const renderProducts = ({ item }: { item: typeof products[0] }) => (
        <View style={styles.card}>
            <View style={styles.imagePlaceholder}>
            <Image source={item.image} 
            style={styles.image} 
            />
            </View>
            <View style={styles.productDetails}>
                <View style={styles.row}>
                    <Text style={styles.productName}>{item.name}</Text>
                    <Text style={styles.productPrice}>{item.price}</Text>
                </View>
                <Text style={styles.productDescription}>{item.description}</Text>
                <View style={styles.row}>
                    <Text style={styles.stockText}>Em estoque: {item.stock}</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('EditProducts')}>
                        <Text style={styles.editText}>Editar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Estoque de Produtos</Text>
            <FlatList
                data={products}
                keyExtractor={(item) => item.id}
                renderItem={renderProducts}
                contentContainerStyle={styles.list}
            />
        </View>
    );
}