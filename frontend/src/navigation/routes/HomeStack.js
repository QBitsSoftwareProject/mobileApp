import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TaskStack from './TaskStack';

const stack = createNativeStackNavigator();

const HomeStack = () => {

  return (

    <stack.Navigator screenOptions={{ headerStyle: { flex:1,backgroundColor: 'transparent' }, headerShown:false }}>
      
      <stack.Screen name='HomeScreen' component={TaskStack} />
      
    </stack.Navigator>

  )
}

export default HomeStack