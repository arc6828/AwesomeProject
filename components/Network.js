import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, FlatList } from 'react-native';

import Item from './Item';

export default function Network() {   
    const [movies , setMovies] = useState([]);

    const getMovies = async () => {
        try{
            let promise = await fetch('https://www.csbootstrap.com/movies.json');
            let data = await promise.json();
            console.log("Data : " , data.movies.length);
            setMovies(data.movies);
        }catch(error){
            console.log("ERROR : " , error);
        }
    }

    const clear = () => {
        setMovies([]);
    }
       

    return (
        <View style={{ 
            flex : 1, 
            flexDirection : 'column', 
            justifyContent : 'center', 
            paddingHorizontal : 20 ,
            paddingTop : 40 ,
            }}>
            <Text style={{ fontSize : 20, paddingBottom : 20 }}>Today Movies</Text>
            
            <FlatList 
                data={movies}
                renderItem={
                    ({item}) => {                        
                        return (                            
                            <Item
                                title={item.title}
                                releaseYear={item.releaseYear}
                                image={item.image}  
                                />
                        );
                    }
                }
                keyExtractor={item => item.id}
                />

            
            <Button title="Display Movies" onPress={getMovies} />

            <Button title="Clear" onPress={clear}  color="#841584" />
        </View>
    );
}

 

