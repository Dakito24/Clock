import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import NavButton from "../../navigation/nav-buttons";

export default function Clock({ navigation }: any) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, [time]);

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
      <NavButton navigation={navigation} />
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
  }
});
