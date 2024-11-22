import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";

export function ButtonRe({
  title,
  onPress,
  buttonStyle,
  textStyle,
  disableTouchable,
}) {
  
  // Si disableTouchable es verdadero, se usa un View sin TouchableOpacity.
  if (disableTouchable) {
    return (
      <View style={[styles.button, buttonStyle]}>
        <Text style={textStyle}>{title}</Text>
      </View>
    );
  }

  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, buttonStyle]}>
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    height: 46,
    paddingTop: 10,
  },
});
