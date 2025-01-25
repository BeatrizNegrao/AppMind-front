import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListProducts from '../pages/listProducts'
import CustomTabBar from '../components/CustomTabBar';

const Tab = createBottomTabNavigator();

export default function BottomRoutes() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Tab.Screen
                name="ListProducts"
                component={ListProducts}
            />
        </Tab.Navigator>
    );
}
