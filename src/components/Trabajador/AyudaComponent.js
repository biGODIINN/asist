import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    Pressable,
  } from "react-native";
  
  export function AyudaComponent({ img, tittle, description, tittle2,id}) {
    const handlePress = () => {
    //* si el id es 1 redireccionar a preguntas frecuentes
    //* si el id es 2 redireccionar a soporte
    
  
  
    };
  
    return (
      <SafeAreaView>
        <Text style={style.tituloPrincipal}>{tittle}</Text>
        <Text style={style.titulo}>{tittle2}</Text>
        <View style={style.shadowContainer}>
          <Pressable
            style={({ pressed }) => [
              style.container,
              { backgroundColor: pressed ? "#e0e0e0" : "white" },
            ]}
            onPress={handlePress}
            android_ripple={{ color: "#ccc" }}
          >
            <View style={style.contenido}>
              <View style={style.bg}>
                <Image source={img} style={style.img} resizeMode="contain" />
              </View>
              <View style={style.line} />
              <View style={style.descriptionContainer}>
                <Text style={style.textDescription}>{description}</Text>
              </View>
            </View>
          </Pressable>
   
        </View>
      </SafeAreaView>
    );
  }
  
  const style = StyleSheet.create({
    container: {
      width: "90%",
      marginLeft: 24,
      marginTop: 10,
      borderRadius: 12,
      overflow: "hidden",
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
      position: "relative", // Para permitir que los elementos hijos se posicionen en relación
    },
    contenido: {
      flexDirection: "row",
      padding: 16,
      backgroundColor: "white",
      borderRadius: 12,
      alignItems: "flex-start",
    },
    bg: {
      width: "30%",
      alignItems: "center",
      justifyContent: "center",
    },
    line: {
      width: 1,
      backgroundColor: "black",
      height: "100%",
      marginHorizontal: 10,
    },
    descriptionContainer: {
      width: "70%",
      paddingLeft: 10,
      paddingRight: 10,
    },
    textDescription: {
      color: "black",
      fontSize: 16,
      lineHeight: 22,
    },
    titulo: {
      fontSize: 16,
      fontWeight: "bold",
      marginLeft: 24,
      marginTop: 10, 
      marginBottom: 5,
    },
    tituloPrincipal: {
      fontSize: 24,
      fontWeight: "900",
      marginLeft: 24,
      marginBottom: 50, 
    },
    img: {
      width: "100%",
      height: undefined,
      aspectRatio: 1,
    },
    soporte: {
      position: "absolute", 
      bottom: 0, 
      left: 24,
      fontSize: 16,
     
    },
  });
  