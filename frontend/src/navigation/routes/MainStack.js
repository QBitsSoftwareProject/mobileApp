import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginStack from "../routes/LoginStack";
import TabBar from "../../components/TabBar/TabBar";
import WelcomeScreen from "../../screens/WelcomScreen/WelcomeScreen";
import LoginScreen from "../../screens/LoginScreen/LoginScreen";

const stack = createNativeStackNavigator();

const MainStack = ({ userId, role }) => {
  return (
    <stack.Navigator
      screenOptions={{
        headerStyle: { flex: 1, backgroundColor: "transparent" },
        headerShown: false,
      }}
    >
      <stack.Screen
        name="TabBar"
        component={TabBar}
        initialParams={{ userId: userId, role: role, routeName: "MainStack" }}
      />
      <stack.Screen name="LoginStack" component={LoginStack} />
    </stack.Navigator>
  );
};

export default MainStack;
