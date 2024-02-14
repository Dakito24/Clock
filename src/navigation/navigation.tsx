import { StatusBar } from "expo-status-bar";

import StopWatch from "../screens/StopWatch/stopwatch";
import Clock from "../screens/Clock/clock";;
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StopWatch">
        <Stack.Screen name="Clock" component={Clock} />
        <Stack.Screen name="StopWatch" component={StopWatch} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
