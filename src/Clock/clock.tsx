import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StopWatch from '../StopWatch/stopwatch'
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Clock() {
    return (
        <BrowserRouter>
      <Routes>
      <Route path="/">
        <Route path="stopwatch" element={<StopWatch />} />
      </Route>
      </Routes>
    </BrowserRouter>
    )
}
