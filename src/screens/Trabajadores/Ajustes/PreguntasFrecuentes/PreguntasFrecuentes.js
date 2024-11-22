import React, { useState } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import { AjusteComponent } from "../../components/Ajustes/AjusteComponet";

const flechaIcon = require("../../../assets/flechaajuste.png");

const preguntas = [
  {
    pregunta: "¿Cuando Pagan ?",
  },
  {
    pregunta: "Y el aumento cuando 🤣 ?",
  },
  {
    pregunta: "¿Cuál es la moneda de Japón?",
  },
  {
    pregunta: "¿Cuál es la moneda de Japón?",
  },
];

export function PreguntasFrecuentes() {
  const [visibleIndex, setVisibleIndex] = useState(null);

  const toggleRespuesta = (index) => {
    setVisibleIndex(visibleIndex === index ? null : index);
  };

  return (
    <SafeAreaView>
      <ScrollView style={styles.safeView}>
        <View style={styles.viewContainer}>
          {preguntas.map((item, index) => (
            <View key={index}>
              <TouchableOpacity onPress={() => toggleRespuesta(index)}>
                <AjusteComponent text={item.pregunta} icon2={flechaIcon} />
              </TouchableOpacity>
              {visibleIndex === index && (
                <Text style={styles.respuesta}>{item.respuesta}</Text>
              )}
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    margin: "auto",
  },
  safeView: {
    marginTop:150,
    width: "100%",
  },
  respuesta: {
    marginVertical: 10,
    paddingHorizontal: 20,
    color: "gray"
  },
});
