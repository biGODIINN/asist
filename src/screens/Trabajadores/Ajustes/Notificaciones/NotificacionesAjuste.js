import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";

export  function NotificacionesAjuste() {
  const [isEnabled, setIsEnabled] = useState(true);

const toggleSwitch = () =>
  setIsEnabled((previousState) => {
    if (!previousState) {
      // Lógica aquí
      console.log("logicaa");
    }
   
    return !previousState; 
  });


  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Notificaciones</Text>
        <View style={styles.toggleContainer}>
          <Text style={styles.toggleText}>Activar notificaciones</Text>
          <TouchableOpacity
            style={[
              styles.switch,
              { backgroundColor: isEnabled ? "#458901" : "#e0e0e0" },
            ]}
            onPress={toggleSwitch}
            activeOpacity={0.8}
          >
            <View
              style={[
                styles.knob,
                { transform: [{ translateX: isEnabled ? 22 : 2 }] },
              ]}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    marginTop: 40,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    marginTop: -30,
  },
  toggleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    padding: 16,
    borderRadius: 12,
    borderColor: "#dfdede",
    borderWidth: 0.5,
  },

  toggleText: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 16,
    textAlign: "center",
  },

  switch: {
    width: 50,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    padding: 2,
  },
  knob: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: "green",
  },
});
