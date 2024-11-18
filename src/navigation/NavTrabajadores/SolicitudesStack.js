import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {SolicitudesScreen} from "../../screens/Trabajadores/Solicitudes/SolicitudesScreen";
// import { AddSolicitudesScreen } from "../screens/Solicitudes/AddSolicitudesScreen";
import {screen} from "../../utils"

const Stack = createNativeStackNavigator();


export function SolicitudesStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
            name={screen.solicitudes.solicitudes} 
            component={SolicitudesScreen} 
            options={{headerShown: false}} 
            />
            {/* <Stack.Screen 
            name={screen.solicitudes.addsolicitudes} 
            component={AddSolicitudesScreen} 
            options={{title: "Añadir Solicitudes"}} 
            /> */}
     </Stack.Navigator>
    );
}
