import React, { useState } from "react";
import Checkbox from "expo-checkbox";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
} from "react-native";

export function TerminosCondiciones() {
  const [isChecked, setChecked] = useState(false);

  return (
    <>
      <SafeAreaView style={style.bg}>
        <View style={style.container}>
          <Text style={style.tituloPrincipal}>Términos y Condiciones</Text>
        </View>
        <View style={style.TerminosCondiciones}>
          <ScrollView style={style.bg} >
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
        <View style={style.viewCheckbox}>
          <Checkbox
            style={style.checkbox}
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? "green" : undefined}
          />
          <Text style={style.textAcepto}>Acepto términos y condiciones</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const style = StyleSheet.create({
  bg: {
    backgroundColor: "white",
  },
  container: {
    marginTop: 40,
    marginRight: 100,
    marginLeft: 25,
  },
  tituloPrincipal: {
    fontSize: 24,
    fontWeight: "900",
    marginTop: 40,
  },
  TerminosCondiciones: {
    marginHorizontal: 16,
    padding: 16,
    maxHeight: "70%",
  },
  text: {
    color: "#000",
    textAlign: "justify",
    lineHeight: 30,
    fontSize: 19,
  },
  checkbox: {
    margin: 8,
    borderRadius: 5,
    width: 30,
    height: 30,
  },
  viewCheckbox: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 25,
  },
  textAcepto: {
    fontSize: 18,
    fontWeight: "700",
    marginLeft: 8,
  },
});