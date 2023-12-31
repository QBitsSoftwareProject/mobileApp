import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import WelcomeScreen from '../../screens/TaskWelcomeScreen/WelcomeScreen';

const stack = createNativeStackNavigator();

const HomeStack = () => {
  return (

    <stack.Navigator>
      <stack.Screen name='HomeScreen' component={HomeScreen}/>
      <stack.Screen name='WelcomeScreen' component={WelcomeScreen}/>
    </stack.Navigator>

  )
}

export default HomeStack
