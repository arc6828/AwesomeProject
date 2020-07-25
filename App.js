import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Bmi from './components/Bmi';
import Network from './components/Network';

export default function App() {
  return (
    <Network />
  );
}
