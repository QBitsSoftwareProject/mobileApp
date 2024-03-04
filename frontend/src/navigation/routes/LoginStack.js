import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../../screens/WelcomScreen/WelcomeScreen';
const stack = createNativeStackNavigator();

const LoginStack = () => {
  return (
    <stack.Navigator screenOptions={{ headerStyle: { flex:1,backgroundColor: 'transparent' }, headerShown:false }}>
      
      <stack.Screen name='WelcomeScreen' component={WelcomeScreen} />
      
    </stack.Navigator>
  )
}

export default LoginStack