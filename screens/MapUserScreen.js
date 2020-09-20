import React, { useState, useEffect } from 'react';
import { View, Text, Button, TouchableOpacity, Dimensions, YellowBox   } from 'react-native';

import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';
import { fb } from '../db_config';

export default function MapUserScreen({ navigation }) {
    const [markers, setMarkers] = useState([]);    

    useEffect(() => {
        readDriverLocationFirebase();
        
    },[]);

    const readDriverLocationFirebase = async () => {
        console.log("user in Screen")
        fb.firestore().collection("driver_locations")
            //.where("user_id", "==", user.uid)
            .onSnapshot((querySnapshot) => {
            //.get().then((querySnapshot) => {
                
                const markers = querySnapshot.docs.map(doc => doc.data());
                
                console.log("MARKERS : " , markers);

                //SET STATE
                setMarkers(markers);            
                
            });
      
      
    }

    return (
        <View style={{ flex: 1, flexDirection : 'column' }}>
            <View style={{ flex: 1 }}>
                {(() => {
                    //IF LOCATION NOT NULL
                    if(markers.length > 0){
                        return (
                        <MapView 
                            style={{
                                width: Dimensions.get('window').width,
                                height: Dimensions.get('window').height,
                            }}                     
                            initialRegion={{
                                latitude: markers[0].coords.latitude,
                                longitude: markers[0].coords.longitude,
                                latitudeDelta: 0.005,
                                longitudeDelta: 0.005,
                            }}                            
                            >                            
                            {markers.map(marker => (
                                <Marker
                                coordinate={marker.coords}
                                title={marker.user_id}
                                key={marker.user_id}
                                //description={marker.description}
                                />
                            ))}
                        </MapView>
                        );
                    }
                })()}
            </View>

        </View>
    );
}