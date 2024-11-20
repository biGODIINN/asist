import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { InicioScreen } from "../../screens/Trabajadores/InicioScreen"
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
     </Stack.Navigator>
    );
}