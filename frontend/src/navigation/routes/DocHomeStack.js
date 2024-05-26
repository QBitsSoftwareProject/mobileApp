import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../screens/HomeScreen/HomeScreen";
import PendingAppointmentList from "../../screens/PendingAppointmentList/PendingAppointmentList";
const stack = createNativeStackNavigator();

const DocHomeStack = () => {
  return (
    <stack.Navigator
      screenOptions={{
        headerStyle: { flex: 1, backgroundColor: "transparent" },
        headerShown: false,
      }}
    >
      {/* <stack.Screen name='HomeScreen' component={HomeScreen} />  */}
      <stack.Screen
        name="PendingAppointmentList"
        component={PendingAppointmentList}
      />
    </stack.Navigator>
  );
};

export default DocHomeStack;
