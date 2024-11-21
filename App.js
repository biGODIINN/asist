import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { LogBox } from "react-native";
import { AppNavigation } from './src/navigation/AppNavigation';
import { NavigationContainer } from '@react-navigation/native';

LogBox.ignoreAllLogs();

export default function App() {
  return (
    <>
    <NavigationContainer>

      <AppNavigation/>
    </NavigationContainer>
    </>
  );
}

