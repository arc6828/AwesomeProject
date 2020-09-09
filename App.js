import React, { useState, useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';

import HomeStack from './navigations/HomeStack';


import BottomTab from './navigations/BottomTab';
import SecondBottomTab from './navigations/SecondBottomTab';
import MidtermTab from './navigations/MidtermTab';
import TodoTab from './navigations/TodoTab';
import AuthLoadingScreen from './screens/AuthLoadingScreen';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';

import { createStackNavigator } from '@react-navigation/stack';
const RootStack = createStackNavigator();
const AuthStack = createStackNavigator();

import { fb } from './db_config';
import "firebase/auth";

export default function App() {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    

    useEffect(() => {
        const subscriber = fb.auth().onAuthStateChanged((current_user) => {
            if(current_user){
                //USER SING IN
                setUser(current_user);
            }else{
                //USER SING OUT
                setUser(null);
            }
            //if (initializing) setInitializing(false);
        });
        console.log(user); 
        return subscriber; // unsubscribe on unmount

    });

    if(user != null){
        return  (
            <NavigationContainer>
                <RootStack.Navigator >
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
    
                    <RootStack.Screen 
                        name="MidtermTab" 
                        component={MidtermTab} 
                        options={{  title: 'Midterm Tab'   }} 
                        />
    
                    <RootStack.Screen 
                        name="TodoTab" 
                        component={TodoTab} 
                        options={{  title: 'Todo Tab'   }} 
                        />
                </RootStack.Navigator>
            </NavigationContainer>
        );
    }else{
        return (
            <NavigationContainer>
                <AuthStack.Navigator >
                    

                    <AuthStack.Screen 
                        name="LoginScreen" 
                        component={LoginScreen} 
                        options={{  title: 'Login'   }} 
                        />
                    <AuthStack.Screen 
                        name="RegisterScreen" 
                        component={RegisterScreen} 
                        options={{  title: 'Register'   }} 
                        />

                    
                </AuthStack.Navigator>
            </NavigationContainer>
        );

    }
    
}
