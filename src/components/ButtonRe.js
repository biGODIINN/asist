import React from "react";
import { Button, View, StyleSheet, TouchableOpacity,Text } from "react-native";

export function ButtonRe({ title, onPress , style }) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    height:46,
    paddingTop:10
  },
  buttonText: {
    color: "#fff",
  },
});
