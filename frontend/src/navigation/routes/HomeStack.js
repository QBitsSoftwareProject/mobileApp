import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../screens/HomeScreen/HomeScreen";
import ViewGoalScreen from "../../screens/ViewGoalsScreen/ViewGoalScreen";

const stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <stack.Navigator
      screenOptions={{
        headerStyle: { flex: 1, backgroundColor: "transparent" },
        headerShown: false,
      }}
    >
      <stack.Screen name="ViewGoalScreen" component={ViewGoalScreen} />
    </stack.Navigator>
  );
};

export default HomeStack;
