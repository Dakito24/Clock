import React, { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

export default function Timer({ navigation }: any) {
  return (
    <View style={styles.parentContainer}>
      <View style={styles.bodyContainer}>
        <Text style={styles.baseText}>Timer</Text>
      </View>
      <View style={styles.navButtonContainer}>
        <Button
          title="Clock"
          onPress={() => navigation.navigate("Clock")}
        />
        <Button
          title="StopWatch"
          onPress={() => navigation.navigate("StopWatch")}
        />
        <Button
          title="Timer"
          onPress={() => navigation.navigate("Timer")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1, // Make the parent container take up the whole screen
    flexDirection: "column", // Set the flex direction to column to stack content vertically
  },
  bodyContainer: {
    backgroundColor: "#000000",
    flex: 1, // Make the body container take up the remaining space after the button
  },
  navButtonContainer: {
    // Remove styling that overlaps with parent container styling
    justifyContent: "flex-end", // Align button at the bottom
    alignItems: "center",
    backgroundColor: "#000000",
    width: "100%",
    height: 30,
  },
  baseText: {
    color: "#f03f44",
    textAlign: "center",
    fontWeight: "bold",
  },
});