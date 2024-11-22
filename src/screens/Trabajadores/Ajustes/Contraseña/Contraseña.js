import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, SafeAreaView } from "react-native";
import { ButtonRe } from "../../../../components/ButtonRe";
import { ContrasenaModal } from "../../../../components/Trabajador/ContrasenaModal";

export function Contraseña() {
  const [modalVisible, setModalVisible] = useState(false); // Modal inicialmente oculto

  const handleSubmit = () => {
    setModalVisible(true);

   setTimeout(() => setModalVisible(false), 3000);
  };

  return (
    <>
      <SafeAreaView style={style.safevView}>
        <View>
          <View style={style.viewTituloPrincipal}>
            <Text style={style.tituloPrincipal}>Cambiar Contraseña</Text>
          </View>

          <View style={style.viewContrasena}>
            <Text>Contraseña actual</Text>
            <TextInput style={style.input} secureTextEntry />
          </View>
          <View style={style.viewContrasena}>
            <Text>Nueva contraseña</Text>
            <TextInput
              style={style.input}
              placeholder="Ingresa tu nueva contraseña"
              secureTextEntry
            />
          </View>
          <View style={style.viewContrasena}>
            <Text>Confirmar nueva contraseña</Text>
            <TextInput
              style={style.input}
              placeholder="Confirma tu nueva contraseña"
              secureTextEntry
            />
          </View>
          <View>
            <ButtonRe
              title={"Confirmar"}
              onPress={handleSubmit}
              buttonStyle={{
                backgroundColor: "#007D00",
                width: 350,
                height: 50,
                marginHorizontal: "auto",
                marginTop: 200,
                marginRight: 49,
                marginLeft: 15,
              }}
              textStyle={{
                fontSize: 16,
                color: "white",
              }}
              disableTouchable={true}
            />
          </View>
        </View>
      </SafeAreaView>
      {/* Renderiza el modal basado en el estado */}
      {modalVisible && (
        <ContrasenaModal onClose={() => setModalVisible(false)} />
      )}
    </>
  );
}

const style = StyleSheet.create({
  safevView: {
    flex: 1,
    flexDirection: "column",
    marginLeft: 30,
  },
  input: {
    height: 60,
    width: "99%",
    marginVertical: 5,
    borderWidth: 0.4,
    padding: 10,
    borderRadius: 10,
  },
  tituloPrincipal: {
    fontSize: 24,
    fontWeight: "bold",
    marginRight: 20,
    marginBottom: 20,
    marginTop: 40,
  },
  viewTituloPrincipal: {
    marginRight: 20,
    width: 380,
    height: 90,
  },
  viewContrasena: {
    marginRight: 20,
    marginTop: 20,
    marginBottom: 0,
  },
  viewButton: {
    alignItems: "center",
  },
});
