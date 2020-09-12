import React, { useState, useEffect, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTab from './navigations/BottomTab';
import SecondBottomTab from './navigations/SecondBottomTab';
import MidtermTab from './navigations/MidtermTab';
import TodoTab from './navigations/TodoTab';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import { createStackNavigator } from '@react-navigation/stack';
const RootStack = createStackNavigator();
const AuthStack = createStackNavigator();

import { fb } from './db_config';

import { AuthContext, AuthContextProvider } from "./hooks/AuthContext";

export default function MainNavigation() {
    const [user, setUser] = useContext(AuthContext);    

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
            
            console.log("USER : ",user); 
        });
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


