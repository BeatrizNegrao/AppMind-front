import React, { useState } from "react";

import {
    Text,
    View,
    Image,
    TouchableOpacity,
    Alert,
} from 'react-native';
import { style } from "./styles"
import Logo from '../../img/cadastro.png'
import { Input } from "../../components/input"
import { Button } from "../../components/Button";
import { useNavigation, NavigationProp } from '@react-navigation/native';

export default function Cadastro() {

    const navigation = useNavigation<NavigationProp<any>>();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(true)
    const [loading, setLoading] = useState(false)

    async function handleCadastro() {
        setLoading(true)

        try {
            if (!name || !email || !password || !confirmPassword) {
                setTimeout(() => Alert.alert('Atenção', 'Preencha todos os campos!'), 0)
                setLoading(false);
                return;
            }

            navigation.navigate("BottomRoutes")
            console.log('Cadastro realizado com sucesso!')

        } catch (error) {
            console.log(error)

        } finally {
            setLoading(false)
        }
    }

    function handleGoToLogin() {
        navigation.navigate('Login')
    }

    return (
        <View style={style.container}>
            <View style={style.boxTop}>
                <Image
                    source={Logo}
                    style={style.logo}
                    resizeMode="contain"
                />
                <Text style={style.text}>Cadastro</Text>
            </View>
            <View style={style.boxMid}>
                <Input
                    value={name}
                    onChangeText={setName}
                    title="NOME"
                />
                <Input
                    value={email}
                    onChangeText={setEmail}
                    title="E-MAIL"
                />
                <Input
                    value={password}
                    onChangeText={setPassword}
                    title="SENHA"
                    secureTextEntry={showPassword}
                />
                <Input
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    title="CONFIRMAR SENHA"
                    secureTextEntry={showPassword}
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                    <Text>{showPassword ? "Mostrar" : "Ocultar"} </Text>
                </TouchableOpacity>
            </View>
            <View style={style.boxButton}>
                <Button
                    text="Cadastrar"
                    loading={loading}
                    onPress={handleCadastro}
                />
            </View>
            <TouchableOpacity onPress={handleGoToLogin}>
                <Text style={style.TextBotton}>Já possui uma conta? Faça seu login!</Text>
            </TouchableOpacity>
        </View>
    );
}
