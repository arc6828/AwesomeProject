import * as React from 'react';

import BmiScreen from '../screens/BmiScreen';
import NetworkScreen from '../screens/NetworkScreen';
import HomeScreen from '../screens/HomeScreen';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function HomeStack() {

    return (
        <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Screen 
                name="HomeScreen" 
                component={HomeScreen} 
                options={{  title: 'Home Title'  }} 
                />
            <Stack.Screen 
                name="BmiScreen" 
                component={BmiScreen} 
                options={{  title: 'Bmi Title'  }} 
                />
            <Stack.Screen 
                name="NetworkScreen" 
                component={NetworkScreen} 
                options={{ title: 'Network Screen Title' }} 
                />
            
        </Stack.Navigator>
    );
}