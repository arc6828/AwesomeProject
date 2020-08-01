import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import HomeStack from './navigations/HomeStack';
import BottomTab from './navigations/BottomTab';

export default function App() {
    return (
        <NavigationContainer>
            <BottomTab />
        </NavigationContainer>
    );
}
