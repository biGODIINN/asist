import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {SolicitudesScreen} from "../../screens/Trabajadores/Solicitudes/SolicitudesScreen";
import { AddSolicitudesScreen } from "../../screens/Trabajadores/Solicitudes/AddSolicitudesScreen";
import {screen} from "../../utils"

const Stack = createNativeStackNavigator();


export function SolicitudesStack() {
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
            name={screen.solicitudes.solicitudes} 
            component={SolicitudesScreen} 
            options={{headerShown: true}} 
            />
            <Stack.Screen 
            name={screen.solicitudes.addsolicitudes} 
            component={AddSolicitudesScreen} 
            options={{title: "Añadir Solicitudes"}} 
            />
     </Stack.Navigator>
     </>
    );
}
