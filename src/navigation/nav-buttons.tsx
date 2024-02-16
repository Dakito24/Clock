import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

export default function NavButton({ navigation }: any) {
  return (
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
  );
}

const styles = StyleSheet.create({
  navButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "#000000",
    width: "100%",
    height: 30,
  },
  navButton: {
    flex: 1,
  },
  baseText: {
    color: "#66b6d2",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
});
