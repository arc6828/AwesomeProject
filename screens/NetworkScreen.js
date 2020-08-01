import * as React from 'react';
import { View, Text,Button } from 'react-native';

import Network from '../components/Network';


export default function NetworkScreen({navigation}) {
    

    return (
        <View style={{ flex: 1 }}>
            
            <Network />
            <View style={{ paddingTop : 20 }} >
                
                <Button  
                    onPress={() => navigation.navigate('HomeScreen')}
                    title="Next"
                    color=""
                    />
            </View>
        </View>
    );
}