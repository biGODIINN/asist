import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { MetricasScreen } from "../../screens/Administrador/Metricas/MetricasScreen/MetricasScreen";
import {screen} from "../../utils"

const Stack = createNativeStackNavigator();


export function MetricasStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
            name={screen.metricas.metricas} 
            component={MetricasScreen} 
            options={{headerShown: false}} 
            />
     </Stack.Navigator>
    );
}