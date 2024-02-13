import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Clock from './src/Clock/clock'
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Clock></Clock>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
