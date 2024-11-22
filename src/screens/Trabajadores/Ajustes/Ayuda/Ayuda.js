import  {View,SafeAreaView,StyleSheet} from 'react-native'
import { AyudaComponent } from "../../../../components/Trabajador/AyudaComponent";
import { imgSoporte,imgIcon } from '../../../../utils/iconos';


export function Ayuda() {
  return (
    <>
      <SafeAreaView>
        <View style={style.viewContenido}>
          <AyudaComponent
            img={imgIcon}
            tittle={"¿Necesitas ayuda?"}
            tittle2={"Preguntas Frecuentes"}
            description={
              "Si tienes dudas acerca del funcionamiento de nuestra app, consulta la sección de preguntas frecuentes. "
            }
            id={1}
          />
          <AyudaComponent
            img={imgSoporte}
            tittle={""}
            tittle2={"Soporte"}
            description={
              "Ingresa aquí si necesitas soporte técnico relacionado con el funcionamiento de la app."
            }
            id={2}
          />
        </View>
      </SafeAreaView>
    </>
  );
}


const style = StyleSheet.create({
  viewContenido : {
    marginTop:50
  }
})
