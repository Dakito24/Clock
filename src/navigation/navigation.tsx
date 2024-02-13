import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StopWatch from '../screens/StopWatch/stopwatch'
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Router() {
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