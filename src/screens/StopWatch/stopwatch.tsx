import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import NavButton from "../../navigation/nav-buttons";

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

      <NavButton navigation={navigation} />
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
  }
});
