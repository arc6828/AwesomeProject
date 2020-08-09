import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import HomeStack from './navigations/HomeStack';
import BottomTab from './navigations/BottomTab';
import SecondBottomTab from './navigations/SecondBottomTab';

import { createStackNavigator } from '@react-navigation/stack';
const RootStack = createStackNavigator();


export default function App() {
    return (
        <NavigationContainer>
            <RootStack.Navigator initialRouteName="BottomTab">
                <RootStack.Screen 
                    name="BottomTab" 
                    component={BottomTab} 
                    options={{  title: 'Main' , headerShown: false   }} 
                    />

                <RootStack.Screen 
                    name="SecondBottomTab" 
                    component={SecondBottomTab} 
                    options={{  title: 'Second Tab'   }} 
                    />
                
                
                
            </RootStack.Navigator>
        </NavigationContainer>
    );
}
