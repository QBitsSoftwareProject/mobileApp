import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GoalsStack from "./GoalsStack";

const stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <stack.Navigator
      screenOptions={{
        headerStyle: { flex: 1, backgroundColor: "transparent" },
        headerShown: false,
      }}
    >
      <stack.Screen name="GoalsStack" component={GoalsStack} />
    </stack.Navigator>
  );
};

export default HomeStack;
