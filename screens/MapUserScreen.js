import React, { useState, useEffect } from 'react';
import { View, Text, Button, TouchableOpacity, Dimensions, YellowBox   } from 'react-native';

import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';

export default function MapUserScreen({ navigation }) {
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
        //GET DRIVER LOCATION FROM FIREBASE 
        //WHEN GET LOCATION USE setLocation, setRegion AND setMarkerLocation
        //TO DRAW MARKER ON MAP
        

        
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