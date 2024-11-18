import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { PerfilScreen } from "../../screens/Trabajadores/PerfilScreen"
import {screen} from "../../utils"

const Stack = createNativeStackNavigator();


export function PerfilStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
            name={screen.perfil.perfil} 
            component={PerfilScreen} 
            options={{
                headerShown: false
              }} 
            />
     </Stack.Navigator>
    );
}