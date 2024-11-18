// src/screens/MainScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

export function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Bienvenido a la aplicación</Text>
      <Button 
        title="Acceder como Trabajador"
        onPress={() => navigation.navigate('TrabajadorTab')} 
      />
      <Button 
        title="Acceder como Administrador"
        onPress={() => navigation.navigate('AdminTab')}
      />
    </View>
  );
}
