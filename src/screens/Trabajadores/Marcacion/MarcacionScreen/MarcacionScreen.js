import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import ingresoImage from '../../../../../assets/img/ingreso.png';  
import salidaImage from '../../../../../assets/img/salida.png';  
import { screen } from "../../../../utils";

export function MarcacionScreen({ navigation = {} }) {  // Desestructuramos props y asignamos valor por defecto a navigation
  const goToCamera = () => {
      navigation.navigate(screen.marcacion.camera);  // Navegación a la cámara
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        {/* Botón Ingreso */}
        <TouchableOpacity style={styles.button} onPress={goToCamera}>
          <Image source={ingresoImage} style={styles.buttonImage} />
          <Text style={styles.buttonText}>Ingreso</Text>
        </TouchableOpacity>

        {/* Botón Salida */}
        <TouchableOpacity style={styles.button} onPress={goToCamera}>
          <Image source={salidaImage} style={styles.buttonImage} />
          <Text style={styles.buttonText}>Salida</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  buttonsContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    maxWidth: 250,  
  },
  button: {
    width: '90%',
    height: 230,
    marginVertical: 20,
    backgroundColor: '#fff',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    paddingVertical: 10,  
  },
  buttonImage: {
    width: '80%',  
    height: '80%',  
    resizeMode: 'contain',
  },
  buttonText: {
    fontSize: 15,
    color: '#000',
    fontWeight: '',
    marginTop: 10,  
  },
});
