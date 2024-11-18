import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { SolicitudesAdminScreen } from "../../screens/Administrador/Solicitudes/SolicitudesAdminScreen";
import {screen} from "../../utils"

const Stack = createNativeStackNavigator();


export function SolicitudesAdminStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
            name={screen.solicitudesadmin.solicitudesadmin} 
            component={SolicitudesAdminScreen} 
            options={{headerShown: false}} 
            />
     </Stack.Navigator>
    );
}