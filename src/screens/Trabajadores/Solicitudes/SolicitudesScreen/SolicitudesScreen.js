import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Icon, Text } from "react-native-elements";
import { screen } from "../../../../utils";

export function SolicitudesScreen(props) {
  const { navigation } = props;

  const goToAddSolicitudes = () => {
    navigation.navigate(screen.solicitudes.addsolicitudes);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>

        <View style={styles.cardsContainer}>
          <View style={styles.cardApproved}>
            <View style={styles.cardContent}>
              <Text style={styles.requestNumber}>#12345</Text>
              <Text style={styles.requestType}>Modificación marca de salida</Text>
              <Text style={styles.requestDate}>01/01/2024</Text>
            </View>
            <View style={styles.iconContainer}>
              <Image 
                source={require('../../../../../assets/img/Aprobada.png')}
                style={styles.cardImage}
              />
              <Text style={styles.iconLabel}>Aprobada</Text>
            </View>
          </View>
          <View style={styles.cardRejected}>
            <View style={styles.cardContent}>
              <Text style={styles.requestNumber}>#12346</Text>
              <Text style={styles.requestType}>Modificación marca de ingreso</Text>
              <Text style={styles.requestDate}>02/01/2024</Text>
            </View>
            <View style={styles.iconContainer}>
              <Image 
                source={require('../../../../../assets/img/Rechazada.png')}
                style={styles.cardImage}
              />
              <Text style={styles.iconLabel}>Rechazada</Text>
            </View>
          </View>
          <View style={styles.cardPending}>
            <View style={styles.cardContent}>
              <Text style={styles.requestNumber}>#12347</Text>
              <Text style={styles.requestType}>Pendiente</Text>
              <Text style={styles.requestDate}>03/01/2024</Text>
            </View>
            <View style={styles.iconContainer}>
              <Image 
                source={require('../../../../../assets/img/en_revision.png')}
                style={styles.cardImagePending} 
              />
              <Text style={styles.iconLabel}>Pendiente</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.iconButton} onPress={goToAddSolicitudes}>
          <Icon
            name="plus"
            type="material-community"
            color="#00a680"
            size={30} 
          />
        </TouchableOpacity>
        <Text style={styles.newRequestLabel}>Nueva solicitud</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },

  content: {
    flex: 1,
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  cardsContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginBottom: 20,
  },

  cardApproved: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
    height: 100,
    flexDirection: 'row',
    alignItems: 'center', 
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: -2, height: 2 }, 
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },

  cardRejected: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
    height: 100,
    flexDirection: 'row',
    alignItems: 'center', 
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: -2, height: 2 }, 
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },

  cardPending: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    height: 100,
    flexDirection: 'row',
    alignItems: 'center', 
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: -2, height: 2 }, 
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },

  cardContent: {
    flex: 1, 
  },

  requestNumber: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  requestType: {
    fontSize: 16,
    marginTop: 5,
  },

  requestDate: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },

  cardImage: {
    width: 50, 
    height: 50, 
    marginLeft: 0, 
  },

  cardImagePending: {
    width: 60, 
    height: 60, 
    marginLeft: 0,
  },

  btnContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20,
  },

  iconContainer: {
    alignItems: 'center', 
    marginLeft: 10, 
  },

  iconLabel: {
    fontSize: 14,
    marginTop: 10, 
    textAlign: 'center', 
  },

  iconButton: {
    borderColor: '#00a680',
    borderWidth: 2, 
    borderRadius: 50, 
    padding: 10, 
    alignItems: 'center',
    justifyContent: 'center',
  },

  newRequestLabel: {
    marginTop: 10, 
    fontSize: 16,
    color: '##f0f0f0', 
    textAlign: 'center', 
  },
  
});
