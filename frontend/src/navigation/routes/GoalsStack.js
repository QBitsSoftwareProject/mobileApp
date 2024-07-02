import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ViewGoalScreen from "../../screens/GoalsScreens/ViewGoalsScreen/ViewGoalScreen";
import InsideGoalsScreen from "../../screens/GoalsScreens/InsideGoalsScreen/InsideGoalsScreen";

const stack = createNativeStackNavigator();
const GoalsStack = () => {
  return (
    <stack.Navigator
      screenOptions={{
        headerStyle: { flex: 1, backgroundColor: "transparent" },
        headerShown: false,
      }}
    >
      <stack.Screen name="ViewGoalsScreen" component={ViewGoalScreen} />
      <stack.Screen name="InsideGoalsScreen" component={InsideGoalsScreen} />
    </stack.Navigator>
  );
};

export default GoalsStack;
