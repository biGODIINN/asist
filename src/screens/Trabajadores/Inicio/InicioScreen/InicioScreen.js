import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
import { PerfilHome } from "../../../../components/Trabajador/PerfilHome";
import { ResumenDiario } from "../../../../components/Trabajador/ResumenDiario";
import { ComponentNotificaciones } from "../../../../components/Trabajador/ComponentNotificaciones";
import { Otros } from "../../../../components/Trabajador/Otros";
import { screen } from "../../../../utils";

export function InicioScreen({ navigation = {} }) {
  const goToMetricas = () => {
    // Cambiar la vista de acuerdo al botón presionado
    navigation.navigate(screen.inicio.metricas, { view: 'metricas' }); // Para "Métricas"
  };

  const goToMiFicha = () => {
    navigation.navigate(screen.inicio.metricas, { view: 'miFicha' }); // Para "Mi Ficha"
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {/* Componente PerfilHome con onPress */}
        <TouchableOpacity style={styles.perfilHome} onPress={goToMiFicha}>
          <PerfilHome />
        </TouchableOpacity>
      </View>

      <View style={styles.notificacionesContainer}>
        <Text style={styles.titulo}>Notificaciones</Text>
        <ComponentNotificaciones
          imageUri={require("../../../../../assets/img/photo1.png")}
          titulo={"Tienes 5 % trabajadores ausentes"}
          texto={"Realiza una solicitud o comunícate con personal de RR.HH"}
          nuevo={"Nuevo"}
          style={styles.contenedorNotificaciones}
        />
      </View>

      <View style={styles.resumendiarioContainer}>
        <TouchableOpacity onPress={goToMetricas}>
          <ResumenDiario />
        </TouchableOpacity>
      </View>

      <View style={styles.otrosContainer}>
        <Text style={styles.titulo}>Otros</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
          <Otros
            imageUri={require("../../../../../assets/img/photo1.png")}
            title={"Nuevo tutorial Disponible"}
            description={"¿Cómo registrar tus marcaciones de forma correcta?"}
            nuevo={"Nuevo"}
          />
          <Otros
            imageUri={require("../../../../../assets/img/photo2.png")}
            title={"Notificaciones Personalizadas"}
            description={"Actívalas para mantener tus métricas."}
            style={{ backgroundColor: "#8CC63F" }}
          />
          <Otros
            imageUri={require("../../../../../assets/img/photo2.png")}
            title={"¿Quieres saber más sobre la app?"}
            description={"Visita la sección “Acerca de” y conoce nuestro proyecto."}
            style={{ backgroundColor: "#007D00" }}
          />
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  perfilHome: {
    marginTop: -35,
  },
  notificacionesContainer: {
    marginTop: 0, // Reduce el margen superior para acercar a PerfilHome
  },
  titulo: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 30,
    marginBottom: 10,
  },
  contenedorNotificaciones: {
    backgroundColor: "#fc6464",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
    marginRight: 20,
    padding: 10,
    width: "90%",
    height: 110,
    borderRadius: 30,
  },
  otrosContainer: {
    marginTop: 25,
    padding: 10,
    overflow: "visible",
  },
  scrollView: {
    marginBottom: 100,
  },
  resumendiarioContainer: {
    marginTop: 1,
  },
});
