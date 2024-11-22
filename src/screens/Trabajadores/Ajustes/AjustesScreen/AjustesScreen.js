import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  Dimensions,
} from "react-native";
import { AjusteComponent } from "../../../../components/Trabajador/AjusteComponent";
import {
  iconoNoti,
  iconoPass,
  iconoFlecha,
  iconoTerminos,
  iconoAcerca,
  iconoCerrarSe,
  iconoHelp,
} from "../../../../utils/iconos";
import { screen } from "../../../../utils/screenName";

// Obtenemos las dimensiones de la pantalla
const { width, height } = Dimensions.get("window");

// Función para escalar tamaños según el ancho de la pantalla
const scale = (size) => (width / 375) * size; 

export function AjusteScreen(props) {
  const { navigation } = props;

  const routes = {
    NOTIFICACIONES: () => {
      navigation.navigate(screen.ajustes.notification);
    },
    CONTRASENA: () => {
      navigation.navigate(screen.ajustes.password);
    },
    ACERCA_DE: () => {
      navigation.navigate(screen.ajustes.acerca);
    },
    TERMINOS_Y_CONDICIONES: () => {
      navigation.navigate(screen.ajustes.terminosYCondiciones);
    },
    AYUDA: () => {
      navigation.navigate(screen.ajustes.ayuda);
    },
  };

  const opciones = [
    {
      text: "Notificaciones",
      icon: iconoNoti,
      icon2: iconoFlecha,
      navigateTo: routes.NOTIFICACIONES,
    },
    {
      text: "Contraseña",
      icon: iconoPass,
      icon2: iconoFlecha,
      navigateTo: routes.CONTRASENA,
    },
    {
      text: "Acerca de",
      icon: iconoAcerca,
      icon2: iconoFlecha,
      navigateTo: routes.ACERCA_DE,
    },
    {
      text: "Términos y Condiciones",
      icon: iconoTerminos,
      icon2: iconoFlecha,
      navigateTo: routes.TERMINOS_Y_CONDICIONES,
    },
    {
      text: "Ayuda",
      icon: iconoHelp,
      icon2: iconoFlecha,
      navigateTo: routes.AYUDA,
    },
    {
      text: "Cerrar sesión",
      icon: iconoCerrarSe,
      icon2: "",
      navigateTo: () => {
        console.log("Cerrar sesión");
      },
    },
  ];

  return (
    <SafeAreaView style={styles.bg}>
      {/* Contenedor principal */}
      <View style={styles.mainContainer}>

        {/* Contenedor de las opciones */}
        <View style={styles.optionsContainer}>
          {opciones.map((opcion, index) => (
            <AjusteComponent
              key={index}
              icon={opcion.icon}
              text={opcion.text}
              icon2={opcion.icon2}
              nav={opcion.navigateTo}
            />
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  mainContainer: {
    flex: 1,
    paddingHorizontal: scale(20),  
    paddingTop: scale(20), 
  },
  viewTitulo: {
    alignItems: "center", 
    marginBottom: scale(30), 
  },
  titulo: {
    fontSize: scale(24), 
    fontWeight: "700",
    textAlign: "center",
  },
  optionsContainer: {
    flex: 1,
    paddingBottom: scale(10), 
    width: "108%", 
    alignSelf: "center", 
},
  ajusteContainer: {
    flexDirection: "row",
    alignItems: "center", 
    justifyContent: "flex-start", 
    marginBottom: scale(15), 
    padding: scale(10),
    width: "100%", 
  },
  ajusteIcono: {
    width: scale(20), 
    height: scale(20),
    marginRight: scale(10), 
    resizeMode: "cover",
  },
  ajusteTexto: {
    fontSize: scale(16), 
    fontWeight: "600",
    color: "#333",
  },
});
