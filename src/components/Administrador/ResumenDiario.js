import { StyleSheet, View, Text } from "react-native";

//* props text1, text2, text3, text4, text5, text6
export function ResumenDiario() {
  return (
    <View style={style.container}>
      <Text style={style.titulo}>Resumen Diario</Text>
      <View style={style.shadowContainer}>
        <View style={style.contenido}>
          <View style={style.bg}>
            <Text style={style.texCenter}>54</Text>
            <Text style={style.textDescription}>Personal Activo</Text>
          </View>
          <View style={style.bg}>
            <Text style={style.texCenter}>25</Text>
            <Text style={style.textDescription}>Minutos Atrasados</Text>
          </View>
          <View style={style.bg}>
            <Text style={style.texCenter}>23</Text>
            <Text style={style.textDescription}>
              Personal Ausente
              {"\n"}(personal que no ha marcado)
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    width: "90%",
    height: 200, 
    marginLeft: 24,
    marginTop: 10,
  },
  shadowContainer: {
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOffset: {
      width: 1,
      height: -2,
    },
    shadowOpacity: 0.7,
    shadowRadius: 5,
    elevation: 5,
    flex: 1,
    borderRadius: 12, 
  },
  contenido: {
    borderRadius: 12,
    padding: 16, 
    
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "white",
  },
  bg: {
    width: "30%",
    alignItems: "center",
  },
  texCenter: {
    textAlign: "center",
    color: "#458901",
    fontSize: 30,
    marginTop: 10,
    fontWeight: "bold",
  },
  textDescription: {
    color: "black",
    fontSize: 16,
    textAlign: "center",
  },
  titulo: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 5,
    marginTop: 10,
    marginBottom: 5,
  },
});
