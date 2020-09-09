import React, { useState, useEffect  } from 'react';
import { View, Text, ActivityIndicator,  Button , Image} from 'react-native';
import { db, auth } from '../db_config';

export default function AuthLoadingScreen( props) {  
    useEffect(() => {
        const subscriber = auth.onAuthStateChanged((user) => {
            if(user){
                console.log(user);
                //props.setUser();
                props.setLoading(false);
            }else{
                props.setLoading(false);
            }
        });

        return subscriber; // unsubscribe on unmount

    },[]);


    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems : 'center'  }}>
            <Text>Loading</Text>
            <ActivityIndicator size="large" />
        </View>
    );
}