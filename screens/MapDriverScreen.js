import React, { useState, useEffect } from 'react';
import { View, Text, Button, TouchableOpacity, Dimensions, YellowBox   } from 'react-native';

import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';
export default function MapDriverScreen({ navigation }) {
    
    const [loading, setLoading] = useState(true);
    const [location, setLocation] = useState(null);
    const [markerLocation, setMarkerLocation] = useState({
        latitude: 0, 
        longitude: 0
    });
    const [region, setRegion] = useState({
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0.003,
        longitudeDelta: 0.003,
    });

    useEffect(() => {        
        YellowBox.ignoreWarnings(['Possible Unhandled Promise']);
        const interval = setInterval(async () => {
            let { status } = await Location.requestPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
            }
            //console.log("Effect");
            //GET CURRENT LOCATION
            let current_location = await Location.getCurrentPositionAsync({
                accuracy : 1, maximumAge : 60000,  timeout : 3000,
            });
            //IF LOCATION DETECTED
            if(current_location){
                console.log("Location : ", 
                    current_location.coords.latitude, 
                    current_location.coords.longitude,
                    current_location.coords.speed * 3.6,
                    new Date(current_location.timestamp)
                );
                
                if(loading){
                    setLoading(false);
                    setRegion({
                        latitude: current_location.coords.latitude,
                        longitude: current_location.coords.longitude,
                        latitudeDelta: region.latitudeDelta,
                        longitudeDelta: region.longitudeDelta,
                    });
                }
                setLocation(current_location);   
                setMarkerLocation(current_location.coords);
                
                
            }                     
            
            
            

            // let subscription = Location.watchPositionAsync(
            //     { accuracy : 1, timeInterval  : 1000, distanceInterval  : 1, },
            //     (current_location)=>{

            //         setLocation(current_location);
            //         console.log("Location : ", 
            //             location.coords.latitude, 
            //             location.coords.longitude,
            //             location.coords.speed * 3.6,
            //             new Date(location.timestamp)
            //         );
            //     }
            // );
            // return subscription;
        }, 3000);
        return () => clearInterval(interval);
    },[]);
    
    return (
        <View style={{ flex: 1, flexDirection : 'column' }}>
            <View style={{flexDirection : 'row', height : 50 , backgroundColor : "#50E3C2"}}>
                <View style={{ flex : 1, flexDirection : 'column' }}>
                    <Text style={{ textAlign : 'center'}}>Latitude</Text>
                    <Text style={{ textAlign : 'center'}}>
                        { location ? location.coords.latitude : "-" }
                    </Text>                    
                </View>
                <View style={{ flex : 1, flexDirection : 'column' }}>
                    <Text style={{ textAlign : 'center'}}>Longitude</Text>
                    <Text style={{ textAlign : 'center'}}>
                        { location ? location.coords.longitude : "-" }
                    </Text> 
                </View>
                <View style={{ flex : 1, flexDirection : 'column' }}>
                    <Text style={{ textAlign : 'center'}}>Speed</Text>
                    <Text style={{ textAlign : 'center'}}>
                        { location ? Number(location.coords.speed).toFixed(0) : "-" } km/h
                    </Text> 
                </View>
            </View>
            <View style={{ flex: 1 }}>
                <MapView 
                    style={{
                        width: Dimensions.get('window').width,
                        height: Dimensions.get('window').height,
                    }} 
                    region={region}
                    onRegionChangeComplete={(region) => setRegion(region)}
                >
                    <Marker
                        coordinate={markerLocation}
                        //title={marker.title}
                        //description={marker.description}
                        />
                </MapView>
            </View>

        </View>
    );
}