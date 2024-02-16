import React, { useState, useEffect, useRef } from "react";
import { Text, View, StyleSheet, Pressable, TextInput } from "react-native";

export default function Timer({ navigation }: any) {
  const [inputSeconds, setInputSeconds] = useState("");
  const [inputMinutes, setInputMinutes] = useState("");
  const [inputHours, setInputHours] = useState("");

  const secondsRef = useRef(0);
  const minutesRef = useRef(0);
  const hoursRef = useRef(0);

  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  const [isTimerStarted, setTimerStarted] = useState(false); //Start Button Pressed
  const [isRunning, setRunning] = useState(false); //Is it actively running

  useEffect(() => {
    hoursRef.current =
      inputHours === "" || !parseInt(inputHours) ? 0 : parseInt(inputHours);
    minutesRef.current =
      inputMinutes === "" || !parseInt(inputMinutes)
        ? 0
        : parseInt(inputMinutes);
    secondsRef.current;
    inputSeconds === "" || !parseInt(inputSeconds) ? 0 : parseInt(inputSeconds);
    secondsRef.current = parseInt(inputSeconds);

    setSeconds(secondsRef.current);
    setMinutes(minutesRef.current);
    setHours(hoursRef.current);
  }, [inputHours, inputMinutes, inputSeconds]);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | undefined;

    if (isRunning) {
      intervalId = setInterval(() => {
        console.log(hoursRef.current, minutesRef.current, secondsRef.current);
        if (secondsRef.current > 0) {
          secondsRef.current = secondsRef.current - 1;
        } else if (minutesRef.current !== 0) {
          minutesRef.current = minutesRef.current - 1;
          secondsRef.current = 59;
        } else if (hoursRef.current !== 0) {
          hoursRef.current = hoursRef.current - 1;
          minutesRef.current = 59;
          secondsRef.current = 59;
        } else {
          clearInterval(intervalId);
          deleteTimer();
        }
        setSeconds(secondsRef.current);
        setMinutes(minutesRef.current);
        setHours(hoursRef.current);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const start = () => {
    console.log(hoursRef.current, minutesRef.current, secondsRef.current);
    setTimerStarted(true);
    setRunning(true);
  };

  const deleteTimer = () => {
    setTimerStarted(false);
    setRunning(false);
    setInputSeconds("");
    setInputMinutes("");
    setInputHours("");
  };

  const formatTime = () => {
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <View style={styles.parentContainer}>
      <View style={styles.bodyContainer}>
        <Text style={styles.baseText}>Timer</Text>
        {isTimerStarted ? (
          <Text style={styles.baseText}>
            {isTimerStarted ? formatTime() : ""}
          </Text>
        ) : (
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputText}
              inputMode="numeric"
              placeholder="Hours"
              value={inputHours}
              onChangeText={setInputHours}
            />
            <TextInput
              style={styles.inputText}
              inputMode="numeric"
              placeholder="Minutes"
              value={inputMinutes}
              onChangeText={setInputMinutes}
            />
            <TextInput
              style={styles.inputText}
              inputMode="numeric"
              placeholder="Seconds"
              value={inputSeconds}
              onChangeText={setInputSeconds}
            />
          </View>
        )}
        <View>
          {isTimerStarted ? (
            <View style={styles.timerButtonContainer}>
              <Pressable
                onPress={() => setRunning(!isRunning)}
                style={styles.timerButton}
              >
                <Text style={styles.baseText}>
                  {isRunning ? "Pause" : "Resume"}
                </Text>
              </Pressable>
              <Pressable
                onPress={() => deleteTimer()}
                style={styles.timerButton}
              >
                <Text style={styles.baseText}>Delete</Text>
              </Pressable>
            </View>
          ) : (
            <Pressable onPress={() => start()} style={styles.timerButton}>
              <Text style={styles.baseText}>Start</Text>
            </Pressable>
          )}
        </View>
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
  timerButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
  },
  timerButton: {
    flex: 1,
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
