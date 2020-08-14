import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, TextInput } from 'react-native';
import { white } from 'ansi-colors';

export default function MidtermFirstScreen({ navigation }) {
    const [name , setName] = useState('');
    const [display_name , setDisplayName] = useState('');
    const [length , setLength] = useState('0');

    //console.log("STATE : ", weight, height, bmi);

    const compute = () => {
        console.log("Calculate button is pressed!!!");
        
        setDisplayName(name);
        setLength(name.length);
    };

    return (
        <View style={{ flex: 1, flexDirection : 'column' }}>
            <View style={{ flex : 1 , backgroundColor : "#50E3C2", justifyContent : "center" ,alignItems : "flex-end" , paddingHorizontal : 20}}>
                <Text>{display_name}</Text>
                <Text>{length} Characters</Text>
            </View>
            <View style={{ flex : 5 , backgroundColor : "#cccccc" , padding : 50}}>
                <TextInput 
                    placeholder="enter your name ..."     
                    onChangeText={ (text) => setName(text) }
                    value={name} 
                    style={{ marginBottom : 40, backgroundColor : "white" , padding : 20 }} 
                    />
                <Button title="Save" onPress={compute} />
            </View>
        </View>
    );
}