import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

export default function StopWatch({ navigation }: any) {
  const [count, setCount] = useState(0);
  const [isRunning, setRunning] = useState(false);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | undefined;

    if (isRunning) {
      intervalId = setInterval(() => {
        setCount((count) => count + 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);

  const formatCount = (count: number) => {
    const seconds = count % 60;
    const minutes = Math.floor(count / 60) % 60;
    const hours = Math.floor(count / 3600);

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };
  return (
    <View style={styles.parentContainer}>
      <View style={styles.bodyContainer}>
        <Text style={styles.baseText}>StopWatch</Text>
        <Text style={styles.baseText}>{formatCount(count)}</Text>
        <View style={styles.stopwatchContainer}>
          <Pressable
            style={styles.stopwatchButtons}
            onPress={() => setRunning(!isRunning)}
          >
            <Text style={styles.baseText}>{isRunning ? "Stop" : "Start"}</Text>
          </Pressable>
          <Pressable
            style={styles.stopwatchButtons}
            onPress={() => {
              setRunning(false);
              setCount(0);
            }}
          >
            <Text style={styles.baseText}>Reset</Text>
          </Pressable>
        </View>
      </View>

      {/* To Do Move Navigation button to own folder */}
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
    justifyContent: "center",
  },
  stopwatchContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
  },
  stopwatchButtons: {
    flex: 1,
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
