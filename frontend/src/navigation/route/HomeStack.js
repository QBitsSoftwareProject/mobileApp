import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';

const stack = createNativeStackNavigator();

const HomeStack = () => {
  return (

    <stack.Navigator>
      <stack.Screen name='HomeScreen' component={HomeScreen}/>
    </stack.Navigator>

  )
}

export default HomeStack
