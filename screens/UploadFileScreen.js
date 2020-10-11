import React, { useState, useEffect, useContext } from 'react';
import { View, Text, YellowBox, Modal, TouchableOpacity , Image, Button,TextInput } from 'react-native';
import { fb } from '../db_config';
import { AuthContext, AuthContextProvider } from "../hooks/AuthContext";
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';

export default function UploadFileScreen({ route, navigation }) {  
    const [_id, set_id] = useState('_' + Math.random().toString(36).substr(2, 9));
    const [title, setTitle] = useState("");
    const [user, setUser] = useContext(AuthContext);
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {        
        YellowBox.ignoreWarnings(['Setting a timer']);
        console.log(route.params);
        if(route.params){
            const { todo_id , todo_title, todo_image_url } = route.params;
            set_id(todo_id);
            setTitle(todo_title);
            setUrl(todo_image_url);
        }
        (async () => {             
            const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
            if (status !== 'granted') {
                console.log('Sorry, we need camera roll permissions to make this work!');
            }         

            const { status2 } = await ImagePicker.requestCameraPermissionsAsync();
            if (status2 !== 'granted') {
                console.log('Sorry, we need camera permissions to make this work!');
            }    
        })();


        
    },[]);  

    const pickImage = async (mode) => {
        let result = null;
        switch(mode){
            case "camera" : 
                result = await ImagePicker.launchCameraAsync();
                break;
            case "library" : 
                result = await ImagePicker.launchImageLibraryAsync();
                break;
        }
        
    
        console.log(result);
    
        if (!result.cancelled) {
            console.log(result);
            
            //SPLIT STRING WITH "/" => ["file:",...,"ImagePicker","df2bbd81-da8c-4e3d-aa26-4b71686ea623.jpg"]
            //GET LAST ITEM IN ARRAY BY POP()
            let filename = result.uri.split('/').pop();
            
            //UPDATE RESULT WITH FILENAME
            result.filename = filename;

            setImage(result);
            setUrl(null);
            uploadFileFirebase(result);
        }
    };

    const uploadFileFirebase = async (result) => {        
        console.log("uri : ", result.uri);
        const response = await fetch(result.uri);
        const blob = await response.blob();
        
        //UPLOAD TO FIREBASE
        // Create a reference to 'xxxxxxx.jpg'
        let ref = fb.storage().ref().child(result.filename);
        ref.put(blob)
            .then((snapshot)=>{
                console.log("Success : ");
                snapshot.ref.getDownloadURL().then(function(downloadURL) {
                    console.log('File available at', downloadURL);
                    //UPDATE STATE
                    setUrl(downloadURL);

                });
            })
            .catch((error)=>{
                console.error("Error : ", error);
            });
    };

    const onCreate = () => {
        let new_data = {
            //_id : '_' + Math.random().toString(36).substr(2, 9), //RANDOM NUMBER
            _id : _id, //RANDOM NUMBER
            title : title, //Empty String
            completed : false,
            user_id : user.uid, 
            image_url : url, 
        };

        //UPDATE FIRESTORE
        writeTodosFirebase(new_data);
        
    };

    const writeTodosFirebase = async (new_data) => {
        fb.firestore().collection("todos")
            .doc(new_data._id)
            .set(new_data)
            .then(function() {
                console.log("Firestore successfully written!");
                navigation.navigate('TodoTab');
            })
            .catch(function(error) {
                console.error("Error writing document: ", error);
            });  
    }



     
    
    return (
        <View  style={{ flex: 1, justifyContent : 'center'}}>            
            <Text style={{fontSize: 20, textAlign: 'center'}}>
                React Native Upload File Screen
            </Text>
            <Modal
                //animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(false);
                }}
                >
                <TouchableOpacity 
                        style={{ flex: 1, justifyContent: "center",backgroundColor: 'rgba(0,0,0,0.5)' }}
                        onPress={() => {setModalVisible(false)}}
                    >                     
                    <View style={{ margin: 20, backgroundColor: "white", padding : 15 }}>
                        <TouchableOpacity 
                            style={{ padding  : 15 }}
                            onPress={() => { 
                                //pickImage("camera");
                                setTimeout(async function(){  await pickImage("camera"); }, 100);
                                setModalVisible(false); 
                            }}   
                            >                            
                            <Text>Take Photo ...</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={{ padding : 15 }}  
                            onPress={() => {                                 
                                //pickImage("library");
                                setTimeout(async function(){  await pickImage("library"); }, 100);
                                setModalVisible(false); 
                            }} 
                            >
                            <Text>Select Photo On Phone ...</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={{ padding : 15 }}  
                            onPress={() => { setModalVisible(false); }} 
                            >
                            <Text>Remove Photo</Text>
                        </TouchableOpacity>
                    </View>
                    
            
                </TouchableOpacity>
            </Modal>
            <TouchableOpacity 
                style={{ margin : 10, alignItems : 'center'}} 
                onPress={() => { setModalVisible(!modalVisible); }}
                >
                <Ionicons name="md-images" size={50} color="#848484" />
                <Text>Select Image</Text>
            </TouchableOpacity>            
            <View style={{ alignItems : 'center'}}>
                <Text>{ image ? image.filename : "" }</Text>
                {(() => { 
                    if(url != null){
                        return (
                            <Image source={{uri: url }} style={{width: 100, height: 100}} resizeMode="cover" />
                        );
                    }                    
                })() }
            </View>
            <TextInput
                    placeholder="What's in your mind? "
                    // autoFocus
                    // underLineColorAndroid="transparent"
                    // underlineColor="transparent"
                    // blurOnSubmit
                    onChangeText={(new_title) => setTitle(new_title) }
                    value={title}
                    // autoCorrect={false}
                    // autoCapitalize="none"
                />      
            <View style={{ marginHorizontal : 10 ,marginTop : 100}}>
                <Button title="Save in Todo" onPress={onCreate}  />
            </View>
        </View>
    );
}
