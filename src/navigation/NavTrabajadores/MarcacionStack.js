import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MarcacionScreen } from "../../screens/Trabajadores/Marcacion/MarcacionScreen"
// import { CameraScreen } from "../screens/Marcacion/CameraScreen/CameraScreen";
import { screen } from "../../utils"

const Stack = createNativeStackNavigator();


export function MarcacionStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name={screen.marcacion.marcacion}
          component={MarcacionScreen}
          options={{
            headerShown: false 
          }}
        />
        {/* <Stack.Screen
          name={screen.marcacion.camera}
          component={CameraScreen}
          options={{
            title: "", 
          }}
        /> */}
      </Stack.Navigator>
    );
  }