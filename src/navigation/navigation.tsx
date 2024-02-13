import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StopWatch from "../screens/StopWatch/stopwatch";
import Clock from "../screens/Clock/clock";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Clock />} />
        <Route path="/stopwatch" element={<StopWatch />} />
      </Routes>
    </BrowserRouter>
  );
}
