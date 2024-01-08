import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../../screens/TaskScreens/WelcomeScreen/WelcomeScreen';
import McqScreen from '../../screens/TaskScreens/QuestionsScreens/McqScreen/McqScreen';
import TaskListScreen from '../../screens/TaskScreens/TaskList/TaskListScreen';
import TaskDescriptionScreen from '../../screens/TaskScreens/TaskDescription/TaskDescriptionScreen';

const stack = createNativeStackNavigator();

const TaskStack = () => {

  return (

    <stack.Navigator screenOptions={{ headerStyle: { flex:1,backgroundColor: 'transparent' }, headerShown:false }}>
      
      <stack.Screen name='WelcomeScreen' component={WelcomeScreen} />
      <stack.Screen name='McqScreen' component={McqScreen} />
      <stack.Screen name='TaskListScreen' component={TaskListScreen} />
      <stack.Screen name='TaskDescriptionScreen' component={TaskDescriptionScreen} />
      
    </stack.Navigator>

  )
}

export default TaskStack