import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export function HistorialDetallesScreen() {
  return (
    <View style={styles.containerPrincipal}>
      {/* Contenedor de Ingreso */}
      <View style={styles.subContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../../../../assets/img/ingresomarcacion.png')}
            style={[styles.image, { marginRight: -15, marginLeft: -30 }]}
            resizeMode="contain"
          />
          <Text style={styles.title}>Ingreso</Text>
        </View>

        {/* Línea vertical que separa la imagen y el nombre de la información */}
        <View style={[styles.verticalLine, { marginLeft: 20 }]}></View>

        {/* Información dentro del contenedor de Ingreso */}
        <View style={styles.infoContainer}>
          <View style={styles.infoItem}>
            <Image
              source={require('../../../../../assets/img/hora.png')} // Imagen para la hora
              style={styles.infoIcon}
              resizeMode="contain"
            />
            <Text style={styles.infoText}>10:30 AM</Text>
          </View>
          <View style={styles.infoItem}>
            <Image
              source={require('../../../../../assets/img/fecha.png')} // Imagen para la fecha
              style={styles.infoIcon}
              resizeMode="contain"
            />
            <Text style={styles.infoText}>14 Nov 2024</Text>
          </View>
          <View style={styles.infoItem}>
            <Image
              source={require('../../../../../assets/img/ubi.png')} // Imagen para la ubicación
              style={styles.infoIcon}
              resizeMode="contain"
            />
            <Text style={styles.infoText}>Ubicación: Oficina Central</Text>
          </View>
        </View>
      </View>

      {/* Contenedor de Salida */}
      <View style={styles.subContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../../../../assets/img/salidamarcacion.png')}
            style={[styles.image, { marginRight: -15, marginLeft: 0 }]}
            resizeMode="contain"
          />
          <Text style={styles.title}>Salida</Text>
        </View>

        {/* Línea vertical que separa la imagen y el nombre de la información */}
        <View style={[styles.verticalLine, { marginLeft: 30 }]}></View>

        {/* Información dentro del contenedor de Salida */}
        <View style={styles.infoContainer}>
          <View style={styles.infoItem}>
            <Image
              source={require('../../../../../assets/img/hora.png')} // Imagen para la hora
              style={styles.infoIcon}
              resizeMode="contain"
            />
            <Text style={styles.infoText}>06:00 PM</Text>
          </View>
          <View style={styles.infoItem}>
            <Image
              source={require('../../../../../assets/img/fecha.png')} // Imagen para la fecha
              style={styles.infoIcon}
              resizeMode="contain"
            />
            <Text style={styles.infoText}>14 Nov 2024</Text>
          </View>
          <View style={styles.infoItem}>
            <Image
              source={require('../../../../../assets/img/ubi.png')} // Imagen para la ubicación
              style={styles.infoIcon}
              resizeMode="contain"
            />
            <Text style={styles.infoText}>Ubicación: Oficina Central</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerPrincipal: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  subContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  verticalLine: {
    width: 1,
    backgroundColor: '#ccc',
    height: '110%',
    marginLeft: 20,
  },
  infoContainer: {
    flex: 1,
    paddingLeft: 20,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  infoIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  infoText: {
    fontSize: 14,
    color: '#333',
  },
});

export default HistorialDetallesScreen;
