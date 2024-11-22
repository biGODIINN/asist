import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "../../utils";
import { AjusteScreen } from "../../screens/Trabajadores/Ajustes/AjustesScreen";
import { NotificacionesAjuste } from "../../screens/Trabajadores/Ajustes/Notificaciones/NotificacionesAjuste";
import { Contraseña } from "../../screens/Trabajadores/Ajustes/Contraseña/Contraseña";
import { AcercaDe } from "../../screens/Trabajadores/Ajustes/AcercaDe/AcercaDe";
import { Ayuda } from "../../screens/Trabajadores/Ajustes/Ayuda/Ayuda";
import { TerminosCondiciones } from "../../screens/Trabajadores/Ajustes/TerminosCondiciones/TerminosCondiciones";

const Stack = createNativeStackNavigator();

export function AjustesStack() {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: "black",
          headerTitleAlign: "center",
          headerShown: true,
        }}
      >
        <Stack.Screen
          name={screen.ajustes.ajustes}
          component={AjusteScreen}
          options={{
            title: "Ajustes", // Título que se mostrará
            headerStyle: {
              backgroundColor: "white", // Fondo blanco en el encabezado
              borderBottomWidth: 0, // Sin línea debajo
              elevation: 0, // Elimina la elevación (sombra) en Android
              shadowOpacity: 0, // Elimina la sombra en iOS
            },
            headerTitleStyle: {
              fontSize: 17, // Tamaño del texto del título
              fontWeight: "bold", // Opcional: negrita para el título
            },
          }}
        />
        <Stack.Screen
          name={screen.ajustes.notification}
          component={NotificacionesAjuste}
          options={{
            title: "",
            headerStyle: {
              backgroundColor: "white",
              elevation: 0, // Elimina la elevación (sombra) en Android
              shadowOpacity: 0, // Elimina la sombra en iOS
            },
            headerTintColor: "black",
          }}
        />
        <Stack.Screen
          name={screen.ajustes.password}
          component={Contraseña}
          options={{
            title: "",
            headerStyle: {
              backgroundColor: "white",
              elevation: 0, // Elimina la elevación (sombra) en Android
              shadowOpacity: 0, // Elimina la sombra en iOS
            },
            headerTintColor: "black",
          }}
        />
        <Stack.Screen
          name={screen.ajustes.acerca}
          component={AcercaDe}
          options={{
            title: "",
            headerStyle: {
              backgroundColor: "white",
              elevation: 0, // Elimina la elevación (sombra) en Android
              shadowOpacity: 0, // Elimina la sombra en iOS
            },
            headerTintColor: "black",
          }}
        />
        <Stack.Screen
          name={screen.ajustes.ayuda}
          component={Ayuda}
          options={{
            title: "",
            headerStyle: {
              backgroundColor: "white",
              elevation: 0, // Elimina la elevación (sombra) en Android
              shadowOpacity: 0, // Elimina la sombra en iOS
            },
            headerTintColor: "black",
          }}
        />
        <Stack.Screen
          name={screen.ajustes.terminosYCondiciones}
          component={TerminosCondiciones}
          options={{
            title: "",
            headerStyle: {
              backgroundColor: "white",
              elevation: 0, // Elimina la elevación (sombra) en Android
              shadowOpacity: 0, // Elimina la sombra en iOS
            },
            headerTintColor: "black",
          }}
        />
      </Stack.Navigator>
    </>
  );
}
