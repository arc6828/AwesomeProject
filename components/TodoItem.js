import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

export default function TodoItem(props) {     

    return (
     
        <View
            style={{
                flex: 1,
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                paddingRight: 10,
                paddingVertical: 5,
            }}>
            <TouchableOpacity
                onPress={()=>props.onCheck(props.item._id) }
                style={{ paddingLeft: 25, paddingRight: 15 }}>

                <Ionicons 
                    name={ props.item.completed ? "md-checkbox" : "md-square-outline" }
                    size={23} />

                
                
                
                
            </TouchableOpacity>
            <View
                style={{
                flex: 1,
                paddingLeft: 25,
                }}>                  
                
                <TextInput
                    style={{ width: '90%' }}
                    // placeholder="What needs to be done?"
                    // autoFocus
                    // underLineColorAndroid="transparent"
                    // underlineColor="transparent"
                    // blurOnSubmit
                    onChangeText={(new_title) => props.onUpdate(new_title, props.item._id) }
                    value={props.item.title}
                    // autoCorrect={false}
                    // autoCapitalize="none"
                />                  
                
            </View>
            <TouchableOpacity
                onPress={() => props.onDelete(props.item._id)}
                style={{ paddingLeft: 25, paddingRight: 15 }} >
                <Ionicons name="md-trash" size={23} />
            </TouchableOpacity>
        </View>
     
        
    );
}

 

