import StopWatch from "../screens/StopWatch/stopwatch";
import Clock from "../screens/Clock/clock";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Timer from "../screens/Timer/timer";

const Stack = createNativeStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Timer"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Clock" component={Clock} />
        <Stack.Screen name="StopWatch" component={StopWatch} />
        <Stack.Screen name="Timer" component={Timer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
