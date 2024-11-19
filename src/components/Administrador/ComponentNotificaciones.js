import { StyleSheet, Text, View, Image } from "react-native";

export function ComponentNotificaciones({ src, titulo, texto, style, nuevo }) {
  return (
    <View style={[style, notificacionesStyles.container]}>
      <Image source={{ uri: src }} style={notificacionesStyles.image} />
      <View style={notificacionesStyles.textContainer}>
        <Text style={notificacionesStyles.titulo}>{titulo}</Text>
        <Text style={notificacionesStyles.text}>{texto}</Text>
      </View>
      <View style={notificacionesStyles.nuevo}>
        <Text style={notificacionesStyles.nuevoText}>{nuevo}</Text>
      </View>
    </View>
  );
}

const notificacionesStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10, 
    borderRadius: 15,
    marginVertical: 10, 
  },
  textContainer: {
    flex: 1, 
    marginLeft: 9,
  },
  titulo: {
    fontSize: 16,
    color: "white", 
    fontWeight: "900",
  },
  text: {
    fontSize: 16,
    color: "white", 
  },
  nuevo: {
    position: "absolute",
    top: -19,
    right: -10,
    backgroundColor: "#ff0000",
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  nuevoText: {
    color: "white",
    fontSize: 12,
    fontWeight:'900'
  },
  image: {
    width: 90,
    height: 100,
    marginLeft: 10,
    marginRight: 10,
    resizeMode:'contain'
  },
});
