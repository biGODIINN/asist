import { StyleSheet, Text,View,Image } from "react-native";


export  function Notificaciones(){
    return (
      <>
        <View style={notificacionesStyles.contenedor}>
          <Image
            source={{
              uri: "/Users/grupofirma/Desktop/app-asistencia/assets/icon/Grupo 560.png",
            }}
            style={notificacionesStyles.image}
          />
          <View style={notificacionesStyles.textContainer}>
            <Text style={notificacionesStyles.text}>AQUI CAMPO NOMBRE 1</Text>
            <Text style={notificacionesStyles.text}>AQUI CAMPO NOMBRE 2</Text>
            <Text style={notificacionesStyles.text}>AQUI CAMPO NOMBRE 3</Text>
          </View>
          <View style={notificacionesStyles.nuevo}>
            <Text style={notificacionesStyles.nuevoText}>Nuevo</Text>
          </View>
        </View>
      </>
    );
}


//TODO: ver despues como poner estos estilos en un archivos y exportarlos aca
const notificacionesStyles = StyleSheet.create({
  contenedor: {
    backgroundColor: "#fc6464",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
    marginRight: 110,
    padding: 10,
    maxWidth: "100%",
    width: "90%",
    height: 110,
    borderRadius: 30,
    position: "relative",
  },
  textContainer: {
    flexDirection: "column",
    marginLeft: 9,
  },
  text: {
    fontSize: 16,
    marginTop: 5,
  },
  nuevo: {
    position: "absolute",
    top: 5,
    right: 5,
    backgroundColor: "#ff0000",
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginTop: -10,
    marginRight: -10,
  },
  nuevoText: {
    color: "white",
    fontSize: 12,
  },
  image: {
    width: 90,
    height: 100,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 15,
    resizeMode: "contain",
  },
});
