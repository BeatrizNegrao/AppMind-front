import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../pages/login";
import Cadastro from "../pages/cadastro";
import BottomRoutes from "./button.routes";


export default function Routes() { //Pilha de navegação
    const Stack = createStackNavigator()

    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerShown: false,
                cardStyle:{
                    backgroundColor:"#FFF"
                }
            }}
        >
            <Stack.Screen
                name="Login"
                component={Login}
            />
            <Stack.Screen
                name="BottomRoutes"
                component={BottomRoutes}
            />
             <Stack.Screen
                name="Cadastro"
                component={Cadastro}
            />
        </Stack.Navigator>
    )
}

