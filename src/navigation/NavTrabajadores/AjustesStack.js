import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { AjustesScreen } from "../../screens/Trabajadores/Ajustes/AjustesScreen";
import {screen} from "../../utils"

const Stack = createNativeStackNavigator();


export function AjustesStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
            name={screen.ajustes.ajustes} 
            component={AjustesScreen} 
            options={{
                headerShown: false
              }} 
            />
     </Stack.Navigator>
    );
}