import React from 'react';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ListProducts from '../pages/listProducts'
import RegisterProducts from '../pages/register';


const Tab = createBottomTabNavigator();

export default function BottomRoutes() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Tab.Screen
                name="Lista de produtos"
                component={ListProducts}
            />
            <Tab.Screen
                name="Registrar produtos"
                component={RegisterProducts}
            />
            
        </Tab.Navigator>
    );
}