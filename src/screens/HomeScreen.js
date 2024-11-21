import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

export function HomeScreen({ navigation }) {
  
  const users = [
    { id: 1, id_rol: 1, name: 'Admin User' }, 
    { id: 2, id_rol: 2, name: 'Trabajador User' } 
  ];

  useEffect(() => {
    users.forEach((user) => {
      
      if (user.id_rol === 1) {
      
        navigation.navigate('AdminTab', { userId: user.id });
      } else if (user.id_rol === 2) {
      
        navigation.navigate('TrabajadorTab', { userId: user.id });
      }
    });
  }, [users, navigation]);
}
