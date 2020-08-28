import React, { useState, useEffect  } from 'react';
import { View, Text, Button, TouchableOpacity  } from 'react-native';
import { ScrollView, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { white } from 'ansi-colors';

import TodoItem  from '../components/TodoItem';
import AsyncStorage from '@react-native-community/async-storage';

export default function TodoScreen({ navigation }) {
    const [todos , setTodos] = useState(
        [
            { _id : '1' , completed : false,  title : "exercise @ 7.00" },
            { _id : '2' , completed : false,  title : "meeting @ 9.00"},
            { _id : '3' , completed : false,  title : "go to cinema @ 19.00"},
        ]     
    );

    //console.log("STATE : ", weight, height, bmi);
    useEffect(() => {
        console.log(todos);   
        console.log("STATE UPDATED!!");        
        readTodos("@todos");
    },[]);

    

    const onCreate = () => {
        let new_data = {
            _id : '_' + Math.random().toString(36).substr(2, 9), //RANDOM NUMBER
            title : "", //Empty String
            completed : false,
        };

        //CLONE ARRAY
        let t = [...todos];

        //APPEND NEW DATA INTO ARRAY
        t.push(new_data);     

        //UPDATE STATE
        setTodos(t);

        //ASYNC STORAGE
        writeTodos(t);
        
    };

    const onUpdate = (new_title, _id) => {   
        //CLONE ARRAY FIRST
        let t = [...todos];
        //Find index of specific object using findIndex method.   
        let index = t.findIndex((item => item._id == _id));
        //Update object's name property.
        t[index].title = new_title;
        //UPDATE STATE
        setTodos(t);

        //ASYNC STORAGE
        writeTodos(t);
    }; 
    const onCheck = (_id) => {   
        //CLONE ARRAY FIRST
        let t = [...todos];
        let index = t.findIndex((item => item._id == _id));
        t[index].completed = ! t[index].completed;
        setTodos(t);

        //ASYNC STORAGE
        writeTodos(t);
    };
    const onDelete = (_id) => {   
        //CLONE ARRAY FIRST
        let t = [...todos];
        let index = t.findIndex((item => item._id == _id));
        t.splice(index, 1);
        setTodos(t);

        //ASYNC STORAGE
        writeTodos(t);
    };

    const writeTodos = async (object_value) => {
        try {
            const string_value = JSON.stringify(object_value)
            await AsyncStorage.setItem("@todos", string_value)
        } catch (e) {
            // saving error
        }
    }

    const readTodos = async (key) => {
        try {
            const string_value = await AsyncStorage.getItem(key)
            let todos = string_value != null ? JSON.parse(string_value) : [];
            setTodos(todos);
        } catch(e) {
            // error reading value
        }
    }
     
     

    return (
        <View style={{ flex : 1 }}>
            
            <FlatList 
                style={{ width: '100%', top: 15 }}
                data={todos}
                keyExtractor={item => item._id}
                renderItem={ ({ item }) => {
                        return (
                            // <Text>{item.title}</Text>
                            <TodoItem 
                                item={item} 
                                onUpdate={onUpdate}
                                onCheck={onCheck}
                                onDelete={onDelete}
                                />
                        );
                    }      
                }
                />   
            
            <TouchableOpacity
                onPress={onCreate}
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

                <Ionicons name='md-add' size={26} />
            </TouchableOpacity>
        </View>

    );
}