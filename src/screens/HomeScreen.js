import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

export function HomeScreen({ navigation }) {
  // Simulamos dos usuarios con diferentes roles
  const users = [
    { id: 1, id_rol: 1, name: 'Admin User' }, // Admin
    { id: 2, id_rol: 2, name: 'Trabajador User' } // Trabajador
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
