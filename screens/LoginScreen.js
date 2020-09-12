import React, { useState } from 'react';
import { View, Text, Button , TextInput, TouchableOpacity} from 'react-native';

import { fb } from '../db_config';

export default function LoginScreen( {navigation, route} ) {  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    

    const onLogin = () => {
        // TODO: Firebase stuff...
        //console.log('handleLogin', email, password);
        //const { email, password } = this.state
        
        fb.auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => { console.log("Login Successfully");  })
            .catch(error => {
                //this.setState({ errorMessage: error.message })
            })
        
    }
    



    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Login</Text>            
            <Text style={{ color: 'red' }}>
                {message}
            </Text>
            
            <TextInput
                style={{ width : '90%', padding : 10  }}
                autoCapitalize="none"
                placeholder="Email"
                onChangeText={ text => setEmail(text) }
                value={email}
                />
            <TextInput
                style={{ width : '90%', padding : 10  }}
                secureTextEntry
                autoCapitalize="none"
                placeholder="Password"
                onChangeText={ text => setPassword(text)}
                value={password}
                />
            <Button title="Login" style={{ padding : 10 }} onPress={onLogin}  />

            <TouchableOpacity  onPress={() => navigation.navigate('RegisterScreen') } >                    
                <Text style={{ padding : 10 }}>Don't have an account? Sign Up</Text>
            </TouchableOpacity>
        </View>
    );
}