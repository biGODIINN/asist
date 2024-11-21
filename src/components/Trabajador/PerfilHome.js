import { StyleSheet, Text, View, Image } from "react-native";

export function PerfilHome() {
  return (
    <View style={perfilAdminStyle.container}>
      <View>
        <Text style={perfilAdminStyle.titulo}>Hola! Anderson</Text>
        <Text style={perfilAdminStyle.titulo2}>Bienvenido!</Text>
      </View>
      <Image
        source={require("../../../assets/img/fotoperfil.png")} // Cambié la ruta a require
        style={perfilAdminStyle.image}
      />
    </View>
  );
}

const perfilAdminStyle = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 60,
    height: 100,
    padding: 10,
    marginLeft: 0,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
  },
  titulo2: {
    fontSize: 16,
    fontWeight: "light",
  },
  image: {
    width: 70,
    height: 70,
    resizeMode: "cover",
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 40, // Para bordes redondeados
    borderWidth: 3, // Ancho del borde
    borderColor: "#fff", // Color del borde
  },
});
