import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {HistorialScreen} from "../../screens/Trabajadores/Historial/HistorialScreen"
import { HistorialDetallesScreen } from "../../screens/Trabajadores/Historial/HistorialDetallesScreen/HistorialDetallesScreen"
import {screen} from "../../utils"

const Stack = createNativeStackNavigator();


export function HistorialStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
            name={screen.historial.historial} 
            component={HistorialScreen} 
            options={{headerShown: true}} 
            />
            <Stack.Screen 
            name={screen.historial.historialdetalles} 
            component={HistorialDetallesScreen} 
            options={{title: "Detalles"}} 
            />
     </Stack.Navigator>
    );
}