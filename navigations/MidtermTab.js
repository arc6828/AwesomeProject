import * as React from 'react';



import { View, Text, Button , Image} from 'react-native';

import { Ionicons } from '@expo/vector-icons';


// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// const Tab = createBottomTabNavigator();

import MidtermFirstScreen from '../screens/MidtermFirstScreen';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export default function MidtermTab() {

    return (
        <Tab.Navigator            

            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
            >
            
            <Tab.Screen 
                name="WelcomeMidtermScreen" 
                component={WelcomeMidtermScreen} 
                options={{  title: 'Midterm Home'  }} 
                />                
            <Tab.Screen 
                name="MidtermFirstScreen" 
                component={MidtermFirstScreen} 
                options={{  title: 'Midterm First Screen'  }} 
                
                />
            
            
        </Tab.Navigator>            
    );
}

function WelcomeMidtermScreen(){
    return (
        <View style={{ flex: 1, alignItems : 'center'  , justifyContent : 'center'  }}>            
            <Text style={{ fontSize : 30, paddingTop : 20 }}>React Native Midterm</Text>                
        </View>
    );
}

