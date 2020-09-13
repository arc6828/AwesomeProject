import React, {useContext} from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { fb } from '../db_config';
import { AuthContext, AuthContextProvider } from "../hooks/AuthContext";

export default function HomeScreen({ navigation }) {
    const [user, setUser] = useContext(AuthContext);

    const onLogout = () => {
        fb.auth().signOut().then(function() {
          console.log("Logout successfully");
          // Sign-out successful.
        }).catch(function(error) {
          // An error happened.
          console.log(error);
        });
      
    };
      
    

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex : 1 , alignItems: 'center', justifyContent: 'center' }}>                
                <View style={{ flexDirection : 'row' , padding : 30}}>
                    <Text>Welcome, </Text>
                    <Text style={{ color : "red"}}>{user.email}</Text>
                </View>
                <Ionicons name="md-home" size={50} color="#848484" />
                <Text style={{ fontSize : 20 }}>Home Screen</Text>
                <TouchableOpacity  onPress={() => navigation.navigate('BmiScreen') } >                    
                    <Text style={{ padding : 10 }}>Go to BMI Screen</Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => navigation.navigate('SecondBottomTab') } >                    
                    <Text style={{ padding : 10 }}>Go to Second BottomTab</Text>
                </TouchableOpacity>

                <TouchableOpacity  onPress={() => navigation.navigate('MidtermFirstScreen') } >                    
                    <Text style={{ padding : 10 }}>Go to Midterm First Screen</Text>
                </TouchableOpacity>
                
                <TouchableOpacity  onPress={() => navigation.navigate('MidtermTab') } >                    
                    <Text style={{ padding : 10 }}>Go to MidtermTab</Text>
                </TouchableOpacity>

                <TouchableOpacity  onPress={() => navigation.navigate('TodoTab') } >                    
                    <Text style={{ padding : 10 }}>To-do List</Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={onLogout} >                    
                    <Text style={{ padding : 10 }}>Log out</Text>
                </TouchableOpacity>
            </View>
            <View>                
                <Button  
                    onPress={() => navigation.navigate('BmiScreen')}
                    title="Next"
                    color=""
                    />
            </View>          
              
        </View>
    );
}