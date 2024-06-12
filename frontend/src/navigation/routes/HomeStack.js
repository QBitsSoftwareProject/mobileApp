import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../screens/HomeScreen/HomeScreen";
import GoalsStack from "./GoalsStack";
import TaskStack from "./TaskStack";
import AppointmentStack from "../routes/AppointmentStack";
import DocHomeStack from "../routes/DocHomeStack";
import StressLevelStack from './StressLevelStack';
import MethodSuggessionStack from './MindRelaxingMethodStack';
import FeedbackStack from './FeedbackStack';
import JournalStack from './JournalStack';

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
      {role == "regularUser" && (
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          initialParams={{ userId: userId, role: role }}
        />
      )}

      {role == "doctor" && (
        <Stack.Screen name="DocHomeStack" component={DocHomeStack} />
      )}

      <Stack.Screen name="GoalsStack" component={GoalsStack} />
      <Stack.Screen name="AppointmentStack" component={AppointmentStack} />
      <Stack.Screen name="TaskStack" component={TaskStack} />
      <Stack.Screen name="StressLevel" component={StressLevelStack} />
      <Stack.Screen name="MindRelaxingMethod" component={MethodSuggessionStack} />
      <Stack.Screen name='FeedbackStack' component={FeedbackStack} />
      <Stack.Screen name='JournalStack' component={JournalStack} />
    </Stack.Navigator>
  );
};

export default HomeStack;
