import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { TrabajadoresScreen } from "../../screens/Administrador/Trabajadores/TrabajadoresScreen";
import {screen} from "../../utils"

const Stack = createNativeStackNavigator();


export function TrabajadoresStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
            name={screen.trabajadores.trabajadores} 
            component={TrabajadoresScreen} 
            options={{headerShown: false}} 
            />
     </Stack.Navigator>
    );
}