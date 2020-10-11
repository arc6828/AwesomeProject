import React from 'react';
import { View, TextInput, TouchableOpacity, Image, Modal } from 'react-native';

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
                style={{  flex : 3, alignItems : 'center' }} 
                onPress={() => {
                    console.log("Pressed");
                    let images = [
                        {
                            // Simplest usage.
                            url: props.item.title,
                        
                            // width: number
                            // height: number
                            // Optional, if you know the image size, you can set the optimization performance
                        
                            // You can pass props to <Image />.
                            props: { }
                        }
                    ];
                    props.setImages(images);
                    props.setModalVisible(true);
                }}
                >
                <Image source={{ uri : props.item.image_url }} style={{width: 40, height: 40}} resizeMode="cover" />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => props.onDelete(props.item._id)}
                style={{  flex : 1 }} >
                <Ionicons name="md-trash" size={23} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => props.navigation.navigate('UploadFileScreen', { 
                    todo_id : props.item._id , 
                    todo_title : props.item.title ,  
                    todo_image_url : props.item.image_url ,  
                }) }
                style={{  flex : 1 }} >
                <Ionicons name="md-build" size={23} />
            </TouchableOpacity>
        </View>
     
        
    );
}

 

