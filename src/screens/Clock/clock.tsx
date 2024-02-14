import React, { useState } from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";

export default function Clock({ navigation }: any) {
  return (
    <View style={styles.parentContainer}>
      <View style={styles.bodyContainer}>
        <Text style={styles.baseText}>Clock</Text>
      </View>
      <View style={styles.navButtonContainer}>
        <Pressable
          onPress={() => navigation.navigate("Clock")}
          style={styles.navButton}
        >
          <Text style={styles.baseText}>Clock</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("StopWatch")}
          style={styles.navButton}
        >
          <Text style={styles.baseText}>StopWatch</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("Timer")}
          style={styles.navButton}
        >
          <Text style={styles.baseText}>Timer</Text>
        </Pressable>
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
    flexDirection: "row", // Arrange buttons horizontally in a line
    justifyContent: "space-evenly",
    backgroundColor: "#000000",
    width: "100%",
    height: 30,
  },
  navButton: {
    flex: 1,
  },
  baseText: {
    color: "#f03f44",
    textAlign: "center",
    fontWeight: "bold",
  },
});
