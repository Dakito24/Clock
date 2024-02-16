import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Pressable, TextInput } from "react-native";

export default function Timer({ navigation }: any) {
  const [inputSeconds, setInputSeconds] = useState("");
  const [inputMinutes, setInputMinutes] = useState("");
  const [inputHours, setInputHours] = useState("");

  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  const [isTimerRunning, setTimerRunning] = useState(false);

  useEffect(() => {
    setHours(
      inputHours === "" || !parseInt(inputHours) ? 0 : parseInt(inputHours)
    );
    setMinutes(
      inputMinutes === "" || !parseInt(inputMinutes)
        ? 0
        : parseInt(inputMinutes)
    );
    setSeconds(
      inputSeconds === "" || !parseInt(inputSeconds)
        ? 0
        : parseInt(inputSeconds)
    );
  }, [inputHours, inputMinutes, inputSeconds]);

  const start = () => {
    console.log(hours, minutes, seconds);
  };

  return (
    <View style={styles.parentContainer}>
      <Text style={styles.baseText}>
        {inputHours}:{inputMinutes}:{inputSeconds}
      </Text>
      <View style={styles.bodyContainer}>
        <Text style={styles.baseText}>Timer</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputText}
            keyboardType="numeric"
            placeholder="Hours"
            value={inputHours}
            onChangeText={setInputHours}
          />
          <TextInput
            style={styles.inputText}
            keyboardType="numeric"
            placeholder="Minutes"
            value={inputMinutes}
            onChangeText={setInputMinutes}
          />
          <TextInput
            style={styles.inputText}
            keyboardType="numeric"
            placeholder="Seconds"
            value={inputSeconds}
            onChangeText={setInputSeconds}
          />
        </View>
        <Pressable onPress={() => start()} style={styles.navButton}>
          <Text style={styles.baseText}>Start</Text>
        </Pressable>
      </View>

      {/* Nav Button */}
      <View style={styles.navButtonContainer}>
        <Pressable
          onPress={() => navigation.navigate("Clock")}
          style={styles.navButton}
        >
          <Text style={styles.navText}>Clock</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("StopWatch")}
          style={styles.navButton}
        >
          <Text style={styles.navText}>StopWatch</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("Timer")}
          style={styles.navButton}
        >
          <Text style={styles.navText}>Timer</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    flexDirection: "column",
  },
  bodyContainer: {
    backgroundColor: "#000000",
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
  },
  inputText: {
    flex: 1,
    color: "#66b6d2",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    width: "25%",
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  baseText: {
    color: "#66b6d2",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 40,
  },
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
  navText: {
    color: "#66b6d2",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
});
