import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../screens/HomeScreen/HomeScreen";

const Stack = createNativeStackNavigator();

const HomeStack = ({ route }) => {
  const { userId, role } = route.params;

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { flex: 1, backgroundColor: "transparent" },
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        initialParams={{ userId: userId, role: role }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
