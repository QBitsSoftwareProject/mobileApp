import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../../screens/TaskWelcomeScreen/WelcomeScreen';

const stack = createNativeStackNavigator();

const HomeStack = () => {

  return (

    <stack.Navigator screenOptions={{ headerStyle: { flex:1,backgroundColor: 'transparent' }, headerShown:false }}>
      
      <stack.Screen name='HomeScreen' component={WelcomeScreen} />
      
    </stack.Navigator>

  )
}

export default HomeStack