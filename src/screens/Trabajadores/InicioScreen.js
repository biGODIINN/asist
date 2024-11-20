import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Notificaciones } from "../../components/Administrador/Notificaciones";
import { ResumenDiario } from "../../components/Trabajador/ResumenDiario";
import { Otros } from "../../components/Trabajador/Otros";
import { PerfilHome } from "../../components/Trabajador/PerfilHome";
import { ComponentNotificaciones } from "../../components/Trabajador/ComponentNotificaciones";

export function InicioScreen() {
  return (
    <>
      <View style={styles.perfilHome}>
        <PerfilHome />
      </View>
      <View style={styles.notificacionesContainer}>
        <Text style={styles.titulo}>Notificaciones</Text>
        <ComponentNotificaciones
          src={
            "/Users/grupofirma/Desktop/app-asistencia/assets/icon/Grupo 560.png"
          }
          titulo={"Tienes 5 % trabajadores ausentes"}
          texto={"Realiza una solicitud o comunícate con personal de RR.HH"}
          nuevo={"Nuevo"}
          style={styles.contenedorNotificaciones}
        />
      </View>
      <View style={styles.resumendiarioContainer}>
        <ResumenDiario />
      </View>
      <View style={styles.otrosContainer}>
        <Text style={styles.titulo}>Otros</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.scrollView}
        >
          <Otros
            imageUri={
              "/Users/grupofirma/Documents/app_asistencia_front2/assets/photo1.png"
            }
            title={"Nuevo tutorial Disponible"}
            description={"¿Cómo registrar tus marcaciones de forma correcta?"}
            nuevo={"Nuevo"}
          />
          <Otros
            imageUri={
              "/Users/grupofirma/Documents/app_asistencia_front2/assets/photo2.png"
            }
            title={"Notificaciones Personalizadas"}
            description={"Actívalas para mantener tus métricas."}
            style={{ backgroundColor: "#8CC63F" }}
          />
          <Otros
            imageUri={
              "/Users/grupofirma/Documents/app_asistencia_front2/assets/photo2.png"
            }
            title={"¿Quieres saber más sobre la app?"}
            description={
              "Visita la sección “Acerca de” y conoce nuestro proyecto."
            }
            style={{ backgroundColor: "#007D00" }}
          />
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  perfilHome: {
    marginTop: 10,
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
    marginRight: 20, // Mantén este margen o ajústalo si es necesario
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
  resumendiarioContainer:{
    marginTop:1
  }
});
