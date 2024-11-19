import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, Text, SafeAreaView, Image } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { Logo_GF_Llegue } from "../../assets/img/Logo_GF_Llegue.png"
import jwt_decode from 'jwt-decode';

const LoginScreen = () => {
  const [rut, setRut] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', {
        rut,
        password,
      });
      const { token } = response.data;

      try {
        const decodedToken = jwt_decode(token);
        console.log('Decoded Token:', decodedToken);  
        const { rol } = decodedToken;  // Suponiendo que el rol está en decodedToken.rol
        if (rol === 1) {
          navigation.navigate('HomeAdministrador');  // Si el rol es 1, navega a HomeAdministrador
        } else if (rol === 2) {
          navigation.navigate('HomeScreen');  // Si el rol es 2, navega a HomeScreen
        } else {
          Alert.alert('Acceso denegado', 'Rol no autorizado para acceder a esta pantalla');
        }
      } catch (error) {
        console.error("Error al decodificar el token:", error);
        Alert.alert('Error', 'Error al decodificar el token');
      }
  
    } catch (error) {
      console.error('Error de autenticación:', error.response?.data?.message || error);
      Alert.alert('Error', error.response?.data?.message || 'Error al iniciar sesión');
    }
  };

  return (
    <SafeAreaView style={loginStyle.safeContainer}>
      <View style={loginStyle.logoContainer}>
        <Image style={loginStyle.icon} source={Logo_GF_Llegue} />
      </View>

      <View style={loginStyle.viewContainer}>
        <View style={loginStyle.text}>
          <Text style={loginStyle.texto}>Inicio de sesión</Text>
        </View>
        <TextInput
          value={rut}
          style={loginStyle.input}
          onChangeText={setRut}
          placeholder="Ingrese su RUT"
          keyboardType="numeric"
        />
        <TextInput
          value={password}
          style={loginStyle.input}
          onChangeText={setPassword}
          placeholder="Contraseña"
          secureTextEntry
        />
        <View style={loginStyle.viewButton}>
          <Button
            title="Iniciar sesión"
            onPress={handleLogin}
            color="#007D00"
          />
        </View>
        <Text style={loginStyle.texto2}>¿Olvidaste tu contraseña?</Text>
      </View>

      <View style={loginStyle.containerFooter}>
        <Text style={loginStyle.textFooter}>Copyright</Text>
      </View>
    </SafeAreaView>
  );
};

const loginStyle = StyleSheet.create({
  safeContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  viewContainer: {
    width: "80%",
    height: "40%",
    flex: 0,
    justifyContent: "center",
    marginTop: -150,
  },
  logoContainer: {
    width: "80%",
    height: "40%",
    alignItems: "center",
    justifyContent: "center",
  },
  texto: {
    fontSize: 21,
    textAlign: "center",
    marginBottom: 10,
    color: "#000",
  },
  texto2: {
    fontSize: 18,
    textAlign: "center",
    marginVertical: 10,
    color: "#007D00",
    fontWeight: "normal",
  },
  input: {
    height: 60,
    marginVertical: 5,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderColor: "#ccc",
  },
  containerFooter: {
    paddingBottom: 10,
    alignItems: "center",
  },
  textFooter: {
    fontSize: 14,
    fontWeight: "normal",
    textAlign: "center",
    color: "#888",
  },
  icon: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  viewButton: {
    marginTop: 15,
  },
  text: {
    marginRight: 190,
  },
});

export default LoginScreen;
