import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../screens/HomeScreen/HomeScreen";
import AppointmentListsCategory from "../../screens/AppointmentListsCategory/AppointmentListsCategory";

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
        name="AppointmentListsCategory"
        component={AppointmentListsCategory}
      />
    </stack.Navigator>
  );
};

export default DocHomeStack;
