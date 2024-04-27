import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../../screens/WelcomScreen/WelcomeScreen";
import LoginScreen from "../../screens/LoginScreen/LoginScreen";
import TabBar from "../../components/TabBar/TabBar";
import SelectionScreen from "../../screens/SignUpScreens/SelectionScreen/SelectionScreen";
import UserRegScreen from "../../screens/SignUpScreens/UserRegScreen/UserRegScreen";
import DoctorRegScreen from "../../screens/SignUpScreens/DoctorRegScreen/DoctorRegScreen";
import DoctorRegScreen2 from "../../screens/SignUpScreens/DoctorRegScreen2/DoctorRegScreen2";
import DoctorRegScreen4 from "../../screens/SignUpScreens/DoctorRegScreen4/DoctorRegScreen4";
import DoctorRegScreen3 from "../../screens/SignUpScreens/DoctorRegScreen3/DoctorRegScreen3";

const stack = createNativeStackNavigator();

const LoginStack = () => {
  return (
    <stack.Navigator
      screenOptions={{
        headerStyle: { flex: 1, backgroundColor: "transparent" },
        headerShown: false,
      }}
    >
      <stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <stack.Screen name="LoginScreen" component={LoginScreen} />
      <stack.Screen name="TabBar" component={TabBar} />
      <stack.Screen name="SelectionScreen" component={SelectionScreen} />
      <stack.Screen name="UserRegScreen" component={UserRegScreen} />
      <stack.Screen name="DoctorRegScreen" component={DoctorRegScreen} />
      <stack.Screen name="DoctorRegScreen2" component={DoctorRegScreen2} />
      <stack.Screen name="DoctorRegScreen3" component={DoctorRegScreen3} />
      <stack.Screen name="DoctorRegScreen4" component={DoctorRegScreen4} />
    </stack.Navigator>
  );
};

export default LoginStack;
