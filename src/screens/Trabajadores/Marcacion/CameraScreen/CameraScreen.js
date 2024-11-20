import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image, Modal, TextInput, useWindowDimensions  } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { useNavigation } from '@react-navigation/native';
import successIcon from '../../../../../assets/img/ok.png';
import * as Location from 'expo-location'; 
import * as FileSystem from 'expo-file-system'; 
import * as Print from 'expo-print'; 

export function CameraScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const [photo, setPhoto] = useState(null); 
  const [location, setLocation] = useState(null); 
  const [address, setAddress] = useState(null); 
  const [time, setTime] = useState('');
  const [showModal, setShowModal] = useState(false); 
  const [showVoucherModal, setShowVoucherModal] = useState(false); 
  const [voucherDetails, setVoucherDetails] = useState(null);
  const [showCaptureAlert, setShowCaptureAlert] = useState(false); 
  const cameraRef = useRef(null);

   // Obtener la dimensión de la pantalla
   const { width, height } = useWindowDimensions();

  // Obtener hora local
  const getLocalTime = () => {
    const date = new Date();
    const options = {
      timeZone: 'America/Santiago',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    };
    const timeString = date.toLocaleString('es-CL', options);
    setTime(timeString);
  };

  // Obtener ubicación y dirección
  const getLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status === 'granted') {
        const location = await Location.getCurrentPositionAsync({});
        setLocation(location.coords); // Guardar las coordenadas

        // Convertir las coordenadas en una dirección legible
        const geoAddress = await Location.reverseGeocodeAsync(location.coords);
        if (geoAddress && geoAddress.length > 0) {
          const { street, city, region, country } = geoAddress[0];
          const fullAddress = `${street}, ${city}, ${region}, ${country}`;
          setAddress(fullAddress); // Guardar la dirección
        }
      } else {
        alert('Se denegó el permiso para acceder a la ubicación.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getLocalTime(); 
    getLocation(); 
  }, []);

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>Necesitamos su permiso para mostrar la cámara.</Text>
        <Button onPress={requestPermission} title="Conceder permiso" />
      </View>
    );
  }

  const takePhoto = async () => {
    if (cameraRef.current) {
      const photoData = await cameraRef.current.takePictureAsync();
      setPhoto(photoData.uri); 
      getLocalTime(); 
      getLocation(); 
      setShowModal(true); 
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setPhoto(null); 
  };

  const confirmPhoto = () => {
    const newVoucher = {
      name: 'Juan Pérez',
      rut: '12.345.678-9',
      position: 'Desarrollador',
      contractType: 'Indefinido',
      company: 'Mi Empresa',
      location: address || 'Ubicación no disponible',
      checkInOut: 'Entrada',
      dateTime: time,
    };

    setVoucherDetails(newVoucher);
    setShowModal(false);

    setShowCaptureAlert(true);
    setTimeout(() => {
      setShowCaptureAlert(false);
      setShowVoucherModal(true); 
    }, 2000);
  };

  const repeatPhoto = () => {
    setPhoto(null); 
    setShowModal(false); 
    takePhoto(); 
  };

  const closeVoucherModal = async () => {
    const voucherHtml = `
      <html>
        <body>
          <h1>Voucher de Marcación</h1>
          <p><strong>Nombre:</strong> ${voucherDetails.name}</p>
          <p><strong>RUT:</strong> ${voucherDetails.rut}</p>
          <p><strong>Cargo:</strong> ${voucherDetails.position}</p>
          <p><strong>Tipo de contrato:</strong> ${voucherDetails.contractType}</p>
          <p><strong>Empresa:</strong> ${voucherDetails.company}</p>
          <p><strong>Ubicación:</strong> ${voucherDetails.location}</p>
          <p><strong>Tipo de Marcación:</strong> ${voucherDetails.checkInOut}</p>
          <p><strong>Fecha y Hora:</strong> ${voucherDetails.dateTime}</p>
        </body>
      </html>
    `;

    try {
      const { uri } = await Print.printToFileAsync({ html: voucherHtml });

      const fileName = `Voucher_${new Date().toISOString()}.pdf`;
      const fileUri = FileSystem.documentDirectory + fileName;

      await FileSystem.copyAsync({
        from: uri,
        to: fileUri,
      });

      alert(`Voucher descargado exitosamente! Puedes ver el archivo en: ${fileUri}`);
    } catch (error) {
      console.error('Error al generar o guardar el PDF:', error);
    } finally {
      setShowVoucherModal(false); 
    }
  };

  return (
    <View style={styles.container}>
      {!showModal ? (
        <CameraView style={styles.camera} facing="front" ref={cameraRef}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={takePhoto}>
              <Text style={styles.text}>Capturar</Text>
            </TouchableOpacity>
          </View>
        </CameraView>
      ) : null}

      <Modal
        visible={showModal}
        animationType="fade"
        transparent={true}
        onRequestClose={closeModal}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Image source={{ uri: photo }} style={styles.fullScreenPhoto} />

            <View style={styles.infoContainer}>
              <Text style={styles.infoText}>Hora: {time}</Text>
              {address ? (
                <Text style={styles.infoText}>Ubicación: {address}</Text>
              ) : (
                <Text style={styles.infoText}>Cargando dirección...</Text>
              )}

              <TouchableOpacity style={styles.confirmButton} onPress={confirmPhoto}>
                <Text style={styles.confirmButtonText}>Confirmar</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.repeatButton} onPress={repeatPhoto}>
                <Text style={styles.repeatButtonText}>Repetir</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <Text style={styles.closeButtonText}>X</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      
      {/* Alerta de captura exitosa */}
      <Modal
        visible={showCaptureAlert}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowCaptureAlert(false)}
      >
        <View style={styles.alertBackground}>
          <View style={styles.alertContainer}>
            <Image source={successIcon} style={styles.successIcon} />
            <Text style={styles.alertText}>Captura exitosa</Text>
          </View>
        </View>
      </Modal>

      <Modal
      visible={showVoucherModal}
      animationType="fade"
      transparent={false}
      onRequestClose={closeVoucherModal}
    >
      <View style={styles.voucherModalContainer}>
        
        {/* Imagen y los detalles del voucher estarán dentro del mismo modal */}
        <View style={styles.modalContent}>
          {/* Imagen del voucher */}
          <Image 
            source={require('../../../../../assets/img/logo.png')}  // Asegúrate de poner la ruta correcta de tu imagen
            style={styles.voucherTitleImage}
          />

          {/* Detalles del voucher */}
          {voucherDetails && (
            <View style={styles.voucherDetailsContainer}>
              <Text style={styles.voucherLabel}>Nombre:</Text>
              <Text style={styles.voucherData}>{voucherDetails.name}</Text>

              <Text style={styles.voucherLabel}>RUT:</Text>
              <Text style={styles.voucherData}>{voucherDetails.rut}</Text>

              <Text style={styles.voucherLabel}>Cargo:</Text>
              <Text style={styles.voucherData}>{voucherDetails.position}</Text>

              <Text style={styles.voucherLabel}>Tipo de contrato:</Text>
              <Text style={styles.voucherData}>{voucherDetails.contractType}</Text>

              <Text style={styles.voucherLabel}>Empresa:</Text>
              <Text style={styles.voucherData}>{voucherDetails.company}</Text>

              <Text style={styles.voucherLabel}>Ubicación:</Text>
              <Text style={styles.voucherData}>{voucherDetails.location}</Text>

              <Text style={styles.voucherLabel}>Tipo de Marcación:</Text>
              <Text style={styles.voucherData}>{voucherDetails.checkInOut}</Text>

              <Text style={styles.voucherLabel}>Fecha y Hora:</Text>
              <Text style={styles.voucherData}>{voucherDetails.dateTime}</Text>
            </View>
          )}

          <TouchableOpacity style={styles.closeVoucherButton} onPress={closeVoucherModal}>
            <Text style={styles.closeVoucherButtonText}>Descargar</Text>
          </TouchableOpacity>
        </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    },
    message: {
      fontSize: 18,
      textAlign: 'center',
      marginBottom: 20,
    },
    camera: {
      width: '100%',
      height: '100%',
    },
    buttonContainer: {
      position: 'absolute',
      bottom: 10,
      left: '15%',
    },
    button: {
      paddingVertical: 15,
      paddingHorizontal: 100,
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#4CAF50',
    },
    text: {
      color: 'white',
      fontSize: 18,
    },
    modalBackground: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    modalContainer: {
      width: '80%',
      backgroundColor: 'white',
      borderRadius: 10,
      padding: 20,
      alignItems: 'center',
    },
    fullScreenPhoto: {
      width: '100%',
      height: 250,
      borderRadius: 10,
      marginBottom: 15,
    },
    infoContainer: {
      alignItems: 'center',
    },
    infoText: {
      fontSize: 16,
      marginBottom: 10,
      color: '#333',
    },
    confirmButton: {
      backgroundColor: '#28a745',
      paddingVertical: 10,
      paddingHorizontal: 90,
      borderRadius: 39,
      marginBottom: 10,
    },
    confirmButtonText: {
      color: 'white',
      fontSize: 15,
    },
    repeatButton: {
      backgroundColor: '#fff',
      paddingVertical: 10,
      paddingHorizontal: 100,
      borderRadius: 30,
      borderWidth: 2,
      borderColor: '#28a745',
    },
    repeatButtonText: {
      color: 'green',
      fontSize: 13,
    },
    closeButton: {
      position: 'absolute',
      top: 2,
      right: 5,
    },
    closeButtonText: {
      fontSize: 24,
      color: 'gray',
    },
    alertBackground: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    alertContainer: {
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 10,
      alignItems: 'center',
    },
    successIcon: {
      width: 50,
      height: 50,
      marginBottom: 10,
    },
    alertText: {
      fontSize: 18,
      color: '#28a745',
    },
    voucherModalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
      },
      modalContent: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        width: '80%',
        alignItems: 'center',
      },
      voucherTitleImage: {
        width: 150, 
        height: 75,
        resizeMode: 'contain', 
        marginBottom: 20,  
      },
      voucherDetailsContainer: {
        width: '100%',
        marginBottom: -1,
      },
      voucherLabel: {
        fontWeight: 'bold',
        marginBottom: 5,
      },
      voucherData: {
        marginBottom: 15,
      },
      closeVoucherButton: {
        backgroundColor: '#4CAF50',
        padding: 10,
        borderRadius: 30,
        paddingHorizontal: 60,
      },
      closeVoucherButtonText: {
        color: '#fff',
        fontWeight: 'bold',
      },
    });
