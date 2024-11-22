import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  Image
} from "react-native";
import { ButtonRe } from "../../components/ButtonRe";

import { iconGfLlegue } from "../../../../utils/iconos";

export function RecuperarContrasena() {
  const [email, setEmail] = useState("");

  const handleSubmit = async () => {
  console.log("Enviandooo");
    
  };

  return (
    <SafeAreaView style={loginStyle.safeContainer}>
      <View style={loginStyle.logoContainer}>
        <Image style={loginStyle.icon} source={iconGfLlegue} />
      </View>

      <View style={loginStyle.viewContainer}>
        <View>
          <Text style={loginStyle.texto}>Recuperación de contraseña</Text>
        </View>
        <TextInput
          value={email}
          style={loginStyle.input}
          onChangeText={setEmail}
          placeholder="Ingrese su correo electrónico"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <View style={loginStyle.viewButton}>
          <ButtonRe
            title={"Enviar"}
            onPress={handleSubmit}
            style={{
              backgroundColor: "#007D00",
              paddingVertical: 10,
              paddingHorizontal: 15,
              borderRadius: 10,
            }}
            textStyle={{
              color: "white",
            }}
            disableTouchable={true}
          />
        </View>
      </View>
      <View style={loginStyle.containerFooter}>
        <Text style={loginStyle.textFooter}>Copyright</Text>
      </View>
    </SafeAreaView>
  );
}

const loginStyle = StyleSheet.create({
  safeContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
  },
  viewContainer: {
    width: "80%",
    height: "40%",
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
    marginBottom: 10,
    fontWeight:'semibold'
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
  },
  containerFooter: {
    paddingBottom: 10,
    alignItems: "center",
  },
  textFooter: {
    fontSize: 14,
    fontWeight: "normal",
    textAlign: "center",
  },
  icon: {
    width: 100,
    height: 100,
  },
  viewButton: {
    marginTop: 15,
    backgroundColor: "#29622C",
    borderRadius: 10,
  },

});
