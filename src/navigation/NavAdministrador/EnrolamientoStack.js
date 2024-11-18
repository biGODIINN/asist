import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {EnrolamientoScreen} from "../../screens/Administrador/Enrolamiento/EnrolamientoScreen"
import {screen} from "../../utils"

const Stack = createNativeStackNavigator();


export function EnrolamientoStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
            name={screen.enrolamiento.enrolamiento} 
            component={EnrolamientoScreen} 
            options={{headerShown: false}} 
            />
     </Stack.Navigator>
    );
}