import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image, Modal, TextInput } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import * as Location from 'expo-location'; // Importamos la librería para la localización

export function CameraScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const [photo, setPhoto] = useState(null); // Estado para almacenar la foto
  const [location, setLocation] = useState(null); // Estado para almacenar la ubicación
  const [time, setTime] = useState(''); // Estado para almacenar la hora
  const [showModal, setShowModal] = useState(false); // Estado para mostrar el modal de la foto
  const [showVoucherModal, setShowVoucherModal] = useState(false); // Estado para mostrar el modal del voucher
  const [voucherDetails, setVoucherDetails] = useState(null); // Detalles del voucher
  const cameraRef = useRef(null); // Referencia para la cámara

  // Función para obtener la hora local de Chile
  const getLocalTime = () => {
    const date = new Date();
    const options = {
      timeZone: 'America/Santiago', // Zona horaria de Chile
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    };
    const timeString = date.toLocaleString('es-CL', options);
    setTime(timeString);
  };

  // Función para obtener la localización
  const getLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status === 'granted') {
        const location = await Location.getCurrentPositionAsync({});
        setLocation(location.coords); // Guardamos las coordenadas (lat, long)
      } else {
        alert('Permission to access location was denied');
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getLocalTime(); // Obtenemos la hora cuando la pantalla se carga
    getLocation(); // Obtenemos la localización
  }, []);

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="Grant Permission" />
      </View>
    );
  }

  // Función para tomar una foto
  const takePhoto = async () => {
    if (cameraRef.current) {
      const photoData = await cameraRef.current.takePictureAsync();
      setPhoto(photoData.uri); // Guardamos la URI de la foto tomada
      getLocalTime(); // Actualizamos la hora local al tomar la foto
      getLocation(); // Actualizamos la localización al tomar la foto
      setShowModal(true); // Mostramos el modal con los botones
    }
  };

  // Función para cerrar el modal de la foto
  const closeModal = () => {
    setShowModal(false);
    setPhoto(null); // Limpiamos la foto al cerrar el modal
  };

  // Función para confirmar la foto y mostrar el voucher
  const confirmPhoto = () => {
    // Aquí puedes poner la lógica para crear el voucher
    const newVoucher = {
      name: 'Juan Pérez', // Ejemplo, puedes obtener esto desde un formulario o una API
      rut: '12.345.678-9',
      position: 'Desarrollador',
      contractType: 'Indefinido',
      company: 'Mi Empresa',
      location: location
        ? `Lat: ${location.latitude.toFixed(4)}, Lon: ${location.longitude.toFixed(4)}`
        : 'Ubicación no disponible',
      checkInOut: 'Entrada', // Puedes cambiar esto dependiendo de si es entrada o salida
      dateTime: time,
    };

    setVoucherDetails(newVoucher); // Establecemos los detalles del voucher
    setShowModal(false); // Cierra el modal de la foto
    setShowVoucherModal(true); // Mostramos el modal del voucher
  };

  // Función para repetir la foto
  const repeatPhoto = () => {
    setPhoto(null); // Limpiamos la foto tomada
    setShowModal(false); // Cierra el modal
    takePhoto(); // Vuelve a tomar la foto
  };

  // Función para cerrar el modal del voucher
  const closeVoucherModal = () => {
    setShowVoucherModal(false);
  };

  return (
    <View style={styles.container}>
      {/* Mostrar la vista de la cámara frontal */}
      {!showModal ? ( // Mostrar la cámara solo cuando no se está mostrando el modal
        <CameraView
          style={styles.camera}
          facing="front"
          ref={cameraRef} // Referencia a la cámara
        >
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={takePhoto}>
              <Text style={styles.text}>Capturar</Text>
            </TouchableOpacity>
          </View>
        </CameraView>
      ) : null}

      {/* Modal para mostrar la foto a pantalla completa */}
      <Modal
        visible={showModal}
        animationType="fade"
        transparent={false}
        onRequestClose={closeModal} // Cierra el modal cuando se presiona el botón de atrás (en Android)
      >
        <View style={styles.modalContainer}>
          <Image source={{ uri: photo }} style={styles.fullScreenPhoto} />

          {/* Botón para cerrar el modal */}
          <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
            <Text style={styles.closeButtonText}>X</Text>
          </TouchableOpacity>

          {/* Contenedor de la información */}
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>Hora (Chile): {time}</Text>
            {location ? (
              <Text style={styles.infoText}>
                Ubicación: Lat {location.latitude.toFixed(4)}, Lon {location.longitude.toFixed(4)}
              </Text>
            ) : (
              <Text style={styles.infoText}>Cargando ubicación...</Text>
            )}

            {/* Botón de Confirmar Foto */}
            <TouchableOpacity style={styles.confirmButton} onPress={confirmPhoto}>
              <Text style={styles.confirmButtonText}>Confirmar</Text>
            </TouchableOpacity>

            {/* Botón de Repetir Foto */}
            <TouchableOpacity style={styles.repeatButton} onPress={repeatPhoto}>
              <Text style={styles.repeatButtonText}>Repetir</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Modal para mostrar el voucher con los detalles de la marcación */}
      <Modal
        visible={showVoucherModal}
        animationType="fade"
        transparent={false}
        onRequestClose={closeVoucherModal}
      >
        <View style={styles.voucherModalContainer}>
          <Text style={styles.voucherTitle}>Detalles de la Marcación</Text>
          {voucherDetails && (
            <View style={styles.voucherDetailsContainer}>
              <Text style={styles.voucherText}>Nombre: {voucherDetails.name}</Text>
              <Text style={styles.voucherText}>RUT: {voucherDetails.rut}</Text>
              <Text style={styles.voucherText}>Cargo: {voucherDetails.position}</Text>
              <Text style={styles.voucherText}>Tipo de contrato: {voucherDetails.contractType}</Text>
              <Text style={styles.voucherText}>Empresa: {voucherDetails.company}</Text>
              <Text style={styles.voucherText}>Ubicación: {voucherDetails.location}</Text>
              <Text style={styles.voucherText}>Tipo de Marcación: {voucherDetails.checkInOut}</Text>
              <Text style={styles.voucherText}>Fecha y Hora: {voucherDetails.dateTime}</Text>
            </View>
          )}

          {/* Botón para cerrar el modal del voucher */}
          <TouchableOpacity style={styles.closeVoucherButton} onPress={closeVoucherModal}>
            <Text style={styles.closeVoucherButtonText}>Cerrar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20,
  },
  button: {
    width: '90%',
    padding: 13,
    borderRadius: 50,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4CAF50',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  confirmButton: {
    backgroundColor: '#4CAF50',
    width: '100%',
    padding: 14,
    borderRadius: 50,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  confirmButtonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  repeatButton: {
    backgroundColor: 'white',
    width: '100%',
    padding: 14,
    borderRadius: 50,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  repeatButtonText: {
    fontSize: 20,
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  fullScreenPhoto: {
    width: '100%',
    height: '80%',
    resizeMode: 'contain',
  },
  infoContainer: {
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
  },
  infoText: {
    fontSize: 18,
    color: 'white',
    marginBottom: 10,
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    backgroundColor: 'transparent',
    padding: 10,
    borderRadius: 50,
  },
  closeButtonText: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  voucherModalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
  },
  voucherTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  voucherDetailsContainer: {
    marginBottom: 20,
  },
  voucherText: {
    fontSize: 18,
    marginBottom: 10,
  },
  closeVoucherButton: {
    padding: 14,
    backgroundColor: '#4CAF50',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeVoucherButtonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});