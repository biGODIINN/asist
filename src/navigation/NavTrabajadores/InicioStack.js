import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { InicioScreen } from "../../screens/Trabajadores/Inicio/InicioScreen"
import { MetricasScreen } from "../../screens/Trabajadores/Inicio/MetricasScreen";
import {screen} from "../../utils"

const Stack = createNativeStackNavigator();


export function InicioStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
            name={screen.inicio.inicio} 
            component={InicioScreen} 
            options={{
                headerShown: false
              }} 
            />
             <Stack.Screen
             name={screen.inicio.metricas}
            component={MetricasScreen}
            options={{
            title: "", 
            }}
            />
     </Stack.Navigator>
    );
}