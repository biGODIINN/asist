import { StyleSheet, Text, View, Image } from "react-native";



export  function PerfilHome() {
  return (
    <View style={perfilAdminStyle.container}>
      <View>
        <Text style={perfilAdminStyle.titulo}>Hola! Administrador</Text>
        <Text style={perfilAdminStyle.titulo2}>Bienvenido!</Text>
      </View>
      <Image
        source={{
          uri: "/Users/grupofirma/Documents/app_asistencia_front2/assets/icon.png",
        }}
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
    marginLeft: 20,
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
    width: 52,
    height: 70,
    resizeMode: "cover",
    marginLeft: 10,
    marginRight: 20,
    borderRadius: 20,
  },
});
