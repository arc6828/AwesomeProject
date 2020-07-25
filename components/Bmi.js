import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function Bmi() {
    const [weight , setWeight] = useState('70');
    const [height , setHeight] = useState('170');
    const [bmi , setBmi] = useState('0');

    console.log("STATE : ", weight, height, bmi);

    const compute = () => {
        console.log("Calculate button is pressed!!!");
        let output = (weight/ (height/100 * height/100));
        setBmi(output.toFixed(2));
    };

    return (
    <View style={{ 
        flex : 1, 
        flexDirection : 'column', 
        justifyContent : 'center', 
        paddingHorizontal : 20 ,
        }}>

        <Text style={{ fontSize : 30 }}>Weight (kgs) : </Text>
        <TextInput 
            placeholder="enter your weight ..."            
            keyboardType="numeric"
            onChangeText={ (text) => setWeight(text) }
            value={weight} 
            style={{ marginBottom : 20 }} 
            />

        <Text style={{ fontSize : 30 }}>Height (cm) : </Text>
        <TextInput 
            placeholder="enter your height ..."
            keyboardType="numeric"
            onChangeText={ (text) => setHeight(text) }
            value={height} 
            style={{ marginBottom : 20 }}
            />

        <Text style={{ fontSize : 30 }}>BMI : {bmi}</Text>

        <Button title="Calculate" onPress={compute} />
    </View>
    );
}



