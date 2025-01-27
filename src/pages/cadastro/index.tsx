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
import api from '../../services/UserService';

export default function Cadastro() {

    const navigation = useNavigation<NavigationProp<any>>();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(true)
    const [loading, setLoading] = useState(false)

    async function getCadastro() {
        setLoading(true);
        try {
            if (!name || !email || !password || !confirmPassword) {
                Alert.alert('Atenção', 'Preencha todos os campos!');
                return;
            }

            if (password !== confirmPassword) {
                Alert.alert('Atenção', 'As senhas não coincidem!');
                return;
            }

            const response = await api.post('/users', {
                nome: name,
                email,
                senha: password
            });

            if (response.status === 201) {
                Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
                navigation.navigate('Login');
            }
        } catch (error: any) {
            if (error.response) {
                Alert.alert('Erro', error.response.data.error || 'Erro ao realizar cadastro');
            } else {
                Alert.alert('Erro', 'Erro ao conectar com o servidor');
            }
        } finally {
            setLoading(false);
        }
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
                    onPress={getCadastro}
                />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={style.TextBotton}>Já possui uma conta? Faça seu login!</Text>
            </TouchableOpacity>
        </View>
    );
}
