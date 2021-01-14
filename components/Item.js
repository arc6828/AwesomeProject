import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, FlatList } from 'react-native';

export default function Item(props) {     

    return (
        
        <View style={{ flexDirection : 'row' }}>
            
            {/* <Image 
                source={{ uri : "https://facebook.github.io/react/logo-og.png" }}
                style={{width: 40, height: 40, marginRight : 10}} 
                />
            <View style={{ flexDirection : 'column' }}>
                <Text style={{ fontSize : 20 }}>React Native Course</Text>
                <Text style={{ fontSize : 14, flexWrap : 'wrap', paddingRight : 40 }}>
                    Course to program mobile application in cross platform
                </Text>
            </View> */}
            
            <Image 
                source={{ uri : props.image }}
                style={{width: 40, height: 40, marginRight : 10}} 
                />
            <View style={{ flexDirection : 'column' }}>
                <Text style={{ fontSize : 20 }}>{ props.title }</Text>
                <Text style={{ fontSize : 14, flexWrap : 'wrap', paddingRight : 40 }}>Release Year : { props.releaseYear }</Text>
            </View>            
        </View>
    );
}

 

