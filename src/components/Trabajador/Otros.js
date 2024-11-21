import { StyleSheet, Text, View, Image } from "react-native";

export function Otros({ imageUri, title, description, style, nuevo }) {
  return (
    <View style={OtrosStyle.bg}>
      {/* Usando require() para cargar la imagen */}
      <Image source={imageUri} style={OtrosStyle.image} />
      <View style={[OtrosStyle.bg2, style]}>
        <Text style={OtrosStyle.title}>{title}</Text>
        <Text style={OtrosStyle.description}>{description}</Text>
      </View>
      {/* Renderiza la etiqueta "Nuevo" solo si está definida */}
      {nuevo && (
        <View style={OtrosStyle.nuevo}>
          <Text style={OtrosStyle.nuevoText}>{nuevo}</Text>
        </View>
      )}
    </View>
  );
}

const OtrosStyle = StyleSheet.create({
  bg: {
    width: 145,
    height: 190,
    justifyContent: "flex-start",
    alignItems: "center",
    marginLeft: 5.5,
    marginRight: 5.5,
    position: "relative",
  },
  bg2: {
    backgroundColor: "#9379D1",
    width: "100%",
    height: "50%",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: "absolute",
    bottom: 0,
  },
  image: {
    width: "100%",
    height: "50%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  nuevo: {
    position: "absolute",
    top: 10, // Ajusta la posición
    right: -10, // Asegúrate de que sobresalga
    backgroundColor: "#ff0000",
    borderRadius: 10,
    paddingVertical: 4,
    paddingHorizontal: 8,
    zIndex: 1,
  },
  nuevoText: {
    color: "white",
    fontSize: 12,
    fontWeight: "900",
  },
  title: {
    fontSize: 14,
    color: "white",
    fontWeight: "900",
    textAlign: "center",
    marginTop: 5,
  },
  description: {
    fontSize: 14,
    color: "white",
    fontWeight: "500",
    textAlign: "center",
    marginTop: 5,
  },
});
