import React, { useState, useEffect, useContext } from 'react';
import { View, Text, ActivityIndicator} from 'react-native';
import { AuthContext, AuthContextProvider } from "./hooks/AuthContext";
import MainNavigation from './MainNavigation';

export default function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    });

    if(loading){
        return (
            <LoadingScreen name="" />
        );
    }else{
        return (
            <AuthContextProvider>    
                <MainNavigation />
            </AuthContextProvider>    
        );

    }
    
}

function LoadingScreen() {    
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems : 'center'  }}>
            <Text>Loading</Text>
            <ActivityIndicator size="large" />
        </View>
    );   
}
