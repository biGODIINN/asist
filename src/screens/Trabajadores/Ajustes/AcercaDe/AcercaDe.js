import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";

import { iconGfLlegue } from "../../../../utils/iconos";


export function AcercaDe() {
  return (
    <SafeAreaView style={style.container}>
      <Text style={style.tituloPrincipal}>Acerca de</Text>

      <View style={style.icon}>
        <Image source={iconGfLlegue} style={style.img} />
      </View>

      <View style={style.scrollContainer}>
        <View style={style.viewScroll}>
          <ScrollView>
            <Text style={style.text}>
              Grupo Firma es un holding diversificado, con una sólida presencia
              en varios sectores estratégicos que reflejan nuestro compromiso
              con la innovación y el servicio de calidad. Fundado con la visión
              de ofrecer soluciones integrales, Grupo Firma abarca negocios en
              rentacar, grúas, lubricentro, hostal y exportación de cerezas.
              Rentacar: Nuestra flota de vehículos modernos y bien mantenidos
              garantiza que nuestros clientes disfruten de una experiencia de
              movilidad sin complicaciones. Desde automóviles compactos hasta
              camionetas para grandes grupos, tenemos la opción perfecta para
              cada necesidad. Grúas: Ofrecemos servicios de grúas confiables y
              eficientes, con un equipo profesional listo para asistir en
              situaciones de emergencia y traslado de vehículos. Nuestra
              tecnología avanzada asegura un servicio rápido y seguro,
              minimizando cualquier inconveniente para nuestros clientes.
              Lubricentro: En nuestro lubricentro, proporcionamos servicios de
              mantenimiento y lubricación de alta calidad, utilizando productos
              de primera línea. Nuestro equipo de expertos se asegura de que
              cada vehículo funcione de manera óptima, prolongando su vida útil
              y mejorando su rendimiento. Hostal: Nuestro hostal combina
              comodidad y calidez, ofreciendo a nuestros huéspedes un espacio
              acogedor para descansar. Con instalaciones modernas y un personal
              amable, nos esforzamos por hacer que cada estancia sea memorable,
              ya sea por placer o por trabajo. Exportadora de Cereza:
              Comprometidos con la calidad, nuestra división de exportación de
              cerezas se dedica a llevar lo mejor de nuestros productos locales
              a mercados internacionales. Trabajamos directamente con
              agricultores para garantizar que cada cereza sea seleccionada y
              empacada con los más altos estándares. En Grupo Firma, creemos en
              el poder de la diversificación y la calidad. Nuestro objetivo es
              crear experiencias excepcionales en cada uno de nuestros
              servicios, contribuyendo al desarrollo de las comunidades donde
              operamos y estableciendo relaciones duraderas con nuestros
              clientes.
            </Text>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  tituloPrincipal: {
    margin: "auto",
    fontSize: 24,
    fontWeight: "900",
    marginTop: 40,
  },
  icon: {
    alignItems: "center",
    marginTop: 20,
  },
  img: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  scrollContainer: {
    flex: 1,
    marginTop: 20,
  },
  viewScroll: {
    marginHorizontal: 16,
    padding: 16,
    maxHeight: "90%",
  },
  text: {
    color: "#000",
    textAlign: "justify",
    lineHeight: 30,
    fontSize:19
  },
});
