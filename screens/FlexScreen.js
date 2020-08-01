import * as React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';

export default function FlexScreen({ navigation }) {
    

    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity  onPress={() => navigation.navigate('Ex01Screen') } >                    
                <Text style={{ padding : 10 }}>Ex 01</Text>
            </TouchableOpacity>
            
            <TouchableOpacity  onPress={() => navigation.navigate('Ex02Screen') } >                    
                <Text style={{ padding : 10 }}>Ex 02</Text>
            </TouchableOpacity>                     

            <TouchableOpacity  onPress={() => navigation.navigate('Ex03Screen') } >                    
                <Text style={{ padding : 10 }}>Ex 03</Text>
            </TouchableOpacity>  

            <TouchableOpacity  onPress={() => navigation.navigate('Ex04Screen') } >                    
                <Text style={{ padding : 10 }}>Ex 04</Text>
            </TouchableOpacity>  


            <TouchableOpacity  onPress={() => navigation.navigate('Ex052Screen') } >                    
                <Text style={{ padding : 10 }}>Ex 05</Text>
            </TouchableOpacity>  

            <TouchableOpacity  onPress={() => navigation.navigate('Ex06Screen') } >                    
                <Text style={{ padding : 10 }}>Ex 06</Text>
            </TouchableOpacity>  

            <TouchableOpacity  onPress={() => navigation.navigate('Ex07Screen') } >                    
                <Text style={{ padding : 10 }}>Ex 07</Text>
            </TouchableOpacity>  

            <TouchableOpacity  onPress={() => navigation.navigate('Ex08Screen') } >                    
                <Text style={{ padding : 10 }}>Ex 08</Text>
            </TouchableOpacity>  

            <TouchableOpacity  onPress={() => navigation.navigate('Ex09Screen') } >                    
                <Text style={{ padding : 10 }}>Ex 09</Text>
            </TouchableOpacity>  

            <TouchableOpacity  onPress={() => navigation.navigate('Ex10Screen') } >                    
                <Text style={{ padding : 10 }}>Ex 10</Text>
            </TouchableOpacity>  

            <TouchableOpacity  onPress={() => navigation.navigate('Ex11Screen') } >                    
                <Text style={{ padding : 10 }}>Ex 11</Text>
            </TouchableOpacity>  

            <TouchableOpacity  onPress={() => navigation.navigate('Ex12Screen') } >                    
                <Text style={{ padding : 10 }}>Ex 12</Text>
            </TouchableOpacity>  

            <TouchableOpacity  onPress={() => navigation.navigate('ExSpecialScreen') } >                    
                <Text style={{ padding : 10 }}>Ex Special</Text>
            </TouchableOpacity>  

            
        </View>
    );
}