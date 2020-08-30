import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

export default function TodoItem(props) {     

    return (
     
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal : 25,
                paddingVertical : 10,
            }}>
            <TouchableOpacity
                onPress={()=>props.onCheck(props.item._id) }
                style={{  flex : 2 }}>

                {/* <Ionicons name="md-square-outline" size={23} /> */}

                <Ionicons 
                    name={ props.item.completed ? "md-checkbox" : "md-square-outline" }
                    size={23} />
                
            </TouchableOpacity>
            <View style={{ flex: 12 }}>                                  
                <TextInput
                    placeholder="What's in your mind? "
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
                // onPress={() => props.onDelete(props.item._id)}
                style={{  flex : 1 }} >
                <Ionicons name="md-trash" size={23} />
            </TouchableOpacity>
        </View>
     
        
    );
}

 

