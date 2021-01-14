import * as React from 'react';
import { View, Text, Button } from 'react-native';

import Bmi from '../components/Bmi';

export default function BmiScreen({ navigation }) {
    

    return (
        <View style={{ flex: 1  }}>
            <Bmi />
            
            
            <View style={{ paddingTop : 20 }} >                
                <Button  
                    onPress={() => navigation.navigate('NetworkScreen')}
                    title="Next"
                    color=""
                    />
            </View>
        </View>
    );
}