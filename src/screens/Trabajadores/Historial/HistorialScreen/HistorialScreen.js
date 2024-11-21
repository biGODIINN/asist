import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Animated } from 'react-native';
import { screen } from '../../../../utils';

export function HistorialScreen(props) {
  const { navigation } = props;

  const [scale] = useState(new Animated.Value(1)); // Valor para controlar la escala
  const [shadowOpacity] = useState(new Animated.Value(0.2)); // Valor para la opacidad de la sombra

  const goToHistorialDetalles = () => {
    // Navegar a la pantalla de detalles
    navigation.navigate(screen.historial.historialdetalles);
  };

  const handlePressIn = () => {
    // Efecto cuando el usuario presiona el contenedor
    Animated.timing(scale, {
      toValue: 0.95, // Reducir un poco el tamaño
      duration: 150,
      useNativeDriver: true,
    }).start();

    Animated.timing(shadowOpacity, {
      toValue: 0.4, // Aumentar la sombra
      duration: 150,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    // Efecto cuando el usuario deja de presionar el contenedor
    Animated.timing(scale, {
      toValue: 1, // Volver al tamaño original
      duration: 150,
      useNativeDriver: true,
    }).start();

    Animated.timing(shadowOpacity, {
      toValue: 0.2, // Reducir la sombra
      duration: 150,
      useNativeDriver: true,
    }).start();
  };

  return (
    <ScrollView>
      <View style={styles.containerPrincipal}>
        {[...Array(10)].map((_, index) => (
          <TouchableOpacity
            key={index}
            style={styles.itemWrapper}
            onPress={goToHistorialDetalles}
            onPressIn={handlePressIn} // Efecto cuando se presiona
            onPressOut={handlePressOut} // Efecto cuando se deja de presionar
          >
            <Animated.View
              style={[
                styles.itemContainer,
                {
                  transform: [{ scale }], // Aplicamos el efecto de escala
                  shadowOpacity, // Aplicamos la sombra con opacidad animada
                },
              ]}
            >
              <Text style={styles.dateText}>{new Date().toLocaleDateString()}</Text>
              <View style={styles.row}>
                {/* Sección de Ingreso */}
                <View style={styles.infoSection}>
                  <Image
                    source={require('../../../../../assets/img/ingresomarcacion.png')}
                    style={[styles.image, { marginLeft: -20 }]}
                    resizeMode="contain"
                  />
                  <Text style={styles.label}>Ingreso</Text>
                </View>

                {/* Línea divisoria */}
                <View style={styles.divider} />

                {/* Sección de Salida */}
                <View style={styles.infoSection}>
                  <Image
                    source={require('../../../../../assets/img/salidamarcacion.png')}
                    style={[styles.image, { marginRight: -20 }]}
                    resizeMode="contain"
                  />
                  <Text style={styles.label}>Salida</Text>
                </View>
              </View>
            </Animated.View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containerPrincipal: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  itemWrapper: {
    marginBottom: 24,
  },
  dateText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#333',
  },
  itemContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    elevation: 5, // Sombra para Android
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2, // Sombra para iOS
    shadowRadius: 4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    marginBottom: 5,
  },
  infoSection: {
    alignItems: 'center',
    flex: 1,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 4,
  },
  divider: {
    width: 1,
    backgroundColor: '#ccc',
    marginHorizontal: 16,
    height: '100%',
  },
});

export default HistorialScreen;
