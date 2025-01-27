import React, { useState } from "react";
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    Alert
} from 'react-native';
import { style } from "./styles";
import Logo from '../../img/logo.png';
import { Input } from "../../components/input";
import { Button } from "../../components/Button";
import { useNavigation, NavigationProp } from '@react-navigation/native';
import api from '../../services/UserService';

export default function Login() {
    const navigation = useNavigation<NavigationProp<any>>();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(true);
    const [loading, setLoading] = useState(false);

    async function getLogin() {
        setLoading(true);
        try {
            if (!email || !password) {
                Alert.alert('Atenção', 'Preencha todos os campos!');
                return;
            }
    
            const response = await api.post('/users/login', {
                email,
                senha: password
            });
    
            console.log('Resposta do servidor:', response.data); // Para debug
    
            if (response.status === 200) {
                navigation.navigate('BottomRoutes');
            }
        } catch (error: any) {
            console.error('Erro completo:', error); // Para debug
            if (error.response) {
                Alert.alert('Erro', error.response.data.error || 'Erro ao fazer login');
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
                <Text style={style.text}>Login</Text>
            </View>
            <View style={style.boxMid}>

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
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                    <Text>{showPassword ? "Mostrar" : "Ocultar"} Senha</Text>
                </TouchableOpacity>
            </View>
            <View style={style.boxButton}>
                <Button
                    text="Entrar"
                    loading={loading}
                    onPress={getLogin}
                />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
                <Text style={style.TextBotton}>Não possui uma conta? Crie agora!</Text>
            </TouchableOpacity>
        </View>
    );
}