import React, { useState } from "react";
import { Modal, StyleSheet, Text, View,Image } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";


//* imagenes 
const confirmacionImg = require("./contraseñaCambiada.png");

export function ContrasenaModal({titulo,img,description}) {
  const [modalVisible, setModalVisible] = useState(true)

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.centeredView}>
        <Modal animationType="fade" transparent={true} visible={modalVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Image
                 source={img}
                 style={styles.img}
                 />
              <Text style={styles.modalText}>{titulo}</Text>
              <Text style={styles.modalText1}></Text>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: 390,
    height: 390,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    marginTop: "auto",
    fontSize: 21,
    fontWeight: "500",
  },
  modalText1: {
    fontSize: 21,
    fontWeight: "500",
  },
  img:{
    width:110,
    height:110,
    margin:'auto'
  }
});
