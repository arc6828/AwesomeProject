import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, TextInput } from 'react-native';
import { ScrollView, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { white } from 'ansi-colors';

export default function TodoScreen({ navigation }) {
    const [todos , setTodos] = useState(
        [
            { _id : '1' , completed : false,  title : "exercise @ 7.00" },
            { _id : '2' , completed : false,  title : "meeting @ 9.00"},
            { _id : '3' , completed : false,  title : "go to cinema @ 19.00"},
        ]
     
    );

    //console.log("STATE : ", weight, height, bmi);

    const compute = () => {
        console.log("Calculate button is pressed!!!");
        
        setDisplayName(name);
        setLength(name.length);
    };

    return (
        <View style={{ flex : 1 }}>
            
            <FlatList 
                style={{ width: '100%', top: 15 }}
                data={todos}
                keyExtractor={item => item._id}
                renderItem={ ({ item }) => {
                        return (
                            <Text>{item.title}</Text>
                        );
                    }      
                }
                />   
            
            <TouchableOpacity
                style={{
                    backgroundColor: "lightblue" ,
                    padding : 10,
                    width : 50,
                    height : 50,
                    alignItems : "center",
                    alignContent : "center",
                    borderRadius:100,
                    position : 'absolute'  ,
                    right : 10,
                    bottom : 10,
                }}
                >
                <Ionicons
                name={ Platform.OS === 'ios' ? 'ios-add' : 'md-add' }
                size={26}
                />
            </TouchableOpacity>
        </View>

    );
}