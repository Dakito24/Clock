import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";

export default function Clock({ navigation }: any) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, [time]);

  // To Do get weather

  const formatTime = (time: Date) => {
    const seconds = time.getSeconds();
    const minutes = time.getMinutes();
    let hours = time.getHours();

    const timeOfDay = hours >= 12 ? 'PM' : 'AM'
    hours = hours % 12;

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")} ${timeOfDay}`;
  };
  return (
    <View style={styles.parentContainer}>
      <View style={styles.bodyContainer}>
        <Text style={styles.baseText}>Clock</Text>
        <Text style={styles.baseText}>
          {formatTime(time)}
        </Text>
      </View>
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
    flexDirection: "column", // Set the flex direction to column to stack content vertically
  },
  bodyContainer: {
    backgroundColor: "#000000",
    flex: 1,
    justifyContent: "center",
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
