import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { InicioAdminScreen } from "../../screens/Administrador/InicioAdminScreen"
import {screen} from "../../utils"

const Stack = createNativeStackNavigator();


export function InicioAdminStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
            name={screen.inicio.inicio} 
            component={InicioAdminScreen} 
            options={{
                title: "", 
                headerShown: false,
              }}
            />
     </Stack.Navigator>
    );
}