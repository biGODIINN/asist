import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from "react-native";

// Obtenemos las dimensiones de la pantalla
const { width, height } = Dimensions.get("window");

// Función para escalar tamaños según el ancho de la pantalla
const scale = (size) => (width / 375) * size; // 375 es el ancho base de diseño (puedes ajustarlo si es necesario)

export function AjusteComponent({ icon, text, icon2, nav }) {
  return (
    <TouchableOpacity style={styles.bg} onPress={nav}>
      {icon && (
        <Image
          style={styles.icon}
          source={icon}
        />
      )}
      <Text style={styles.text}>{text}</Text>
      {icon2 && (
        <Image
          style={styles.icon2}
          source={icon2}
        />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  bg: {
    width: scale(350), 
    height: scale(60), 
    borderRadius: scale(10), 
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: scale(5),
    borderWidth: 1,
    padding: scale(10), 
    borderColor: "#dfdfdf",
    marginBottom: scale(9),
    alignSelf: "center", 
    backgroundColor: "#fff"
  },
  icon: {
    width: scale(55), 
    height: scale(20), 
    marginHorizontal: scale(10), 
    resizeMode: "contain",
  },
  text: {
    flex: 1, 
    textAlign: "center", 
    fontSize: scale(16), 
    color: "#333",
  },
  icon2: {
    width: scale(24), 
    height: scale(24), 
    marginHorizontal: scale(10), 
    resizeMode: "contain",
  },
});
