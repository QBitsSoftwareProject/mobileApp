import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../screens/HomeScreen/HomeScreen";
import AvailableDoctors from "../../screens/AppointmentScreens/Specialists/AvailableDoctors";
import MakeAppointment from "../../screens/AppointmentScreens/MakeAppointment/MakeAppointment";
import AppointmentStatus from "../../screens/AppointmentScreens/AppointmentStatus/AppointmentStatus";

const stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <stack.Navigator
      screenOptions={{
        headerStyle: { flex: 1, backgroundColor: "transparent" },
        headerShown: false,
      }}
    >
      <stack.Screen name="AvailableDoctors" component={AvailableDoctors} />
      <stack.Screen name="MakeAppointment" component={MakeAppointment} />
      <stack.Screen name="AppointmentStatus" component={AppointmentStatus} />
    </stack.Navigator>
  );
};

export default HomeStack;
