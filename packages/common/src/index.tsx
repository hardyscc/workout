import React from "react";
import { StyleSheet, View } from "react-native";
import { Router } from "./Router";

export const App = () => {
  return (
    <View style={styles.container}>
      <Router />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
